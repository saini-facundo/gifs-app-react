import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (cat) => {
  const [imgs, setImgs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getImgs = async () => {
    const newImgs = await getGifs(cat);
    setImgs(newImgs);
    setLoading(false);
  };

  useEffect(() => {
    getImgs();
  }, []);

  return {
    images: imgs,
    isLoading: loading,
  };
};
