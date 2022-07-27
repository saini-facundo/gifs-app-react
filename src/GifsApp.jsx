import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifsApp = () => {
  const apiKey = "cv8V5riGJxpNnkhGzKz86NcOX8HwNdeg";

  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCat = () => {
    setCategories(["Mob 100", ...categories]);
  };

  return (
    <>
      <h1>Gifs App</h1>
      <AddCategory />
      <button onClick={onAddCat}>Agregar</button>
      <ol>
        {categories.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ol>
    </>
  );
};
