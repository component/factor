var assert = require('better-assert');
var factor = require('../');

describe('factor(n)', function () {
  it('should throw with factor(<=0)', function() {
    try {
      factor(-1)
    } catch(e) {
      assert(e instanceof Error);
    }
  });

  it('should throw with factor(0)', function() {
    try {
      factor(0)
    } catch(e) {
      assert(e instanceof Error);
    }
  });

  it('factor(prime) => [prime]', function() {
    assert(1 == factor(1)[0]);
    assert(2 == factor(2)[0]);
    assert(3 == factor(3)[0]);
    assert(5 == factor(5)[0]);
    assert(7 == factor(7)[0]);
    assert(11 == factor(11)[0]);
    assert(5011 == factor(5011)[0]);
  });

  it('factor(n) => [factors]', function() {
    // 4
    assert(2 == factor(4)[0]);
    assert(2 == factor(4)[1]);

    // 10
    assert(2 == factor(10)[0]);
    assert(5 == factor(10)[1]);

    // 20
    assert(2 == factor(20)[0]);
    assert(2 == factor(20)[1]);
    assert(5 == factor(20)[2]);

    // 25
    assert(5 == factor(25)[0]);
    assert(5 == factor(25)[1]);

    // 5014
    assert(2   == factor(5014)[0]);
    assert(23  == factor(5014)[1]);
    assert(109 == factor(5014)[2]);
  });
});
