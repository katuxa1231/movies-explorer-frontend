import SearchForm from '../SearchForm/SearchForm';
import PreloaderSS from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

function Movies() {
  return (
    <>
      <SearchForm></SearchForm>
      <MoviesCardList>
        <MoviesCard></MoviesCard>
        <MoviesCard isLiked={true}></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
      </MoviesCardList>
      <PreloaderSS></PreloaderSS>
    </>
  );
}

export default Movies;
