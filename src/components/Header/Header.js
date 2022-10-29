import logo from '../../images/logo.svg';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { AppRoute } from '../../utils/constants';

function Header({ onOpenSidenav, isLoggedIn }) {
  function handleMenuButtonClick() {
    onOpenSidenav()
  }

  return (
    <header className="header">
      <Link className="header__logo" to={AppRoute.root}>
        <img alt="Логотип"
             src={logo}
        /></Link>
      {isLoggedIn &&
        <ul className="header__nav-link-wrapper">
          <li>
            <NavLink className="header__nav-link" activeClassName="header__nav-link_active"
                     to={AppRoute.movies}>Фильмы</NavLink>
          </li>
          <li>
            <NavLink className="header__nav-link" activeClassName="header__nav-link_active" to={AppRoute.savedMovies}>Сохраненные
              фильмы</NavLink>
          </li>
        </ul>}
      {isLoggedIn ? <>
        <Link className="header__profile-link" to={AppRoute.profile}>Аккаунт</Link>
        <button className="header__menu-button" onClick={handleMenuButtonClick}></button>
      </> : <div className="header__auth-link-wrapper">
        <Link className="header__auth-link header__auth-link_color_transparent"
              to={AppRoute.registration}>Регистрация</Link>
        <Link className="header__auth-link" to={AppRoute.login}>Войти</Link>
      </div>}
    </header>
  );
}

export default Header;
