import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import {
  AppRoute, ErrorCode, message, TOAST_DELETE_TIME, ToastPosition, ToastType,
  USER_STORAGE_KEY
} from '../../utils/constants';
import Main from '../Main/Main';
import Error from '../Error/Error';
import Navigation from '../Navigation/Navigation';
import { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import { moviesStorage } from '../../utils/MoviesStorage';
import { clearStorageForUser, createToast } from '../../utils/helpers';
import Toast from '../Toast/Toast';

function App() {
  const history = useHistory()
  const [isSideNavVisible, setSideNavVisibility] = useState(false)
  const [isLoading, setLoadingStatus] = useState(true)
  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [toastList, setToastList] = useState([]);

  useEffect(() => {
      mainApi.getUserInfo().then((user) => {
        if (user) {
          moviesStorage.save(USER_STORAGE_KEY, user._id)
          setCurrentUser(user)
          setLoggedIn(true)
        }
      }).catch((err) => {
        console.log(`Error: ${err.status}`)
        if (err.status === ErrorCode.unauthorized) {
          const userId = moviesStorage.restore(USER_STORAGE_KEY);
          if (userId) {
            clearStorageForUser(userId)
          }
        }
      })
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
        moviesStorage.save(USER_STORAGE_KEY, user._id)
        setCurrentUser(user)
        setLoggedIn(true)
        history.push(AppRoute.movies)
        showMessage(ToastType.success, message.registration[ToastType.success])
      })
      .catch(handleError)
  }

  function handleLogin(email, password) {
    mainApi.login(email, password)
      .then((user) => {
        moviesStorage.save(USER_STORAGE_KEY, user._id)
        setCurrentUser(user)
        setLoggedIn(true)
        history.push(AppRoute.movies)
      })
      .catch(handleError)
  }

  function handleLogout() {
    mainApi.logout().then(() => {
      setLoggedIn(false);
      history.push(AppRoute.root)
      clearStorageForUser(currentUser._id)
    })
      .catch(handleError)
  }

  function handleError(err) {
    if (err instanceof Response) {
      err.json().then((e) => {
        showMessage(ToastType.error, e.message || message[ToastType.error])
      })
    } else {
      console.log(`Error: ${err.status}`)
    }
  }

  function profileUpdate(name, email) {
    mainApi.updateUserInfo(name, email)
      .then((user) => {
        setCurrentUser(user)
        showMessage(ToastType.success, message.profile[ToastType.success])
      })
      .catch((err) => console.log(`Error: ${err.status}`))
  }

  function showMessage(type, message, title = '') {
    const toast = createToast(type, message, title);
    setToastList([...toastList, toast]);
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
              <Main onOpenSidenav={openSideNav} isLoggedIn={loggedIn} onLogout={handleLogout}
                    onProfileUpdate={profileUpdate} onShowMessage={showMessage}/>
            </Route>
          </Switch>
          <Navigation isOpen={isSideNavVisible} onClose={closeSideNav}/>
          <Preloader isLoading={false}/>
          <Toast
            toastList={toastList}
            position={ToastPosition.bottomLeft}
            autoDelete={true}
            autoDeleteTime={TOAST_DELETE_TIME}
          />
        </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
