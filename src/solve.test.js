import { solve } from "./solve.js";

describe("solve", () => {
  test.each([
    ["2 + 3", 5],
    ["2 x 5", 10],
    ["4 ÷ 2", 2],
    ["10 - 5", 5],
    ["2 ^ 2", 4],
    ["5 + 5 + 5", 15],
    ["5 + 5 - 4 ÷ 2", 8],
    ["( 2 + 2 ) x 3", 12],
    ["10 x 4 - ( 10 ÷ 4 ) + 2.5", 40],
  ])(`%s = %s`, (question, answer) => {
    expect(solve(question)).toBe(answer);
  });
});
