import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies() {
  return (
    <>
      <SearchForm></SearchForm>
      <MoviesCardList>
        <MoviesCard isFavorite={true}/>
        <MoviesCard isFavorite={true}/>
        <MoviesCard isFavorite={true}/>
      </MoviesCardList>

    </>
  );
}

export default SavedMovies;
