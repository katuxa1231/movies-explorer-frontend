import './AboutMe.css';
import aboutMePhoto from '../../images/about-me.jpg';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__wrapper">
        <img className="about-me__photo"
           alt="Фотография"
           src={aboutMePhoto}
        />
        <div className="about-me__text-wrapper">
          <h3 className="about-me__name">Екатерина</h3>
          <p className="about-me__info">Фронтенд-разработчик, 33 года</p>
          <p className="about-me__additional-info">Я родилась и живу в г. Самаре, закончила факультет информатики МГПУ. У меня есть муж и дочка. Я люблю слушать музыку, а еще увлекаюсь танцами. 10 лет проработала в государственном учреждении и поняла, что больше там работать не хочу. Погрузилась в изучение курса по вэб-разработке и ушла с постоянного места работы.</p>
          <a className="about-me__link" href="https://github.com/katuxa1231" target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
