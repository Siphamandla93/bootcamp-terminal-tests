const assert = require('assert');
var countAllPaarl = require('../countAllFromPaarl');

describe('countAllPaarl', function(){

    it('returns the number of registration numbers in the string for Paarl', function(){
        assert.equal(1,countAllPaarl('CY 986, CJ 876, MP 123'));
    });
    it('returns the number of registration numbers in the string for Paarl', function(){
        // this test will fail - can you fix it?
        assert.equal(2,countAllPaarl('CJ 568, CY 789, CJ 123'));
    });
});
