// initial parser to get values into an array as an integer
// const parseInput = (input) => {
//   const splitInput = input.split(" ");
//   return splitInput.map((value) => {
//     if (isNaN(value)) return value;
//     return +value;
//   });
// };

// super easy version, this replaces the arthimatic operators with the js versions
const parseInput = (input) => {
  const replacePower = input.replace(/\^/g, "**");
  const replaceDivide = replacePower.replace(/÷/g, "/");
  const replaceMultiply = replaceDivide.replace(/x/g, "*");
  return replaceMultiply;
};

const add = (val1, val2) => val1 + val2;
const subract = (val1, val2) => val1 - val2;
const multiply = (val1, val2) => val1 * val2;
const divide = (val1, val2) => val1 / val2;
const indicies = (val1, val2) => val1 * val2;

const operators = {
  "+": add,
  "÷": divide,
  "-": subract,
  // prettier-ignore
  "x": multiply,
  "^": indicies,
};

/**
 * Here we are running the calculation attached to the given operator.
 * Once the calculation is complete, we are replacing the equation in the original array with the answer.
 * eg: 2 + 5 - 3 => 7 - 3.
 * With this updated value we return it so the next calcuation can be made.
 * @param {*} input
 * @param {*} operator
 * @returns
 */
const calculate = (input, operator) => {
  const index = input.indexOf(operator);
  const [val1, , val2] = input.slice(index - 1, index + 2);
  const answer = operators[operator](val1, val2);
  input.splice(index - 1, 3, answer);
  return input;
};

/**
 * Recursive function that continously evaluates until it gets the answer.
 * Something I discovered is that BIDMAS is misleading as in mathematics, Division and Multiplcation is given the same precidence,
 * you calculate left from right. eg: 10 / 2 * 4 = 20, 10 * 3 / 2 = 15.
 * Same for addition and subraction - they are given equal precidence.
 * This makes programming it difficult.
 * @param {*} parsedInput
 * @returns
 */
const evaluate = (parsedInput) => {
  if (parsedInput.length === 1) return parsedInput[0];
  const newArray = [...parsedInput];
  if (parsedInput.includes("(") && parsedInput.includes(")")) {
    // Solve brackets by taking the equation out and running evaluation on it seperately until the brackets are completed.
    const openBracket = newArray.indexOf("(");
    const closeBracket = newArray.indexOf(")");
    const subEquation = newArray.slice(openBracket + 1, closeBracket);
    const answer = evaluate(subEquation);
    newArray.splice(openBracket, closeBracket - openBracket + 1, answer);
    return evaluate(newArray);
  }
  if (parsedInput.includes("^")) {
    return evaluate(calculate(newArray, "^"));
  }
  if (parsedInput.includes("÷")) {
    return evaluate(calculate(newArray, "÷"));
  }
  if (parsedInput.includes("x")) {
    return evaluate(calculate(newArray, "x"));
  }
  if (parsedInput.includes("+")) {
    return evaluate(calculate(newArray, "+"));
  }
  if (parsedInput.includes("-")) {
    return evaluate(calculate(newArray, "-"));
  }
};

const solve = (input) => {
  const parsedInput = parseInput(input);
  // Funnily enough, Javascript has a very useful function called eval which can just evaluate the calculations given as a string.
  // Problem is, is that it's a super dangerious function as it will just evaluate and old Javascript given to it which is why you have to indirectly call it so it doesn't execute random stuff.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
  // eslint-disable-next-line no-eval
  return eval?.(`"use strict";(${parsedInput})`);
  return evaluate(parsedInput);
};

export { solve };
