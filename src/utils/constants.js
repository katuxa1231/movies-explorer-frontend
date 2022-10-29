export const AppRoute = {
  root: `/`,
  movies: `/movies`,
  savedMovies: `/saved-movies`,
  profile: `/profile`,
  login: `/sign-in`,
  registration: `/sign-up`,
  notExist: '/not-exist'
};

export const ToastType = {
  success: 'success',
  warning:'warning',
  error: 'error',
  info: 'info'
}

export const ToastPosition = {
  topLeft: 'top-left',
  topRight: 'top-right',
  bottomLeft: 'bottom-left',
  bottomRight: 'bottom-right',
}


export const toastTitle = {
  [ToastType.success]: 'Успешно',
  [ToastType.error]: 'Ошибка',
  [ToastType.info]: 'Инфо',
  [ToastType.warning]: 'Предупреждение',
}
export const ErrorCode = {
  unauthorized: 401
}

export const message = {
  registration: {
    [ToastType.success]: 'Вы зарегистрировались!',
  },
  profile: {
    [ToastType.success]: 'Данные профиля обновлены',
  },
  [ToastType.error]: 'Что-то пошло не так! Попробуйте ещё раз.',
  emptyResult: 'Ничего не найдено'
}

export const S_SCREEN_SIZE = 320;
export const M_SCREEN_SIZE = 768;
export const L_SCREEN_SIZE = 1280;
export const SHORT_MOVIE_DURATION = 40;
export const USER_STORAGE_KEY = 'current_user'
export const MOVIES_STORAGE_KEY = 'saved_movies'
export const FILTER_STORAGE_KEY = 'filter_movies'
export const SHORT_FILM_STORAGE_KEY = 'is_short_film'
export const TOAST_DELETE_TIME = 3000

// For local development
// export const MAIN_BASE_URL = 'http://localhost:3300';
export const MAIN_BASE_URL = 'https://api.movies-explorer.nomoredomains.icu';
export const MOVIES_BASE_URL = 'https://api.nomoreparties.co';
