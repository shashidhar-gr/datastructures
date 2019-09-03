var BinaryTree = require('../serializeDeserializeBinaryTree').BinaryTree;
var Node = require('../serializeDeserializeBinaryTree').Node;
var Queue = require('../queue').Queue;
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
        assert.equal(node.lNode, null)
        assert.equal(node.rNode, null)
    })
    it('should return Node object with data value 10 and lNode with data value 5, rNode with data value 15, since input queue has three elements [10, 5, 15].', function() {
        let binaryTree = new BinaryTree();
        let queue = new Queue();
        queue.add(10);
        queue.add(5);
        queue.add(15);
        let node = binaryTree.deserializeHelper(queue);
        assert.equal(node.data, 10)
        assert.equal(node.lNode instanceof Node, true)
        assert.equal(node.lNode.data, 5)
        assert.equal(node.lNode.data, 5)
        //assert.equal(node.rNode instanceof Node, true)
    })
})