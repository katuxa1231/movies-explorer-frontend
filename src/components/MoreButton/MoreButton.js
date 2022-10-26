import './MoreButton.css';

function MoreButton({showedMovieCount, moviesListLength, onMoreButtonClick}) {
  return (
    <button className="more-button" hidden={showedMovieCount >= moviesListLength} onClick={onMoreButtonClick}>Ещё</button>
  );
}

export default MoreButton;
