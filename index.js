/**
 * Export `factor`
 */

module.exports = factor;

/**
 * Factor a number
 *
 * @param {Number} n
 * @return {Array}
 * @api public
 */

function factor(n) {
  if (n < 1) throw new Error('cannot factor non-positive numbers');
  else if (n == 1) return [1];

  var out = [],
      factor;

  while (n != 1) {
    factor = smallest(n);
    out.push(factor);
    n /= factor;
  }

  return out;
}

/**
 * Get the smallest prime factor
 *
 * @api private
 */

function smallest(n) {
  if (n < 2) return n;
  if (n % 2 == 0) return 2;

  var end = Math.sqrt(n) | 0;
  for (var i = 3; i <= end; i += 2) {
    if (n % i == 0) return i;
  }

  return n;
}
