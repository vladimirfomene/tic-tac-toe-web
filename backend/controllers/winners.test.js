const winnerController = require("./winners.js");

describe("testing getWinners....", () => {
  test("", async () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    const req = {};

    await winnerController.getWinners(req, res);
    expect(res.status).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalled();
  });
});

describe("testing createWinner....", () => {
  test("", async () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    const req = {};

    await winnerController.createWinner(req, res);
    expect(res.status).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalled();
  });
});
