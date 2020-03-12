import GameController from "@/controllers/game_controller";

let gameController;
beforeAll(() => {
  gameController = new GameController();
});

describe("testing getWinningSymbol...", () => {
  const horizontalGrid = [
    ["x", "x", "x"],
    [4, "o", "o"],
    [7, 8, 9]
  ];
  const verticalGrid = [
    ["x", "o", "o"],
    ["x", "o", "o"],
    ["x", 8, 9]
  ];
  const diagonalGrid = [
    ["x", "o", "x"],
    [4, "x", "o"],
    [7, 8, "x"]
  ];

  const fullGrid = [
    ["x", "o", "x"],
    ["x", "x", "o"],
    ["o", "x", "o"]
  ];
  let grid = null;
  test("has a player won the game", () => {
    grid = horizontalGrid;
    localStorage.setItem("grid", JSON.stringify(grid));
    expect(gameController.getWinningSymbol(grid)).toEqual("x");
    grid = verticalGrid;
    localStorage.setItem("grid", JSON.stringify(grid));
    expect(gameController.getWinningSymbol(grid)).toEqual("x");
    grid = diagonalGrid;
    localStorage.setItem("grid", JSON.stringify(grid));
    expect(gameController.getWinningSymbol(grid)).toEqual("x");
    grid = fullGrid;
    localStorage.setItem("grid", JSON.stringify(grid));
    expect(gameController.getWinningSymbol(grid)).toEqual("tie");
  });
});
