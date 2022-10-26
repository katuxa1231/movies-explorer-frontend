import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useContext, useEffect, useState } from 'react';
import { moviesApi } from '../../utils/MoviesApi';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { mainApi } from '../../utils/MainApi';
import { filterMovies, getAdditionalMoviesCount, getMoviesCount, getStorageKey } from '../../utils/helpers';
import MoreButton from '../MoreButton/MoreButton';
import Message from '../Message/Message';
import { FILTER_STORAGE_KEY, message, MOVIES_STORAGE_KEY, SHORT_FILM_STORAGE_KEY } from '../../utils/constants';
import { moviesStorage } from '../../utils/MoviesStorage';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Movies() {
  const currentUser = useContext(CurrentUserContext)
  const localMovies = moviesStorage.restore(getStorageKey(MOVIES_STORAGE_KEY, currentUser._id)) ?? []
  const filterValue = moviesStorage.restore(getStorageKey(FILTER_STORAGE_KEY, currentUser._id)) ?? ''
  const isShortFilm = moviesStorage.restore(getStorageKey(SHORT_FILM_STORAGE_KEY, currentUser._id)) ?? false
  const { width } = useWindowDimensions()
  const [isLoading, setLoadingStatus] = useState(false)
  const [favoriteMoviesIds, setFavoriteMoviesIds] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
  const [countOfShowedMovies, setCountOfShowedMovies] = useState(getMoviesCount(width))

  useEffect(() => {
    setLoadingStatus(true)
    Promise.all([filterValue ? Promise.resolve(localMovies) : moviesApi.getMovies(), mainApi.getMovies()])
      .then(([movies, savedMovies]) => {
        setFavoriteMoviesIds(savedMovies.map((movie) => movie.movieId))
        if (filterValue) {
          setFilteredMovies(filterMovies(movies, filterValue, isShortFilm))
        } else {
          moviesStorage.allMovies = movies
          setFilteredMovies(filterMovies(movies, '', isShortFilm))
        }
      })
      .catch((err) => console.log(`Error: ${err.status}`))
      .finally(() => setLoadingStatus(false))
  }, [])

  function saveMoviesData(filteredMovies) {
    moviesStorage.save(getStorageKey(MOVIES_STORAGE_KEY, currentUser._id), filteredMovies)
  }

  function saveFilterValue(filterValue) {
    moviesStorage.save(getStorageKey(FILTER_STORAGE_KEY, currentUser._id), filterValue)
  }

  function saveShortFilmValue(isShortFilm) {
    moviesStorage.save(getStorageKey(SHORT_FILM_STORAGE_KEY, currentUser._id), isShortFilm)
  }

  function getMovies() {
    return new Promise((resolve, reject) => {
      if (moviesStorage.allMovies.length) {
        resolve(moviesStorage.allMovies)
        return
      }
      setLoadingStatus(true)
      moviesApi.getMovies()
        .then((movies) => {
          resolve(movies)
        })
        .catch((err) => reject(err))
        .finally(() => setLoadingStatus(false))
    })
  }

  function handleCheckboxChange(filterValue, isShortFilm) {
    const filteredMovies = filterMovies(localMovies, filterValue, isShortFilm)
    setFilteredMovies(filteredMovies)
    saveShortFilmValue(isShortFilm)
  }

  function handleFilterChange(filterValue, isShortFilm) {
    getMovies().then((movies) => {
      const filteredMovies = filterMovies(movies, filterValue, isShortFilm)
      setFilteredMovies(filteredMovies)
      saveMoviesData(filteredMovies)
      saveFilterValue(filterValue)
    }).catch((err) => console.log(`Error: ${err.status}`))
  }

  function handleMoreButtonClick() {
    setCountOfShowedMovies(countOfShowedMovies + getAdditionalMoviesCount(width))
  }

  function handleFavoriteButtonClick(movie, isFavorite) {
    if (isFavorite) {
      mainApi.deleteMovie(movie.movieId).then(() => {
        setFavoriteMoviesIds(favoriteMoviesIds.filter((id) => id !== movie.movieId))
      }).catch((err) => console.log(`Error: ${err.status}`))
    } else {
      mainApi.createMovie(movie).then(() => {
        setFavoriteMoviesIds([...favoriteMoviesIds, movie.movieId])
      }).catch((err) => console.log(`Error: ${err.status}`))
    }
  }

  return (
    <>
      <SearchForm onSearch={handleFilterChange} onShortFilmChange={handleCheckboxChange} filterValue={filterValue}
                  isShortFilm={isShortFilm}/>
      <MoviesCardList>
        {!isLoading && (filteredMovies.length ? filteredMovies.slice(0, countOfShowedMovies).map((movie) => (
          <MoviesCard movie={movie} key={movie.movieId}
                      showDeleteButton={false} isLiked={favoriteMoviesIds.includes(movie.movieId)}
                      onButtonClick={handleFavoriteButtonClick}/>)) : <Message text={message.emptyResult}/>)}
        <MoreButton moviesListLength={filteredMovies.length} showedMovieCount={countOfShowedMovies}
                    onMoreButtonClick={handleMoreButtonClick}></MoreButton>
      </MoviesCardList>
      <Preloader isLoading={isLoading}></Preloader>
    </>
  );
}

export default Movies;
