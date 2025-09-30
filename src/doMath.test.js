import { doMath } from './doMath.js';

describe("doMath", () => {

    // Simple sums
    [
        {input:"2+2", expected:"4"},
        {input:"5-3", expected:"2"},
        {input:"4x3", expected:"12"},
        {input:"8÷2", expected:"4"}
    ].forEach( ({ input, expected }) => 
        it(`correctly calculated simple sum ${input}`,
            () => expect (doMath(input)).toEqual((expected)))
    );

    // Multi-step calculations
    [
        {input:"2+3x4", expected:"14"},
        {input:"10÷2+5", expected:"10"},
        {input:"2x3x4", expected:"24"},
        {input:"100÷2÷5", expected:"10"}
    ].forEach(({ input, expected }) =>
        it(`correctly calculated multi-step sum ${input}`,
            () => expect(doMath(input)).toEqual(doMath(expected)))
    );

    // Use of decimals
    // [
    //     {input:"2.5+3.1",output:"5.6"},
    //     {input:"5.5x2",output:"11"},
    //     {input:"5÷2",output:"2.5"},
    //     {input:"6.6-3.4",output:"3.2"}
    // ].forEach(({input,expected}) =>
    //     it(`correctly calculated simple decimal sum ${input}`,
    //         () => expect(doMath(input)).toEqual(doMath(expected)))
// );

    // Leading zeros (e.g., 0005+3)
    // Operator Handling
    // Multiple operators in a row (e.g., 2++2, 3x÷2)
    // Operator at the start or end (e.g., +2+3, 2+3-)
    // Division by zero (e.g., 5÷0)
    // Negative numbers (e.g., -5+3, 2x-3)
    // Input Edge Cases
    // Empty input (pressing = with nothing entered)
    // Only an operator entered (e.g., just +)
    // Only a number entered (e.g., just 5)
    // Pressing AC or DEL repeatedly
    // Pressing . multiple times in a number (e.g., 2..5+3)
    // UI/UX
    // Button presses update the display as expected
    // DEL removes the last character correctly
    // AC clears the display
    // Result formatting (e.g., trailing zeros, decimal places)
    // Stress/Boundary Cases
    // Very long input strings (e.g., 1+1+1+... many times)
    // Large numbers (e.g., 9999999x9999999)
    // Rapid button presses
    // Invalid/Unexpected Inputs
    // Non-numeric, non-operator characters (if possible)
    // Multiple decimal points in one number
    // Calculation after error (e.g., after division by zero, can you continue?)
});

