var BinaryTree = require('../serializeDeserializeBinaryTreeNew').BinaryTree;
var Node = require('../serializeDeserializeBinaryTreeNew').Node;
var assert = require('assert');

describe('BinaryTree', function() {
    it('should return proper object and object should be of type Node.', function() {
        let node = new Node();   
        assert.equal(node instanceof Object, true)
        assert.equal(node instanceof Node, true)
    })
    it('should return proper object and object should be of type BinaryTree.', function() {
        let binaryTree = new BinaryTree();   
        assert.equal(binaryTree instanceof Object, true)
        assert.equal(binaryTree instanceof BinaryTree, true)
    })
    it('should return null, since input string is empty.', function() {
        let binaryTree = new BinaryTree();
        assert.equal(binaryTree.deserialize(), null)
    })
    it('should return Node object with value 1, since input string is 1.', function() {
        let binaryTree = new BinaryTree();
        let node = binaryTree.deserialize('1');
        assert.equal(node.data, 1);
        assert.equal(node.lNode, null);
        assert.equal(node.rNode, null);
    })
    it('BinaryTree-TestID5. Should return Node object with value 1, since input string is 1.', function() {
        let binaryTree = new BinaryTree();
        let node = binaryTree.deserialize('4, 1');
        assert.equal(node.data, 4);
        let leftNode = node.lNode;
        assert.equal(leftNode, null);
        assert.equal(node.rNode, null);
    })
})
