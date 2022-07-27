import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifsApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCat = (cat) => {
    if (categories.includes(cat)) {
      return;
    }
    setCategories([cat, ...categories]);
  };

  return (
    <>
      <h1>Gifs App</h1>
      <AddCategory onAddCategory={onAddCat} />
      <button onClick={onAddCat}>Agregar</button>

      {categories.map((c) => (
        <GifGrid key={c} cat={c} />
      ))}
    </>
  );
};
