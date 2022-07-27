import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("");

  const changeHandler = (ev) => {
    setInputValue(ev.target.value);
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
    console.log(inputValue);
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
