import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  const inputValue = "Saitama";
  test("debe cambiar el valor de la caja de texto", () => {
    render(<AddCategory onAddCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
  });

  test("debe llamar a onAddCategory si el input tiene un valor", () => {
    const onNewCat = jest.fn();
    render(<AddCategory onAddCategory={onNewCat} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe("");
    expect(onNewCat).toHaveBeenCalledTimes(1);
    expect(onNewCat).toHaveBeenCalledWith(inputValue);
  });

  test("no debe llamar a onAddCategory si el input está vacio", () => {
    const onNewCat = jest.fn();
    render(<AddCategory onAddCategory={onNewCat} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);
    expect(onNewCat).not.toBeCalled();
  });
});
