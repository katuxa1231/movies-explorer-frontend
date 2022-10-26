import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../utils/constants';
import { ProtectedRoute } from '../ProtectedRoute';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import './Main.css';

function Main({ onOpenSidenav, isLoggedIn, onLogout, onProfileUpdate }) {
  return (
    <>
      <Header onOpenSidenav={onOpenSidenav} isLoggedIn={isLoggedIn}/>
      <main className="main">
        <Switch>
          <ProtectedRoute
            path={AppRoute.movies}
            component={Movies}
            isLoggedIn={isLoggedIn}
          >
          </ProtectedRoute>
          <ProtectedRoute
            path={AppRoute.savedMovies}
            component={SavedMovies}
            isLoggedIn={isLoggedIn}
          >
          </ProtectedRoute>
          <ProtectedRoute
            path={AppRoute.profile}
            component={Profile}
            isLoggedIn={isLoggedIn}
            onLogout={onLogout}
            onProfileUpdate={onProfileUpdate}
          >
          </ProtectedRoute>
          <Route path={AppRoute.root} exact={true}>
            <Promo></Promo>
            <AboutProject></AboutProject>
            <Techs></Techs>
            <AboutMe></AboutMe>
            <Portfolio></Portfolio>
          </Route>
          <Route>
            <Redirect to={AppRoute.notExist}/>
          </Route>
        </Switch>
      </main>
      <Footer/>
    </>
  );
}

export default Main;
