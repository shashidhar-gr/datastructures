var Queue = require('./queue').Queue;
var assert = require('assert');

describe('Queue', function() {
    it('should return proper object.', function() {
        let queue = new Queue();   
        assert.equal(queue instanceof Object, true)
    })
    it('should return empty array, since there are no elements in queue.', function() {
        let queue = new Queue(); 
        assert.deepEqual(queue.elements(), [])
    })
    it('should add single element in to queue and return the same.', function() {
        let queue = new Queue(); 
        queue.add(1);
        assert.deepEqual(queue.elements(), [1])
    })
    it('should add single element in to queue and remove the same.', function() {
        let queue = new Queue(); 
        queue.add(1);
        assert.equal(queue.remove(), 1)
    })
    it('should add multiple elements in to queue and always remove the oldest element remaining in the queue.', function() {
        let queue = new Queue(); 
        queue.add(1);
        queue.add(2);
        queue.add(3);
        assert.equal(queue.remove(), 1)
        assert.deepEqual(queue.elements(), [2, 3])
        assert.equal(queue.remove(), 2)
        assert.deepEqual(queue.elements(), [3])
        assert.equal(queue.remove(), 3)
        assert.deepEqual(queue.elements(), [])
    })
})