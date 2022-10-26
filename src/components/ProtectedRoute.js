import { Redirect, Route } from 'react-router-dom';
import { AppRoute } from '../utils/constants';

export function ProtectedRoute({component: Component, ...props}) {
  return (
    <Route>
      {() => props.isLoggedIn ? <Component {...props} /> : <Redirect to={AppRoute.root} />}
    </Route>
  )
}
