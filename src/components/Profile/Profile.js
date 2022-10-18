import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form">
        <p className="profile__form-wrapper">
          <label className="profile__label" htmlFor="name">Имя</label>
          <input className="profile__input" id="name" name="name" type="text"/>
        </p>
        <p className="profile__form-wrapper">
          <label className="profile__label" htmlFor="email">E-mail</label>
          <input className="profile__input" id="email" name="email" type="email"/>
        </p>
        <div className="profile__button-wrapper">
          <button className="profile__edit-button">Редактировать</button>
          <button className="profile__exit-button">Выйти из аккаунта</button>
        </div>
      </form>
    </section>
  );
}

export default Profile;
