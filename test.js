const { expect } = require("chai");
const { createReducer } = require("./index");

describe('createReducer()', function () {
    const counter = createReducer({
        "up": (state) => state + 1,
        "down": (state) => state - 1,

        // reset on unknown action
        "DEFAULT": (state, action, initialVal) => initialVal,
    }, 0);

    it('should provide default', function () {
        expect(counter(1, { type: "UNKNOWN"})).to.equal(0);
    });
});
