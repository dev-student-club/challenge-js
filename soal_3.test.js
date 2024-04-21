const { vehicle } = require('./soal_3');

describe('vehicle function tests', () => {
    test('vehicle should return correct object', () => {
        const result = vehicle();

        // Check if the result is an object
        expect(typeof result).toBe('object');

        // Check for the object containing the specific key-value pairs
        expect(result).toEqual({
            type: 'motorcycle',
            maxSpeed: '230Km/s',
            maxTank: '100Ltr'
        });
    });
});