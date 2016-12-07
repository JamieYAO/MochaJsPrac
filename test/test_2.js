var assert = require("assert"); // node.js core module

describe('test should.js', function(){

    var foo = 0;

    before('首次调用',function(done){
        setTimeout(function(){
            foo += 1;
            done()
        }, 1000);
    });
    beforeEach(function(done){
        setTimeout(function(){
            foo += 1;
            done();
        }, 1000);
    })
    afterEach(function(){
        foo = 0;
    });
    it('test beforeEach', function(done){
        setTimeout(function(){
            assert.equal(foo, 2);
            done();
        }, 1000);
    })


});
