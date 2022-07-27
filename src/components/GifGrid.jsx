import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ cat }) => {
  const gifs = getGifs(cat);

  return (
    <>
      <h3>{cat}</h3>
      {gifs.map((g) => (
        <p>{g}</p>
      ))}
    </>
  );
};
