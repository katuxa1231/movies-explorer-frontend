import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <ul className="about-project__info-list">
        <li className="about-project__info-item">
          <h3 className="about-project__info-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__info-text">Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.</p>
        </li>
        <li className="about-project__info-item">
          <h3 className="about-project__info-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__info-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <table className="about-project__table">
        <thead>
        <tr>
          <th className="about-project__table-head-cell">1 неделя</th>
          <th className="about-project__table-head-cell about-project__table-head-cell_color_gray">4 недели</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td className="about-project__table-data">Back-end</td>
          <td className="about-project__table-data">Front-end</td>
        </tr>
        </tbody>
      </table>
    </section>
  );
}

export default AboutProject;
