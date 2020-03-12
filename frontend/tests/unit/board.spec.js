import Board from "@/models/board";

let board;
beforeAll(() => {
  board = new Board();
});

describe("testing buildGrid...", () => {
  test("has grid been created with initial vals", () => {
    const grid = board.buildGrid();

    let count = 1;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        expect(grid[i][j]).toBe(count++);
      }
    }
  });
});

describe("testing updateGrid...", () => {
  const grid = [
    ["x", "x", "x"],
    [4, "o", "o"],
    [7, 8, 9]
  ];
  test("can update grid from state A to B", () => {
    localStorage.setItem("grid", JSON.stringify(grid));
    board.updateGrid(1, 0, "o");
    expect(JSON.parse(localStorage.getItem("grid"))).toEqual([
      ["x", "x", "x"],
      ["o", "o", "o"],
      [7, 8, 9]
    ]);
  });
});

describe("testing isPositionEmpty...", () => {
  const grid = [
    ["x", "x", "x"],
    ["x", "o", "o"],
    ["x", "x", "x"]
  ];
  test("check if we have an empty position in the grid", () => {
    localStorage.setItem("grid", JSON.stringify(grid));
    expect(board.isPositionEmpty(1)).toBeFalsy();
    expect(board.isPositionEmpty(-1)).toBeFalsy();
  });
});

describe("testing isGridFull...", () => {
  const grid = [
    ["x", "x", "x"],
    ["x", "o", "o"],
    ["x", "x", "x"]
  ];
  test("check if the grid is full", () => {
    board.grid = grid;
    expect(board.isGridFull()).toBeTruthy();
  });
});

describe("testing getPositionIndices...", () => {
  const grid = [
    ["x", "x", "x"],
    [4, "o", "o"],
    [7, 8, 9]
  ];
  test("getting indices i, j for position", () => {
    localStorage.setItem("grid", JSON.stringify(grid));
    expect(board.getPositionIndices(4)).toEqual({
      i: 1,
      j: 0
    });
  });
});
