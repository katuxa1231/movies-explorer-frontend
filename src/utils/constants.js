export const AppRoute = {
  root: `/`,
  movies: `/movies`,
  savedMovies: `/saved-movies`,
  profile: `/profile`,
  login: `/sign-in`,
  registration: `/sign-up`,
  notExist: '/not-exist'
};

export const message = {
  emptyResult: 'Ничего не найдено'
}

export const S_SCREEN_SIZE = 320;
export const M_SCREEN_SIZE = 768;
export const L_SCREEN_SIZE = 1280;
export const SHORT_MOVIE_DURATION = 40;
export const MOVIES_STORAGE_KEY = 'saved_movies'
export const FILTER_STORAGE_KEY = 'filter_movies'
export const SHORT_FILM_STORAGE_KEY = 'is_short_film'

export const MAIN_BASE_URL = 'https://api.movies-explorer.nomoredomains.icu';
export const MOVIES_BASE_URL = 'https://api.nomoreparties.co';
