const assert = require('assert');
var FromWhere = require('../FromWhere');


describe('The FromWhere function', function(){

    it('returns the town the car is from', function(){
        assert.equal('Paarl', FromWhere ('CJ 456'));
    });
    it('returns the town the car is from', function(){
        // this test will fail - can you fix it?
        assert.equal('Cape Townn', FromWhere ('CA 123'));
    });
});
