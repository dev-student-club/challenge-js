// concatString.test.js
const { concatString } = require('./soal_8');

describe('concatString function', () => {
    test('concatenates two non-empty strings', () => {
        expect(concatString("Hello", "Student")).toBe("HelloStudent");
    });

    test('concatenates a non-empty string with an empty string', () => {
        expect(concatString("", "Student")).toBe("Student");
        expect(concatString("Student", "")).toBe("Student");
    });

    test('concatenates two empty strings', () => {
        expect(concatString("", "")).toBe("");
    });

    test('concatenates strings with spaces', () => {
        expect(concatString("Student ", "Indonesia")).toBe("Student Indonesia");
    });
});
