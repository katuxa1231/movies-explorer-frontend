import { MOVIES_BASE_URL } from './constants';
import { toMainApiMovieModel } from './helpers';

class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      headers: this._headers
    })
      .then(this._checkResponse)
      .then((movies) => movies.map((movie) => toMainApiMovieModel(movie)))
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: MOVIES_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});
