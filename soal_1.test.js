const { isEvenNumber, moreThanFive, result } = require('./soal_1');

describe('All test latihan 1', () => {
    test('isEvenNumber should return true for even numbers', () => {
        expect(isEvenNumber(2)).toBe(true);
        expect(isEvenNumber(6)).toBe(true);
        expect(isEvenNumber(10)).toBe(true);
    });

    test('isEvenNumber should return false for odd numbers', () => {
        expect(isEvenNumber(3)).toBe(false);
        expect(isEvenNumber(7)).toBe(false);
        expect(isEvenNumber(11)).toBe(false);
    });

    // Tests for moreThanFive
    test('moreThanFive should return true for numbers greater than 5', () => {
        expect(moreThanFive(6)).toBe(true);
        expect(moreThanFive(10)).toBe(true);
        expect(moreThanFive(20)).toBe(true);
    });

    test('moreThanFive should return false for numbers less than or equal to 5', () => {
        expect(moreThanFive(5)).toBe(false);
        expect(moreThanFive(3)).toBe(false);
        expect(moreThanFive(1)).toBe(false);
    });

    // Tests for result
    test('result should return correct values based on the given formula', () => {
        expect(result(0)).toBe(0);
        expect(result(5)).toBe(75);
        expect(result(10)).toBe(200);
        expect(result(15)).toBe(375);
    });
});