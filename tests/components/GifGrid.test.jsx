import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";

describe("Pruebas en <GifGrid/>", () => {
  const testCat = "One Punch";

  test("debe mostar Loading inicialmente", () => {
    render(<GifGrid cat={testCat} />);
    //screen.debug();

    expect(screen.getByText("Cargando...")).toBeTruthy();
    expect(screen.getByText(testCat)).toBeTruthy();
  });
});
