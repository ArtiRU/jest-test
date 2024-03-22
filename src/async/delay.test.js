const {it, expect, describe} = require("@jest/globals");
const delay = require("./delay");

describe("Testing delay", () => {
    it("Adds 5 + 5 to equal 10 using async", async () => {
        const sum = await delay(() => 5 + 5, 2000) // act

        expect(sum).toBe(10)
    })
    it("Adds 5 + 10 to equal 15 using promise", () => {
        delay(() => 5 + 10, 2000).then(data => {
            expect(data).toBe(15)
        })

    })
})