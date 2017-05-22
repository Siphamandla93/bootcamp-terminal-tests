const assert = require('assert');
var transportFee = require('../transportFee');

describe('The transportFee function', function(){

    it('Show different transport fees', function(){
        assert.equal('R10', transportFee('afternoon'));
    });
    it('Show different transport fees', function(){
        // this test will fail - can you fix it?
        assert.equal('R20', transportFee('morning'));
    });
});
