import { useState } from "react";
import { PropTypes } from "prop-types";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const changeHandler = (ev) => {
    setInputValue(ev.target.value);
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
    if (inputValue.trim().length < 1) {
      return;
    }
    onAddCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Buscar GIFs"
        value={inputValue}
        onChange={changeHandler}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
};
