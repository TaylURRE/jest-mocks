import util from '../index';

describe('util.randomNumber', () => {
    const min = 1;
    const max = 10;
    test('it is a function', () => {
        expect(util.randomNumber).toBeInstanceOf(Function);
    });

    test('it returns instance of a number', () => {
        const result = util.randomNumber(min, max);
        expect(typeof result).toBe('number');
    });

    test('it returns a number greater than  or equal to the first parameter', () => {
        expect(util.randomNumber(min, max)).toBeGreaterThanOrEqual(min);
    });

    test('it returns a number less than the second parameter ', () => {
        expect(util.randomNumber(min, max)).toBeLessThan(max);
    });

    test('it calls Math.floor with the result of Math.random * (max - min) + min', () => {
        const originalRandom = Math.random;
        Math.random = jest.fn(() => 0.5);
        jest.spyOn(Math, 'floor');

        util.randomNumber(min, max);
        expect(Math.floor).toHaveBeenCalledWith(5.5);

        Math.random = originalRandom;
        Math.floor.mockRestore();
    });
});

describe('util.add', () => {
    test('it is a function', () => {
        expect(util.add).toBeInstanceOf(Function);
    });

    test('it accepts a single value, and returns that value', () => {
        const values = [5];
        const sum = 5;

        expect(util.add(...values)).toBe(sum)
    });

    test('it adds two values', () => {
        const values = [1, 1];
        const sum = 2;

        expect(util.add(...values)).toBe(sum)
    });

    test('it adds ten values and returns the sum', () => {
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const sum = 45;

        expect(util.add(...values)).toBe(sum)
    });

    test('it concatenates string values togther', () => {
        const values = ['my', 'other', 'data','structure', 'is', 'a', 'string'];
        const sum = 'myotherdatastructureisastring';

        expect(util.add(...values)).toBe(sum)
    });
});

describe('util.compose', () => {
    test('it is a function', () => {
        expect(util.compose).toBeInstanceOf(Function);
    });

    test('it takes two functions and returns a function composed of the provided functions', () => {
        const f = function f(x) {
            return x + 1;
        };

        const g = function g(y)  {
            return y * 2;
        };
        const fg = util.compose(g, f);

        expect(typeof fg).toBe('function');
        expect(fg(1)).toBe(4);
        expect(fg(3)).toBe(8);
    });

});