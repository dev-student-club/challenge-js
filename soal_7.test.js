const { getMiddleCharacters } = require('./soal_7');

describe('getMiddleCharacters function', () => {
    test('returns the middle two characters for even-length strings', () => {
        expect(getMiddleCharacters("studentindonesia")).toBe("in");
        expect(getMiddleCharacters("background")).toBe("gr");
    });

    test('returns the middle character for odd-length strings', () => {
        expect(getMiddleCharacters("student")).toBe("d");
        expect(getMiddleCharacters("testing")).toBe("t");
    });

    test('returns the correct character for single character strings', () => {
        expect(getMiddleCharacters("A")).toBe("A");
    });

    test('handles empty strings correctly', () => {
        expect(getMiddleCharacters("")).toBe("");
    });
});
