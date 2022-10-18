import './Promo.css';
import NavTab from '../NavTab/NavTab';

function Promo() {
  return (
    <section className="promo">
      <div className="promo-wrap">
        <div className="promo__title-wrapper">
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        </div>
        <NavTab></NavTab>
      </div>
    </section>
  )
    ;
}

export default Promo;
