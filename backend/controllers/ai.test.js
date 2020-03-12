const ai = require("./ai");

let players;
beforeAll(() => {
  players = [
    {
      type: "human",
      name: "vlad",
      symbol: "o"
    },
    {
      type: "ai",
      name: "computer",
      symbol: "x"
    }
  ];
});

describe("testing getWinner...", () => {
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

  test("has a player won the game", () => {
    expect(ai.getWinner(horizontalGrid)).toEqual("x");
    expect(ai.getWinner(verticalGrid)).toEqual("x");
    expect(ai.getWinner(diagonalGrid)).toEqual("x");
    expect(ai.getWinner(fullGrid)).toEqual("tie");
  });
});

describe("testing evaluation...", () => {
  test("evaluating winning characters", () => {
    expect(ai.evaluation("tie")).toEqual(0);
    players[0].symbol = "x";
    expect(ai.evaluation("x")).toEqual(-10);
    players[1].symbol = "o";
    expect(ai.evaluation("o")).toEqual(10);
  });
});

describe("testing minimax...", () => {
  test("test optimal value returned by some grid states", () => {
    const fullGrid = [
      ["x", "o", "x"],
      ["x", "x", "o"],
      ["o", "x", "o"]
    ];

    const gridMax = [
      ["x", "o", "x"],
      [4, "o", "o"],
      [7, 8, "x"]
    ];

    const gridMin = [
      ["x", "x", "x"],
      [4, "o", "o"],
      [7, 8, 9]
    ];

    expect(ai.minimax(fullGrid, true)).toEqual(0);
    expect(ai.minimax(gridMax, true)).toEqual(10);
    expect(ai.minimax(gridMin, true)).toEqual(-10);
  });
});

describe("testing findBestMove...", () => {
  test("", () => {
    const startGrid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    const fiveGrid = [
      ["x", 2, 3],
      [4, "o", 6],
      [7, 8, 9]
    ];

    const threeGrid = [
      ["x", "x", "o"],
      [4, "o", 6],
      [7, 8, 9]
    ];

    const sevenGrid = [
      ["x", "x", "o"],
      ["x", "o", 6],
      ["o", 8, 9]
    ];

    const eightGrid = [
      ["x", "x", "o"],
      ["x", "o", "x"],
      ["o", "o", 9]
    ];

    expect(
      ai.findBestMove(startGrid, players[1])
    ).toEqual(1);
    expect(
      ai.findBestMove(fiveGrid, players[1])
    ).toEqual(2);
    expect(
      ai.findBestMove(threeGrid, players[1])
    ).toEqual(4);
    expect(
      ai.findBestMove(sevenGrid, players[1])
    ).toEqual(6);
    expect(
      ai.findBestMove(eightGrid, players[1])
    ).toEqual(9);
  });
});

describe("testing isGridFull...", () => {
  const grid = [
    ["x", "x", "x"],
    ["x", "o", "o"],
    ["x", "x", "x"]
  ];
  test("check if the grid is full", () => {
    expect(ai.isGridFull(grid)).toBeTruthy();
  });
});
