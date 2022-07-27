import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ cat }) => {
  const [imgs, setImgs] = useState([]);

  const getImgs = async () => {
    const newImgs = await getGifs(cat);
    setImgs(newImgs);
  };

  useEffect(() => {
    getImgs();
  }, []);
  return (
    <>
      <h3>{cat}</h3>
      <ol>
        {imgs.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ol>
    </>
  );
};
