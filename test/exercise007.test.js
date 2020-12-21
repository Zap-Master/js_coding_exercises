const { TestScheduler } = require("jest");
const exercise007 = require("../challenges/exercise007");
const {sumDigits} = require("../challenges/exercise007");

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
