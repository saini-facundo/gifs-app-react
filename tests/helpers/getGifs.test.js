import { getGifs } from "../../src/helpers/getGifs";

describe("pruebas en getGifs", () => {
  test("debe retornar un arreglo de GIFs", async () => {
    const gifs = await getGifs("hxh");
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
