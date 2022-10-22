import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="filter-checkbox__wrapper">
      <input className="filter-checkbox visually-hidden" id="short-film" name="short-film" type="checkbox"/>
      <label className="filter-checkbox-label" htmlFor="short-film">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;
