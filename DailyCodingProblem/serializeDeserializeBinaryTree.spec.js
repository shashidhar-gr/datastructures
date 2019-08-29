var BinaryTree = require('./serializeDeserializeBinaryTree').BinaryTree;
var Node = require('./serializeDeserializeBinaryTree').Node;
var Queue = require('./queue').Queue;
var assert = require('assert');

describe('BinaryTree', function() {
    it('should return proper object.', function() {
        let binaryTree = new BinaryTree();   
        assert.equal(binaryTree instanceof Object, true)
    })
    it('should return null, since input string is empty.', function() {
        let binaryTree = new BinaryTree();
        assert.equal(binaryTree.deserialize(), null)
    })
    it('should return null, since input is empty.', function() {
        let binaryTree = new BinaryTree();
        assert.equal(binaryTree.deserializeHelper(null), null)
    })
    it('should return Node object, since input queue has single element. TestID:BinaryTree04 ', function() {
        let binaryTree = new BinaryTree();
        let queue = new Queue();
        queue.add(10);
        assert.equal(binaryTree.deserializeHelper(queue) instanceof Node, true)
    })
    it('should return Node object with data value 10, since input queue has single element 10.', function() {
        let binaryTree = new BinaryTree();
        let queue = new Queue();
        queue.add(10);
        let node = binaryTree.deserializeHelper(queue);
        assert.equal(node.data, 10)
    })
})