import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { AppRoute } from '../../utils/constants';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Error from '../Error/Error';
import Navigation from '../Navigation/Navigation';
import { useState } from 'react';
import Preloader from '../Preloader/Preloader';

function App() {
  const [isSideNavVisible, setSideNavVisibility] = useState(false)
  const headerComponent = <Header onOpenSidenav={openSideNav}/>
  const footerComponent = <Footer />

  function closeSideNav() {
    setSideNavVisibility(false)
  }

  function openSideNav() {
    setSideNavVisibility(true)
  }

  return (
    <div className="page">
      <Switch>
        <Route path={AppRoute.root} exact={true}>
          {headerComponent}
          <Main />
          {footerComponent}
        </Route>
        <Route path={AppRoute.movies}>
          {headerComponent}
          <Movies />
          {footerComponent}
        </Route>
        <Route path={AppRoute.savedMovies}>
          {headerComponent}
          <SavedMovies />
          {footerComponent}
        </Route>
        <Route path={AppRoute.login}>
            <Login />
        </Route>
        <Route path={AppRoute.registration}>
            <Register />
        </Route>
        <Route path={AppRoute.profile}>
          {headerComponent}
            <Profile />
        </Route>
        <Route>
          <Error/>
        </Route>
      </Switch>
      <Navigation isOpen={isSideNavVisible} onClose={closeSideNav} />
      <Preloader isLoading={false} />
    </div>
  );
}

export default App;
