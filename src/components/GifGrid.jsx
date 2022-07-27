import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ cat }) => {
  useEffect(() => {
    getGifs(cat);
  }, []);
  return (
    <>
      <h3>{cat}</h3>
      {gifs.map((g) => (
        <p>{g}</p>
      ))}
    </>
  );
};
