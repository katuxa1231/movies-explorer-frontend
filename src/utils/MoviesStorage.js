export class MoviesStorage {
  constructor() {
    this._allMovies = [];
    this._favoriteMovies = [];
  }
  save(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  restore(key) {
    return JSON.parse(localStorage.getItem(key))
  }

  clearData(keys) {
    keys.forEach((key) => (localStorage.removeItem(key)))
  }

  get allMovies() {
    return this._allMovies
  }

  set allMovies(movies) {
    this._allMovies = movies
  }

  get favoriteMovies() {
    return this._favoriteMovies
  }

  set favoriteMovies(movies) {
    this._favoriteMovies = movies
  }
}

export const moviesStorage = new MoviesStorage()
