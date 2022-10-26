import './Profile.css';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Profile({onLogout, onProfileUpdate}) {
  const currentUser = useContext(CurrentUserContext)
  const { values, handleChange, errors, isValid } = useFormWithValidation({ email: currentUser.email, name: currentUser.name })


  function handleFormSubmit(event) {
    event.preventDefault();

    onProfileUpdate(values.name, values.email)
  }

  function isDataChanged() {
    return values.email !== currentUser.email || values.name !== currentUser.name
  }

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form" onSubmit={handleFormSubmit}>
        <p className="profile__form-wrapper">
          <label className="profile__label" htmlFor="name">Имя</label>
          <input className={`profile__input ${errors.name && 'profile__input_type_error'}`} id="name" name="name" type="text" value={values.name}
                 onChange={handleChange} minLength={2} maxLength={30} required={true} pattern="^[A-Za-zА-Яа-яЁё/s-]+$"/>
        </p>
        <p className="profile__form-wrapper">
          <label className="profile__label" htmlFor="email">E-mail</label>
          <input className={`profile__input ${errors.email && 'profile__input_type_error'}`} id="email" name="email"
                 type="email" required={true} value={values.email}
                 onChange={handleChange}/>
        </p>
        <div className="profile__button-wrapper">
          <button className="profile__edit-button" disabled={!isValid || !isDataChanged()}>Редактировать</button>
          <button className="profile__exit-button" onClick={onLogout}>Выйти из аккаунта</button>
        </div>
      </form>
    </section>
  );
}

export default Profile;
