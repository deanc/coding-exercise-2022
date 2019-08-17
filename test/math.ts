const should = require('should');
var assert = require('assert');
const misc = require("./../src/misc");

describe('Some tests of the basic math functions', function () {
    describe('getDistance', function () {
        it('should return 0 on the same inputs', function() {
              assert.equal(misc.getDistance([0,0],[0,0]), 0);
        });
        it('should return correct value for known inputs', function() {
              assert.equal(misc.getDistance([1,5],[10,2]), 9.49);
        });
    });

    describe('getPower', function () {
        it('should return 0 when distance is more than reach', function() {
              assert.equal(misc.getPower(5, 10), 0);
        });
    });
});
