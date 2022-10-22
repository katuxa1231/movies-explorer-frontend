import './Login.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/constants';
import logo from '../../images/logo.svg';

function Login() {
  return (
    <section className="login">
      <div className="login__wrapper">
        <Link className="login__logo" to={AppRoute.root}>
          <img alt="Логотип"
               src={logo}
          /></Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="form">
          <div className="form__input-wrapper">
            <label className="form__label" htmlFor="email">E-mail</label>
            <input className="form__input form__input_type_error" id="email" name="email" type="email"/>
            <span className="email-input-error form__input-error"/>
          </div>
          <div className="form__input-wrapper">
            <label className="form__label" htmlFor="password">Пароль</label>
            <input className="form__input form__input_type_error form__input-error_active" id="password" name="password" type="password"/>
            <span className="password-input-error form__input-error">Что-то пошло не так</span>
          </div>
          <button className="form__submit-button" type="submit">Войти</button>
        </form>
        <div className="login__signin">
          <p className="login__info-text">Ещё не зарегистрированы?</p>
          <Link className="login__link" to={AppRoute.registration}>Регистрация</Link>
        </div>
      </div>
    </section>
  );
}


export default Login;
