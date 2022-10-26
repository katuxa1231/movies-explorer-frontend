import './MoviesCard.css';
import { formatTime } from '../../utils/helpers';

function MoviesCard({ movie, isLiked, onButtonClick, showDeleteButton }) {
  const {nameRU, duration, image, trailerLink} = movie;

  function handleFavoriteButtonClick() {
    onButtonClick(movie, isLiked)
  }

  function handleDeleteButtonClick() {
    onButtonClick(movie.movieId)
  }

  return (
    <article className="movies-card">
      <a href={trailerLink} target="_blank" rel="noreferrer">
        <img className="movies-card__image"
             alt="Карточка фильма"
             src={image}/>
      </a>
      <div className="movies-card__wrapper">
        <h3 className="movies-card__title">{nameRU}</h3>
        {showDeleteButton ? (<button className="movies-card__delete-button" onClick={handleDeleteButtonClick}>
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M4.00098 5.06055L6.65254 7.71211L7.7132 6.65145L5.06164 3.99989L7.71308 1.34844L6.65242 0.287781L4.00098 2.93923L1.34923 0.287484L0.288574 1.34814L2.94032 3.99989L0.288461 6.65174L1.34912 7.7124L4.00098 5.06055Z"
                  fill="white"/>
          </svg>
        </button>) : (<button className={`movies-card__like-button ${isLiked ? 'movies-card__like-button_active' : ''}`} onClick={handleFavoriteButtonClick}>
          <svg width="10" height="9" viewBox="0 0 10 9" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.27273 0C6.27273 0 5.54545 0.523077 5 1.08974C4.45455 0.566667 3.72727 0 2.72727 0C1.13636 0 0 1.2641 0 2.83333C0 3.61795 0.318182 4.31538 0.909091 4.79487L5 8.5L9.09091 4.79487C9.63636 4.27179 10 3.61795 10 2.83333C10 1.2641 8.86364 0 7.27273 0Z"/>
          </svg>
        </button>)}
      </div>
      <p className="movies-card__time">{formatTime(duration)}</p>
    </article>
  );
}

export default MoviesCard;
