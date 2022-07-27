import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifsApp = () => {
  const apiKey = "cv8V5riGJxpNnkhGzKz86NcOX8HwNdeg";

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
