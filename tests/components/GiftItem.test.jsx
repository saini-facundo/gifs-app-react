import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";

describe("Pruebas en GiftItem", () => {
  const testTitle = "title";
  const testUrl = "Url";

  test("debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={testTitle} url={testUrl} />);
    expect(container).toMatchSnapshot();
  });
});
