import './SearchForm.css';
import { useForm } from '../../hooks/useForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({onSearch, onShortFilmChange, filterValue, isShortFilm}) {
  const {values, handleChange} = useForm({name: filterValue, shortFilm: isShortFilm})
  function handleSubmit(event) {
    event.preventDefault();
    onSearch(values.name, values.shortFilm)
  }
  function handleChangeShortFilmsCheckbox(event) {
    handleChange(event)
    onShortFilmChange(values.name, event.target.checked)
  }
  return (
    <section className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-form__wrapper">
          <input className="search-form__input" name="name" type="text" placeholder="Фильм" value={values.name} onChange={handleChange}/>
          <button className="search-form__submit-button" type="submit">Найти</button>
        </div>
        <FilterCheckbox value={values.shortFilm} onChangeValue={handleChangeShortFilmsCheckbox}></FilterCheckbox>
      </form>
    </section>
  );
}

export default SearchForm;
