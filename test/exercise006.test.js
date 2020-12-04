const {sumMultiples, isValidDNA} = require("../challenges/exercise006");

describe("sumMultiples", () =>{
    test("it throws an error if not passed an array", ()=>{
        expect(() =>{
            sumMultiples();
        }).toThrow("arr is required");

        expect(() => {
            sumMultiples("foo");
        }).toThrow("an Array is required");

        expect(() => {
            sumMultiples(4);
        }).toThrow("an Array is required");

    });
    test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
        const result = sumMultiples([1,3,5]);
        const expected = 8;
        expect(result).toBe(expected);
    });

    test("it works with decemal numbers", () =>{
        const result = sumMultiples([1,3,5.0, 2, 12,10]);
        const expected = 30;
        expect(result).toBe(expected);
    });

    test("it returns 0 if there are no multiplles of 3 or 5", () =>{
        expect(sumMultiples([1,2,8,13,7])).toBe(0);
    });
});

describe("isValidDNA", () => {
    test("it throw an error if not passed a string", () =>{
       expect(() => {
           isValidDNA();
       }).toThrow("str is required");

       expect(() => {
            isValidDNA("");
       }).toThrow("str is empty");
    });
    
   
    test("it returns False if string contains not only G A C T characters", () =>{
        const result = isValidDNA("GACTQ");
        const expected = false;
        expect(result).toBe(expected);
    });

    test("it returns False if string contains not only G A C T characters", () =>{
        const result = isValidDNA("GAAATTB");
        const expected = false;
        expect(result).toBe(expected);
    });

    test("it returns True if string contains only G A C T characters", () =>{
        const result = isValidDNA("GAAATTCCCAAAGG");
        const expected = true;
        expect(result).toBe(expected);
    });

    test("it returns True if string contains only G A C T characters", () =>{
        const result = isValidDNA("GAAATTCCCAAAGGAT");
        const expected = true;
        expect(result).toBe(expected);
    });

    test("it returns True if string contains only G A C T characters", () =>{
        const result = isValidDNA("AA");
        const expected = true;
        expect(result).toBe(expected);
    });
    
    });
        
