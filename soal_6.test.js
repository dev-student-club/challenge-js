const { manipulateString } = require('./soal_6');

describe('Manipulate String Tests', () => {
    test('Correctly multiplies numbers within the string and concatenates', () => {
        expect(manipulateString("Student000010", 100)).toBe("Student1000");
        expect(manipulateString("student", 99)).toBe("student99");
        expect(manipulateString("student123", 10)).toBe("student1230");
    });

    test('Appends number when no digits in string', () => {
        expect(manipulateString("hello", 50)).toBe("hello50");
    });

    test('Handles string with leading zeros correctly', () => {
        expect(manipulateString("lead000100", 3)).toBe("lead300");
    });
});
