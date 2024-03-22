const {test, expect, describe} = require("@jest/globals");
const square = require("./pow");


describe("Testing pow", () => {
    test("Instance math was called", () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(1)
        expect(spyMathPow).toBeCalledTimes(0)
    })

    test("Math been call 2 times", () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(3)
        expect(spyMathPow).toBeCalledTimes(1)
    })
})