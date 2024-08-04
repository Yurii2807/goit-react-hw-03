import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.div}>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(evt) => {
          onFilter(evt.target.value);
        }}
      />
    </div>
  );
};


export default SearchBox;