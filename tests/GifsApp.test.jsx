import { render, screen, fireEvent } from "@testing-library/react";
import { GifsApp } from "../src/GifsApp";
describe("Pruebas en GifsApp", () => {
  test("no debe mostrar nuevos h3 si se repite una busqueda", () => {
    render(<GifsApp />);

    const inputEl = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(inputEl, { target: { value: "One Punch" } });
    fireEvent.submit(form);
    screen.debug();
    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(2);
  });
});
