import { doMath } from './doMath.js';

// Simple sums
describe("doMath", () => {
    [
        {input:"2+2", expected:"4"},
        {input:"5-3", expected:"2"},
        {input:"4x3", expected:"12"},
        {input:"8÷2", expected:"4"}
    ].forEach( ({ input, expected }) => 
        it(`provides correct answer for ${input}`,
            () => expect (doMath(input)).toEqual((expected)))
    );
})

// Multi-step calculations (e.g., 2+3x4, 10÷2+5)
// Use of decimals (e.g., 2.5+3.1, 5.5x2)
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