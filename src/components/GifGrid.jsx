import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import GifItem from "./GifItem";

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
      <div className="card-grid">
        {imgs.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
