const assert = require('assert');
var isweekday = require('../isWeekday');


describe('The isWeekday', function(){

  it('Return weekday', function(){
        assert.equal(true ,isweekday ('D'));
    });
    it('Return weekday', function(){
        // this test will fail - can you fix it?
        assert.equal(false ,isweekday ('S'));
    });
});
