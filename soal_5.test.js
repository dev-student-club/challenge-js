const { sumOfBigThree } = require('./soal_5');

describe('Testing sumOfBigThree function', () => {
    test('Correctly sums the three largest numbers', () => {
        expect(sumOfBigThree(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(27);
        expect(sumOfBigThree(22, 20, 21, 25, 24)).toBe(71);
        expect(sumOfBigThree(100, 1000, 30, 1)).toBe(1130);
        expect(sumOfBigThree(22, 22, 33, 22)).toBe(77);
    });

    test('Handles fewer than three numbers', () => {
        expect(sumOfBigThree(1)).toBe(1);
        expect(sumOfBigThree(1, 2)).toBe(3);
    });

    test('Handles more than three numbers of the same value', () => {
        expect(sumOfBigThree(5, 5, 5, 5)).toBe(15);
    });

    test('Handles negative numbers', () => {
        expect(sumOfBigThree(-1, -2, -3, -4)).toBe(-6);
    });
});
