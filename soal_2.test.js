const { calculate, resultText } = require('./soal_2');

describe('All test latihan 2', () => {
    test('calculate should return correct result with given formula', () => {
        expect(calculate(101, 52, 99)).toBe(54);
        expect(calculate(101, 52, null)).toBe(103);
        expect(calculate(50, 30, 20)).toBe(60);
    });

    test('resultText should return correct text with the given result', () => {
        expect(resultText(154)).toBe('Result is 154');
        expect(resultText(153)).toBe('Result is 153');
        expect(resultText(60)).toBe('Result is 60');
    });
});
