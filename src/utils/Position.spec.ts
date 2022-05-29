import { Direction, move, parseDirection, rotate } from "./Position";

describe("rotate()", () => {
  [
    { input: Direction.Right, expected: Direction.Down },
    { input: Direction.Down, expected: Direction.Left },
    { input: Direction.Left, expected: Direction.Up },
    { input: Direction.Up, expected: Direction.Right },
  ].forEach(({ input, expected }) => {
    it(`WHEN '${input}'`, () => {
      expect(rotate(input)).toBe(expected);
    });
  });
});

describe("parseDirection()", () => {
  [
    { input: Direction.Right, expected: "👉" },
    { input: Direction.Down, expected: "👇" },
    { input: Direction.Left, expected: "👈" },
    { input: Direction.Up, expected: "👆" },
  ].forEach(({ input, expected }) => {
    it(`WHEN '${input}'`, () => {
      expect(parseDirection(input)).toBe(expected);
    });
  });
});

describe("move()", () => {
  [
    {
      input: { row: 0, column: 0, direction: Direction.Right, size: 2 },
      expected: { row: 0, column: 1, direction: Direction.Right, size: 2 },
    },
    {
      input: { row: 0, column: 0, direction: Direction.Down, size: 2 },
      expected: { row: 1, column: 0, direction: Direction.Down, size: 2 },
    },
    {
      input: { row: 0, column: 0, direction: Direction.Left, size: 2 },
      expected: { row: 0, column: 0, direction: Direction.Up, size: 2 },
    },
    {
      input: { row: 0, column: 0, direction: Direction.Up, size: 2 },
      expected: { row: 0, column: 0, direction: Direction.Right, size: 2 },
    },
    {
      input: { row: 1, column: 1, direction: Direction.Right, size: 2 },
      expected: { row: 1, column: 1, direction: Direction.Down, size: 2 },
    },
    {
      input: { row: 1, column: 1, direction: Direction.Down, size: 2 },
      expected: { row: 1, column: 1, direction: Direction.Left, size: 2 },
    },
    {
      input: { row: 1, column: 1, direction: Direction.Left, size: 2 },
      expected: { row: 1, column: 0, direction: Direction.Left, size: 2 },
    },
    {
      input: { row: 1, column: 1, direction: Direction.Up, size: 2 },
      expected: { row: 0, column: 1, direction: Direction.Up, size: 2 },
    },
  ].forEach(({ input, expected }, index) => {
    it(`#${index}`, () => {
      expect(move(input)).toStrictEqual(expected);
    });
  });
});
