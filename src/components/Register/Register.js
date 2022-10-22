import './Register.css';
import { AppRoute } from '../../utils/constants';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <section className="register">
      <div className="register__wrapper">
        <Link className="register__logo" to={AppRoute.root}>
          <img alt="Логотип"
               src={logo}
          /></Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="form">
          <div className="form__input-wrapper">
            <label className="form__label" htmlFor="name">Имя</label>
            <input className="form__input" id="name" name="name" type="text"/>
            <span className="name-input-error form__input-error"/>
          </div>
          <div className="form__input-wrapper">
            <label className="form__label" htmlFor="email">E-mail</label>
            <input className="form__input" id="email" name="email" type="email"/>
            <span className="email-input-error form__input-error"/>
          </div>
          <div className="form__input-wrapper">
            <label className="form__label" htmlFor="password">Пароль</label>
            <input className="form__input form__input_type_error form__input-error_active" id="password" name="password" type="password"/>
            <span className="password-input-error form__input-error">Что-то пошло не так</span>
          </div>
          <button className="form__submit-button" type="submit">Зарегистрироваться</button>
        </form>
        <div className="register__signin">
          <p className="register__info-text">Уже зарегистрированы?</p>
          <Link className="register__link" to={AppRoute.login}>Войти</Link>
        </div>
      </div>
    </section>
  );
}

export default Register;
