import './Error.css'

function Error() {
  return (
    <section className="error">
      <p className="error__number">404</p>
      <p className="error__info-text">Страница не найдена</p>
      <button className="error__button-go-back">Назад</button>
    </section>
  );
}

export default Error;
