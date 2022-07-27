import { useFetchGifs } from "../hooks/useFetchGifs";
import GifItem from "./GifItem";

export const GifGrid = ({ cat }) => {
  const { images, isLoading } = useFetchGifs(cat);
  return (
    <>
      <h3>{cat}</h3>
      <div className="card-grid">
        {images.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
