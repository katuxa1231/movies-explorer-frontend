import './Preloader.css';

function Preloader({isLoading}) {
  return (
    <div className={`preloader ${isLoading && 'preloader_visible'}`}>
      <div className="preloader__spinner"></div>
    </div>
  );
}

export default Preloader;
