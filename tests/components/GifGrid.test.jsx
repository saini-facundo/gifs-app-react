import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid/>", () => {
  const testCat = "One Punch";

  test("debe mostrar Loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid cat={testCat} />);
    expect(screen.getByText("Cargando...")).toBeTruthy();
    expect(screen.getByText(testCat)).toBeTruthy();
  });

  test("debe mostar items cuando se cargan las imagenes con useFetchGifs", () => {
    const gifs = [
      {
        id: "abc",
        title: "Saitama",
        url: "https://localhost/saitama.jpg",
      },
      {
        id: "sdf556",
        title: "Goku",
        url: "https://localhost/goku.jpg",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });
    render(<GifGrid cat={testCat} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
