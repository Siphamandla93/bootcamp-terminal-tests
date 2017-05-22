const assert = require('assert');
var countAllFromTown = require('../countAllFromTown');


    it('should count registration from town', function(){
        assert.equal(countAllFromTown('CL 124, CY 567, CL 345, CJ 456, CL 341','CL'),3);
    });
    it('should count registration from town', function(){
        // this test will fail - can you fix it?
        assert.equal(countAllFromTown('CL 124, CY 567, CL 345, CJ 456, CL 341','CL'),3);
    });
