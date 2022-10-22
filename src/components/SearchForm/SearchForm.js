import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search">
      <form className="search-form">
        <div className="search-form__wrapper">
          <input className="search-form__input" type="text" placeholder="Фильм"/>
          <button className="search-form__submit-button">Найти</button>
        </div>
        <FilterCheckbox></FilterCheckbox>
      </form>
    </section>
  );
}

export default SearchForm;
