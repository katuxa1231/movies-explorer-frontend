import './FilterCheckbox.css';

function FilterCheckbox({onChangeValue, value}) {
  return (
    <div className="filter-checkbox__wrapper">
      <input className="filter-checkbox visually-hidden" id="shortFilm" name="shortFilm" type="checkbox" checked={value} onChange={onChangeValue}/>
      <label className="filter-checkbox-label" htmlFor="shortFilm">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;
