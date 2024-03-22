const {it, expect, describe, beforeEach, mockReturnValue, test, afterEach} = require("@jest/globals");
const getData = require("./getData")
const axios = require("axios");
const getMockUsers = require("./__mocks__/users");



jest.mock("axios")

describe("Testing getData", () => {
    let response;

    beforeEach(() => {
        response = {
            data: getMockUsers()
        }
    })

    test("getData to equal [1, 2, 3]", async () => {
        axios.get.mockReturnValue(response)

        const data = await getData();

        expect(data).toEqual([1, 2, 3])
    })

    test("getData snapshot", async () => {
        axios.get.mockReturnValue(response)

        const data = await getData()

        expect(axios.get).toBeCalledTimes(3)
        expect(data).toMatchSnapshot();
    })

    afterEach(() => {

    })
})