const { TestScheduler } = require("jest");
const exercise007 = require("../challenges/exercise007");
const {sumDigits, createRange} = require("../challenges/exercise007");

describe("sumDigits", () => {
    test("it throws an error if not passed n", () =>{
        expect(() =>{
            sumDigits();
        }).toThrow("n is required");
    });
    test("it throws an error if n is decimal", () =>{
        expect(() =>{
            sumDigits(12.3);
        }).toThrow("n should be an integer");
    });
    test("it throws an error if n < 0", () =>{
        expect(() =>{
            sumDigits(-200);
        }).toThrow("n should be positive");
    });


    test("it returns the sum of all digits of number n", () =>{
        expect(4).toBe(sumDigits(121));
        expect(2).toBe(sumDigits(101));
        expect(0).toBe(sumDigits(0));
    });
});
describe("createRange", () => {
    test("it throws an error if not passed start", () => {
        expect(() => {
            createRange(undefined,12,2);
        }).toThrow("start is required");
    })
    test("it throws an error if start is not a Number", () => {
        expect(() => {
            createRange("start",12,2);
        }).toThrow("start should be a number");
    })
    test("it throws an error if end is not a Number", () => {
        expect(() => {
            createRange(2,"end",2);
        }).toThrow("end should be a number");
    })
    test("it throws an error if start > end and step > 0", () => {
        expect(() => {
            createRange(4,1,2);
        }).toThrow("end should be greater then start for step > 0");
    })
    test("it throws an error if start < end and step < 0", () => {
        expect(() => {
            createRange(-12,10,-1);
        }).toThrow("end should be less then start for step < 0");
    })


    test("it returns an array (start = the fisrt element, end = the last element, increment = step (not undefined)", () =>{
        const result = createRange(2, 12, 2);
        const expected = [2, 4, 6, 8, 10, 12];
        expect(result).toEqual(expected);
    });
    test("it returns an array (start = the fisrt element, end = the last element, increment = 1 (step is undefined) ", () =>{
        const result = createRange(1, 8);
        const expected = [1, 2, 3, 4, 5, 6, 7, 8];
        expect(result).toEqual(expected);
    });
    test("it works with decemal numbers(start = the fisrt element, end = the last element, increment = 1 (step is undefined) ", () =>{
        const result = createRange(1.2, 8.2);
        const expected = [1.2, 2.2, 3.2, 4.2, 5.2, 6.2, 7.2, 8.2];
        expect(result).toEqual(expected);
    });
    test("it works with decemal numbers(start = the fisrt element, end = the last element, increment = step (not undefined)", () =>{
        const result = createRange(2, 5.5, 0.5);
        const expected = [2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5];
        expect(result).toEqual(expected);
    });
    test("it works with negative numbers (start = the fisrt element, end = the last element, increment = step (not undefined)", () =>{
        const result = createRange(12, 2, -2);
        const expected = [12, 10, 8, 6, 4, 2];
        expect(result).toEqual(expected);
    });
    test("it works with negative numbers (start = the fisrt element, end = the last element, increment = step (not undefined)", () =>{
        const result = createRange(-3, 2, 1);
        const expected = [-3, -2, -1 , 0, 1, 2];
        expect(result).toEqual(expected);
    });


});
