import './Error.css'
import { useHistory } from 'react-router-dom';

function Error() {
  const history = useHistory()

  function handleBackButtonClick() {
    history.goBack()
  }

  return (
    <section className="error">
      <p className="error__number">404</p>
      <p className="error__info-text">Страница не найдена</p>
      <button className="error__button-go-back" onClick={handleBackButtonClick}>Назад</button>
    </section>
  );
}

export default Error;
