import { L_SCREEN_SIZE, M_SCREEN_SIZE, MOVIES_BASE_URL, SHORT_MOVIE_DURATION } from './constants';

export function getMoviesCount(width) {
  if (width < M_SCREEN_SIZE) {
    return 5
  } else if (width >= M_SCREEN_SIZE && width < L_SCREEN_SIZE) {
    return 8
  }
  return 12;
}

export function getAdditionalMoviesCount(width) {
  if (width < L_SCREEN_SIZE) {
    return 2
  }
  return 3;
}

export function formatTime(duration) {
  const minutes = duration % 60;

  const hours = (duration-minutes) / 60;

  return `${hours === 0 ? '' : hours.toString() + 'ч'} ${(minutes < 10 ? "0" : "") + minutes.toString()}м`;
}

export function filterMovies(movies, filterValue, isShortFilm) {
  return movies.filter((movie) => {
    if (isShortFilm && movie.duration > SHORT_MOVIE_DURATION) {
      return false;
    }
    if (filterValue) {
      return movie.nameRU.toLowerCase().includes(filterValue.toLowerCase())
    }
    return true;
  })
}

export function toMainApiMovieModel(movie) {
  return {
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: `${MOVIES_BASE_URL}${movie.image.url}`,
    trailerLink: movie.trailerLink,
    thumbnail: `${MOVIES_BASE_URL}${movie.image.formats.thumbnail.url}`,
    movieId: movie.id,
  }
}

export function getStorageKey(key, userId) {
  return `${key}_${userId}`
}
