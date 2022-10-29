import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { filterMovies } from '../../utils/helpers';
import { mainApi } from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import Message from '../Message/Message';
import { message } from '../../utils/constants';
import { moviesStorage } from '../../utils/MoviesStorage';

function SavedMovies() {
  const [isLoading, setLoadingStatus] = useState(true)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    setLoadingStatus(true)
    mainApi.getMovies()
      .then((movies) => {
        moviesStorage.favoriteMovies = movies
        setMovies(movies)
      })
      .catch((err) => console.log(`Error: ${err.status}`))
      .finally(() => setLoadingStatus(false))
  }, [])

  function handleSearch(filterValue, isShortFilm) {
    setMovies(filterMovies(moviesStorage.favoriteMovies, filterValue, isShortFilm))
  }

  function handleChangeShortFilmsCheckbox(filterValue, isShortFilm) {
    setMovies(filterMovies(moviesStorage.favoriteMovies, filterValue, isShortFilm))
  }

  function handleDeleteButtonClick(movieId) {
    mainApi.deleteMovie(movieId).then(() => {
      moviesStorage.favoriteMovies = moviesStorage.favoriteMovies.filter((movie) => movie.movieId !== movieId)
      setMovies(movies.filter((movie) => movie.movieId !== movieId))
    }).catch((err) => console.log(`Error: ${err.status}`))
  }

  return (
    <>
      <SearchForm onSearch={handleSearch} onShortFilmChange={handleChangeShortFilmsCheckbox} filterValue={''}
                  isShortFilm={false}/>
      <MoviesCardList>
        {!isLoading && (movies.length ? movies.map((movie) => (
          <MoviesCard movie={movie} key={movie.movieId}
                      showDeleteButton={true}
                      onButtonClick={handleDeleteButtonClick}/>)) : <Message text={message.emptyResult}/>)}
      </MoviesCardList>
      <Preloader isLoading={isLoading}></Preloader>
    </>
  );
}

export default SavedMovies;
