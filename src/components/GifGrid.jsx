import { useFetchGifs } from "../hooks/useFetchGifs";
import GifItem from "./GifItem";
import { PropTypes } from "prop-types";

export const GifGrid = ({ cat }) => {
  const { images, isLoading } = useFetchGifs(cat);
  return (
    <>
      <h3>{cat}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  cat: PropTypes.string.isRequired,
};
