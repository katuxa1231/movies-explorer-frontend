import './Navigation.css'
import { Link, NavLink } from 'react-router-dom';
import { AppRoute } from '../../utils/constants';

function Navigation({isOpen, onClose}) {
  function handleCloseButtonClick() {
    onClose()
  }

  return (
    <section className={`side-nav ${isOpen && 'side-nav_opened'}`}>
      <button className="side-nav__close-button" onClick={handleCloseButtonClick}></button>
      <nav className="side-nav__nav-list">
        <NavLink className="side-nav__link" activeClassName="side-nav__link_active" exact={true} to={AppRoute.root}>Главная</NavLink>
        <NavLink className="side-nav__link" activeClassName="side-nav__link_active" to={AppRoute.movies}>Фильмы</NavLink>
        <NavLink className="side-nav__link" activeClassName="side-nav__link_active" to={AppRoute.savedMovies}>Сохраненные фильмы</NavLink>
      </nav>
      <Link className="side-nav__profile-link" to={AppRoute.profile}>Аккаунт</Link>
    </section>
  );
}

export default Navigation;
