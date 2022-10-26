import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { AppRoute } from '../../utils/constants';
import Main from '../Main/Main';
import Error from '../Error/Error';
import Navigation from '../Navigation/Navigation';
import { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';

function App() {
  const history = useHistory()
  const [isSideNavVisible, setSideNavVisibility] = useState(false)
  const [isLoading, setLoadingStatus] = useState(true)
  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
      mainApi.getUserInfo().then((user) => {
        if (user) {
          setCurrentUser(user)
          setLoggedIn(true)
        }
      }).catch((err) => console.log(`Error: ${err.status}`))
        .finally(() => (setLoadingStatus(false)))
    },
    []
  )

  function closeSideNav() {
    setSideNavVisibility(false)
  }

  function openSideNav() {
    setSideNavVisibility(true)
  }

  function handleRegister(email, password, name) {
    mainApi.register(email, password, name)
      .then((user) => {
        setCurrentUser(user)
        history.push(AppRoute.movies)
      })
      .catch((err) => {
        console.log(`Error: ${err.status}`)
      })
  }

  function handleLogin(email, password) {
    mainApi.login(email, password)
      .then((user) => {
        setCurrentUser(user)
        setLoggedIn(true)
        history.push(AppRoute.movies)
      })
      .catch((err) => {
        console.log(`Error: ${err.status}`)
      })
  }

  function handleLogout() {
    mainApi.logout().then(() => {
      setLoggedIn(false);
      history.push(AppRoute.root)
    })
      .catch((err) => console.log(`Error: ${err.status}`))
  }

  function profileUpdate(name, email) {
    mainApi.updateUserInfo(name, email)
      .then((user) => {
        setCurrentUser(user)
      })
      .catch((err) => console.log(`Error: ${err.status}`))
  }

  return (isLoading ? null :
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Switch>
            <Route path={AppRoute.login}>
              <Login onLogin={handleLogin}/>
            </Route>
            <Route path={AppRoute.registration}>
              <Register onRegister={handleRegister}/>
            </Route>
            <Route path={AppRoute.notExist}>
              <Error/>
            </Route>
            <Route path={AppRoute.root}>
              <Main onOpenSidenav={openSideNav} isLoggedIn={loggedIn} onLogout={handleLogout} onProfileUpdate={profileUpdate}/>
            </Route>
          </Switch>
          <Navigation isOpen={isSideNavVisible} onClose={closeSideNav}/>
          <Preloader isLoading={false}/>
        </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
