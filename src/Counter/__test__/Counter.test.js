import React from "react";
import Counter from "../Counter";

import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
});

afterEach(() => {
  cleanup();
});

describe("Counter Component", () => {
  test("renders Counter component", () => {
    //render via beforeEach
  });
});

describe("Header Element", () => {
  test("header renders with correct text", () => {
    //const headerEl = getByTestId("header");

    //expect(headerEl.textContent).toBe("My Counter");
    expect(screen.getByText("My Counter")).toBeInTheDocument();
  });
});

describe("Counter Element", () => {
  test("counter initially starts with text of 0", () => {
    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0");
  });

  test("counter gets correct className and color", () => {
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");
    const addBtn = getByTestId("add-btn");
    const substractBtn = getByTestId("substract-btn");

    expect(counterEl.className).toBe("");

    fireEvent.change(inputEl, {
      target: {
        value: "50",
      },
    });

    fireEvent.click(addBtn);

    expect(counterEl.className).toBe("");

    fireEvent.click(addBtn);

    //counter should be 100
    expect(counterEl.className).toBe("green");

    fireEvent.click(substractBtn);
    fireEvent.click(substractBtn);
    fireEvent.click(substractBtn);
    fireEvent.click(substractBtn);

    //counter should be -100
    expect(counterEl.className).toBe("red");
  });
});

describe("Input Element", () => {
  test("input value starts of with 1", () => {
    expect(screen.getByTestId("input").value).toBe("1");
  });

  test("change value of input works correctly", () => {
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
      target: {
        value: "5",
      },
    });

    expect(inputEl.value).toBe("5");
  });

  test("changing input value and clicking on add button works correctly", () => {
    const addBtn = getByTestId("add-btn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
      target: {
        value: "5",
      },
    });

    fireEvent.click(addBtn);

    expect(counterEl.textContent).toBe("5");
  });
});

describe("Add and Substract Buttons", () => {
  test("add button renders with +", () => {
    expect(screen.getByTestId("add-btn").textContent).toBe("+");
  });

  test("substract button renders with -", () => {
    expect(screen.getByTestId("substract-btn").textContent).toBe("-");
  });

  test("clicking on plus button adds 1 to counter", () => {
    const addBtn = getByTestId("add-btn");
    const counterEl = getByTestId("counter");

    fireEvent.click(addBtn);

    expect(counterEl.textContent).toBe("1");
  });

  test("clicking on minus button substracts 1 from counter", () => {
    const substractBtn = getByTestId("substract-btn");
    const counterEl = getByTestId("counter");

    fireEvent.click(substractBtn);

    expect(counterEl.textContent).toBe("-1");
  });
});
