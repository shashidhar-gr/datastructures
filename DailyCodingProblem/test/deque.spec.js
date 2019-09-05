var Deque = require('../deque').Deque;
var assert = require('assert');

describe('Deque', function() {
    it('should return proper object.', function() {
        let deque = new Deque();   
        assert.equal(deque instanceof Object, true)
    })
    it('should return object of type Deque.', function() {
        let deque = new Deque();   
        assert.equal(deque instanceof Deque, true)
    })
    it('should return True since deque is empty.', function() {
        let deque = new Deque();   
        assert.equal(deque.isEmpty(), true)
    })
    it('should return 0 since deque is empty.', function() {
        let deque = new Deque();   
        assert.equal(deque.size(), 0)
    })
    it('should add element to front of the deque.', function() {
        let deque = new Deque();
        deque.addFront(1)
        deque.addFront(2)
        assert.equal(deque.isEmpty(), false)   
        assert.equal(deque.size(), 2)
    })
    it('should remove element from front of the deque.', function() {
        let deque = new Deque();
        deque.addFront(10)
        deque.addFront("Shashi")
        assert.equal(deque.size(), 2)
        assert.equal(deque.removeFront(), "Shashi")   
        assert.equal(deque.size(), 1)
    })
    it('should add element to rear of the deque.', function() {
        let deque = new Deque();
        deque.addRear(1)
        deque.addRear(2)
        assert.equal(deque.isEmpty(), false)   
        assert.equal(deque.size(), 2)
    })
    it('should remove element from rear of the deque.', function() {
        let deque = new Deque();
        deque.addRear(10)
        deque.addRear("Shashi")
        assert.equal(deque.size(), 2)
        assert.equal(deque.removeRear(), "Shashi")   
        assert.equal(deque.size(), 1)
    })
    it('should remove element from rear of the deque.', function() {
        let deque = new Deque();
        deque.addRear(10)
        deque.addRear("Shashidhar")
        deque.addFront(20)
        deque.addFront("GR")
        assert.equal(deque.size(), 4)
        assert.equal(deque.removeRear(), "Shashidhar")   
        assert.equal(deque.size(), 3)
        assert.equal(deque.removeFront(), "GR")
        assert.equal(deque.size(), 2)
        assert.equal(deque.removeRear(), 10)
        assert.equal(deque.size(), 1)
        assert.equal(deque.removeRear(), 20)
        assert.equal(deque.size(), 0)
        assert.equal(deque.isEmpty(), true)
    })
    it('should return propoer rear and front item from deque.', function() {
        let deque = new Deque();
        assert.equal(deque.getFront(), undefined)
        assert.equal(deque.getRear(), undefined)
        deque.addFront(10)
        deque.addFront(20)
        deque.addFront(true)
        assert.equal(deque.isEmpty(), false)   
        assert.equal(deque.size(), 3)
        assert.equal(deque.getFront(), true)
        assert.equal(deque.getRear(), 10)
    })
})