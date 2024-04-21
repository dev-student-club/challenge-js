const { sum, multiple } = require('./soal_4');

describe('All test latihan 5', () => {
    test('Testing sum function', async () => {
        const result = await sum(10, 10);
        expect(result).toBe(20);
    });

    test('Testing multiple function', async () => {
        const result = await multiple(20, 20);
        expect(result).toBe(400);
    });
});
