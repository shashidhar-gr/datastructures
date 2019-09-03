var findProduct = require('../findProduct');
var assert = require('assert');

describe('findProduct', function() {
    it('should return empty array, since input array is empty', function() {
        assert.deepEqual(findProduct.findProduct([]), [])
    })
    it('should return array with same value, since input array contains only one element. A = [10]', function() {
        assert.deepEqual(findProduct.findProduct([10]), [10])
    })
    it('should return array with proper array with product of elements, since input array contains proper pair. A = [1, 2, 3, 4, 5]', function() {
        assert.deepEqual(findProduct.findProduct([1, 2, 3, 4, 5]), [120, 60, 40, 30, 24])
    })
})