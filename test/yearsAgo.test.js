const assert = require('assert');
var yearsAgo = require('../yearsAgo');


describe('The yearsAgo function', function(){

    it('getFullYear', function(){
        assert.equal(8, yearsAgo('2009'));
    });
    it('getFullYear', function(){
        // this test will fail - can you fix it?
        assert.equal(7, yearsAgo('2010'));
    });
});
