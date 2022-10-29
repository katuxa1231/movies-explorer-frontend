import './Footer.css';
import { AppRoute } from '../../utils/constants';
import { Route, Switch } from 'react-router-dom';

function Footer() {
  return (
    <Switch>
      <Route path={AppRoute.profile}>
      </Route>
      <Route path={AppRoute.root}>
        <section className="footer">
          <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
          <div className="footer__wrapper">
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="https://github.com/" target="_blank" rel="noreferrer">Github</a>
              </li>
            </ul>
            <p className="footer__copyright">© 2022</p>
          </div>
        </section>
      </Route>
    </Switch>

  );
}

export default Footer;
