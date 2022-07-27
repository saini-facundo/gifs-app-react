export const GifGrid = ({ cat }) => {
  const gifs = [1, 2, 3, 4, 5];
  return (
    <>
      <h3>{cat}</h3>
      {gifs.map((g) => (
        <p>{g}</p>
      ))}
    </>
  );
};
