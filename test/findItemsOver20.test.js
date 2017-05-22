const assert = require('assert');
var findItemsOver20 = require('../findItemsOver20');


describe('The findItemsOver20 function', function(){

    it('return products that have quantity higher than 20.', function(){
      assert.deepEqual([{name : 'pears', qty : 37},{name : 'bananas', qty : 27}], findItemsOver20([
      {name : 'apples', qty : 10},
      {name : 'pears', qty : 37},
      {name : 'bananas', qty : 27},
      {name : 'apples', qty : 3},], 25))
    });
});
