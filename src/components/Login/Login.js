import './Login.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/constants';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Login({onLogin}) {
  const { values, handleChange, errors, isValid } = useFormWithValidation({ email: '', password: '' })

  function handleSubmit(event) {
    event.preventDefault();

    onLogin(values.email, values.password)
  }

  return (
    <section className="login">
      <div className="login__wrapper">
        <Link className="login__logo" to={AppRoute.root}>
          <img alt="Логотип"
               src={logo}
          /></Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form__input-wrapper">
            <label className="form__label" htmlFor="email">E-mail</label>
            <input className={`form__input ${errors.email && 'form__input_type_error'}`} id="email" name="email" type="email" value={values.email}
                   onChange={handleChange}/>
            {errors.email ? <span className="form__input-error">{errors.email}</span> : null}
          </div>
          <div className="form__input-wrapper">
            <label className="form__label" htmlFor="password">Пароль</label>
            <input className={`form__input ${errors.password && 'form__input_type_error'}`} id="password" name="password" type="password" value={values.password} onChange={handleChange}/>
            {errors.password ? <span className="form__input-error">{errors.password}</span> : null}
          </div>
          <button className="form__submit-button" type="submit" disabled={!isValid}>Войти</button>
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
