import React from "react";
import Counter from "../Counter";

import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
});

afterEach(() => {
  cleanup();
});

test("header renders with correct text", () => {
  const headerEl = getByTestId("header");

  expect(headerEl.textContent).toBe("My Counter");
});

test("counter initially starts with text of 0", () => {
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");
});

test("input value starts of with 1", () => {
  const inputEl = getByTestId("input");

  expect(inputEl.value).toBe("1");
});

test("add button renders with +", () => {
  const addBtn = getByTestId("add-btn");

  expect(addBtn.textContent).toBe("+");
});

test("substract button renders with -", () => {
  const substractBtn = getByTestId("substract-btn");

  expect(substractBtn.textContent).toBe("-");
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
