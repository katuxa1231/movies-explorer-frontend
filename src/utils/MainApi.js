import { MAIN_BASE_URL } from './constants';

class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(res);
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._checkResponse)
      .then((res) => res.data)
  }

  createMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify(movie)
    })
      .then(this._checkResponse)
      .then((res) => res.data)
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._checkResponse)
      .then((res) => res.data)
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._checkResponse)
      .then((res) => res.data)
  }

  updateUserInfo(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name,
        email
      })
    })
      .then(this._checkResponse)
      .then((res) => res.data)
  }

  register(email, password, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password, name })
    })
      .then(this._checkResponse)
      .then((res) => res.data)
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({ email, password })
    })
      .then(this._checkResponse)
      .then((res) => res.data)
  }

  logout() {
    return fetch(`${this._baseUrl}/logout`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include'
    })
      .then(this._checkResponse)
      .then((res) => res.data)
  }
}

export const mainApi = new MainApi({
  baseUrl: MAIN_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});
