const {describe, it, expect, test, afterEach} = require('@jest/globals');
const sum = require('../sum')
const square = require('../../pow/pow')

describe("Testing sum", () => {
    it("adds 2 + 3 to equal 5", () => {
        expect(sum(2,3)).toBe(5);
    })

    it("sum is instanceof function", () => {
        expect(sum).toBeInstanceOf(Function)
    })
})