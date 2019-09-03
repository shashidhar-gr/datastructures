var findPair = require('../findPair');
var assert = require('assert');

describe('findPairBruteForce', function() {
    it('should return false, since input array is empty', function() {
        assert.equal(findPair.findPairBruteForce([], 0), false)
    })
    it('should return false, since input array contains only one element. A = [10], k = 10', function() {
        assert.equal(findPair.findPairBruteForce([10], 10), false)
    })
    it('should return true, since input array contains proper pair. A = [10, 15], k = 25', function() {
        assert.equal(findPair.findPairBruteForce([10, 15], 25), true)
    })
    it('should return true, since input array contains proper pair. A = [10, 15, 3, 7], k = 17', function() {
        assert.equal(findPair.findPairBruteForce([10, 15, 3, 7], 17), true)
    })
    it('should return true, since input array contains proper pair. A = [-10, 0, -3, 7], k = -13', function() {
        assert.equal(findPair.findPairBruteForce([-10, 0, -3, 7], -13), true)
    })
    it('should return true, since input array contains proper pair. A = [-10, 10, -3, 7], k = 0s', function() {
        assert.equal(findPair.findPairHashing([-10, 10, -3, 7], 0), true)
    })
})

describe('findPairSorting', function() {
    it('should return false, since input array is empty', function() {
        assert.equal(findPair.findPairSorting([], 0), false)
    })
    it('should return false, since input array contains only one element. A = [10], k = 10', function() {
        assert.equal(findPair.findPairSorting([10], 10), false)
    })
    it('should return true, since input array contains proper pair. A = [10, 15], k = 25', function() {
        assert.equal(findPair.findPairSorting([10, 15], 25), true)
    })
    it('should return true, since input array contains proper pair. A = [10, 15, 3, 7], k = 17', function() {
        assert.equal(findPair.findPairSorting([10, 15, 3, 7], 17), true)
    })
    it('should return true, since input array contains proper pair. A = [-10, 0, -3, 7], k = -13', function() {
        assert.equal(findPair.findPairBruteForce([-10, 0, -3, 7], -13), true)
    })
    it('should return true, since input array contains proper pair. A = [-10, 10, -3, 7], k = 0s', function() {
        assert.equal(findPair.findPairHashing([-10, 10, -3, 7], 0), true)
    })
})

describe('findPairHashing', function() {
    it('should return false, since input array is empty', function() {
        assert.equal(findPair.findPairHashing([], 0), false)
    })
    it('should return false, since input array contains only one element. A = [10], k = 10', function() {
        assert.equal(findPair.findPairHashing([10], 10), false)
    })
    it('should return true, since input array contains proper pair. A = [10, 15], k = 25', function() {
        assert.equal(findPair.findPairHashing([10, 15], 25), true)
    })
    it('should return true, since input array contains proper pair. A = [10, 15, 3, 7], k = 17', function() {
        assert.equal(findPair.findPairHashing([10, 15, 3, 7], 17), true)
    })
    it('should return true, since input array contains proper pair. A = [-10, 0, -3, 7], k = -13', function() {
        assert.equal(findPair.findPairHashing([-10, 0, -3, 7], -13), true)
    })
    it('should return true, since input array contains proper pair. A = [-10, 10, -3, 7], k = 0s', function() {
        assert.equal(findPair.findPairHashing([-10, 10, -3, 7], 0), true)
    })
})

describe('bubbleSort', function() {
    it('should return empty array, since input array is empty', function() {
        assert.deepEqual(findPair.bubbleSort([]), [])
    })
    it('should return ordered array, since input array contains elements', function() {
        assert.deepEqual(findPair.bubbleSort([10, 15, 3, 7]), [3, 7, 10, 15])
    })
    it('should return ordered array, since input array contains elements', function() {
        assert.deepEqual(findPair.bubbleSort([10, -15, -16, 0, 0, 10, 13]), [-16, -15, 0, 0, 10, 10, 13])
    })
})