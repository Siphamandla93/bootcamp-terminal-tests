const assert = require('assert');
var regCheck = require('../regCheck');

describe('The regCheck function', function(){

    it('check the registration numbers', function(){
        assert.equal(true ,regCheck('DV 23 LP GP', 'GP'));
    });
    it('check the registration numbers', function(){
        // this test will fail - can you fix it?
        assert.equal(true ,regCheck('DV 23 LP GP', 'GP'));
    });
});
