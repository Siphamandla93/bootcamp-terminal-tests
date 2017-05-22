const assert = require('assert');
var countRegNumber  = require('../countRegNumber');


describe('The countRegNumber function', function(){

    it('returns the number of registration numbers in the string', function(){
        assert.equal(3,  countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
    it('returns the number of registration numbers in the string', function(){
        // this test will fail - can you fix it?
        assert.equal(3,  countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
});
