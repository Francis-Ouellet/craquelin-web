import * as assert from "assert";
import * as string from "./../strings";

describe("Testing Strings", () => {
    it("should display Hello World!", () => {
        assert.equal(string.HELLO_WORLD, "Hello World!");
    });
});
