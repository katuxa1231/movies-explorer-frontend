import './Register.css';
import { AppRoute } from '../../utils/constants';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Register({ onRegister }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation({ email: '', password: '', name: '' })

  function handleSubmit(event) {
    event.preventDefault();

    onRegister(values.email, values.password, values.name)
  }

  return (
    <section className="register">
      <div className="register__wrapper">
        <Link className="register__logo" to={AppRoute.root}>
          <img alt="Логотип"
               src={logo}
          /></Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form__input-wrapper">
            <label className="form__label" htmlFor="name">Имя</label>
            <input className={`form__input ${errors.name && 'form__input_type_error'}`} id="name" name="name"
                   type="text" value={values.name}
                   onChange={handleChange} minLength={2} maxLength={30} required={true}
                   pattern="^[A-Za-zА-Яа-яЁё -]+$"/>
            {errors.name ? <span className="form__input-error">{errors.name}</span> : null}          </div>
          <div className="form__input-wrapper">
            <label className="form__label" htmlFor="email">E-mail</label>
            <input className={`form__input ${errors.email && 'form__input_type_error'}`} id="email" name="email"
                   type="email" required={true} value={values.email}
                   onChange={handleChange}/>
            {errors.email ? <span className="form__input-error">{errors.email}</span> : null}
          </div>
          <div className="form__input-wrapper">
            <label className="form__label" htmlFor="password">Пароль</label>
            <input className={`form__input ${errors.password && 'form__input_type_error'}`} id="password"
                   name="password"
                   type="password" value={values.password} onChange={handleChange} required={true}/>
            {errors.password ? <span className="form__input-error">{errors.password}</span> : null}
          </div>
          <button className="form__submit-button" type="submit" disabled={!isValid}>Зарегистрироваться</button>
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
