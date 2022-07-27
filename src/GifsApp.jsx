import { useState } from "react";

export const GifsApp = () => {
  const apiKey = "cv8V5riGJxpNnkhGzKz86NcOX8HwNdeg";

  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCat = () => {
    setCategories(["Mob 100", ...categories]);
  };

  console.log("categories = ", categories);
  return (
    <>
      <h1>Gifs App</h1>
      <button onClick={onAddCat}>Agregar</button>
      <ol>
        {categories.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ol>
    </>
  );
};
