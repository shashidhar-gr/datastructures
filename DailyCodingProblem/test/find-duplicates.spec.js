var findDuplicates = require('../find-duplicates').findDuplicates;
var assert = require('assert');

describe('findDuplicates', function() {
    it('should return empty array, since the input array is empty.', function() {
        assert.deepEqual(findDuplicates(), [])
    })

    it('should return empty array, since the input array has only one element.', function() {
        assert.deepEqual(findDuplicates([2]), [])
    })

    it('should return [1, 2] as result, since the input array has [1, 2, 2, 1].', function() {
        assert.deepEqual(findDuplicates([1, 2, 2, 1]), [2, 1])
    })

    it('should return [2, 1, 2, 1] as result, since the input array has [1, 2, 2, 1].', function() {
        assert.deepEqual(findDuplicates([2, 1, 2, 1]), [2, 1])
    })

    it('should return [1, 3, 6] as result, since the input array has [1, 2, 3, 1, 3, 6, 6].', function() {
        assert.deepEqual(findDuplicates([1, 2, 3, 1, 3, 6, 6]), [1, 3, 6])
    })
})