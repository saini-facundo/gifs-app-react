import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";

describe("Pruebas en GiftItem", () => {
  const testTitle = "title";
  const testUrl = "https://imgs.com/img.jpg";

  test("debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={testTitle} url={testUrl} />);
    expect(container).toMatchSnapshot();
  });

  test("debe mostrar la imagen con el URl y el ALT indicado", () => {
    render(<GifItem title={testTitle} url={testUrl} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(testUrl);
    expect(alt).toBe(testTitle);
  });

  test("debe mostar el titulo en el componente", () => {
    render(<GifItem title={testTitle} url={testUrl} />);
    expect(screen.getByText(testTitle)).toBeTruthy();
  });
});
