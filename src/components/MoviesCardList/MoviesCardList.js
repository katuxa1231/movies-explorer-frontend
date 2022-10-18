import './MoviesCardList.css';

function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
      {props.children}
      <button className="movies-card__button" hidden={props.children.length < 5}>Ещё</button>
    </section>
  );
}

export default MoviesCardList;
