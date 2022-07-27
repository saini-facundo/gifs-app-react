import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

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
      <ol>
        {categories.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ol>
    </>
  );
};
