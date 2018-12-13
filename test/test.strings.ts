import * as assert from "assert";
import * as string from "../src/strings";

describe("Testing Strings", () => {
    it("should display Hello World!", () => {
        assert.equal(string.HELLO_WORLD, "Hello World!");
    });
});
