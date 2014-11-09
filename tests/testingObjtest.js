
var expect = require('chai').expect;
var Counter = require('../Counter');
var c = new Counter();

describe('my counter object', function(){
  it('Obj should start at 0', function(done){
    expect(c.getValue()).to.eql(0);
    done();
  });

  it("Obj should return 1", function(done){
    c.increment();
    expect(c.getValue()).to.eql(1);
    done();
  });
});
