export const getGifs = async (cat) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=cv8V5riGJxpNnkhGzKz86NcOX8HwNdeg&q=${cat}&limit=20`;
  const resp = await fetch(url);
  const { data = [] } = await resp.json();

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));
  return gifs;
};
