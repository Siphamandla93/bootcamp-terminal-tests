 const assert = require('assert');
 var totalPhoneBill = require('../totalPhoneBill');
describe('The totalPhoneBill function', function(){

    it('count total bill', function(){

        assert.equal('R6.15', totalPhoneBill('call, sms, call,sms sms'));
        assert.equal('R5.50', totalPhoneBill('call, call'));
        assert.equal('R1.95', totalPhoneBill('sms, sms, sms'));
    });
    it('count total bill', function(){
        // this test will fail - can you fix it?
        assert.equal('R0.00', totalPhoneBill(''));
    });
});
