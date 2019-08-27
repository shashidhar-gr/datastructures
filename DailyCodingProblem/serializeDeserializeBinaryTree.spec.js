var serializeDeserializeBinaryTree = require('./serializeDeserializeBinaryTree');
var assert = require('assert');

describe('serializeDeserializeBinaryTree', function() {
    it('should return proper object.', function() {
        let binaryTree = new serializeDeserializeBinaryTree.BinaryTree();   
        assert.equal(binaryTree instanceof Object, true)
    })
    it('should return null, since input string is empty.', function() {
        let binaryTree = new serializeDeserializeBinaryTree.BinaryTree();
        assert.equal(binaryTree.deserialize(), null)
    })
    it('should return Object of type Node, since input string has single element.', function() {
        let binaryTree = new serializeDeserializeBinaryTree.BinaryTree();
        assert.equal(binaryTree.deserialize(1) instanceof serializeDeserializeBinaryTree.Node, true)
    })
    it(`should return Object of type Node with data property value 1
        ,lNode property value null and rNode property value null.`, function() {
        let binaryTree = new serializeDeserializeBinaryTree.BinaryTree();
        let newNode = binaryTree.deserialize(1);
        assert.equal(newNode instanceof serializeDeserializeBinaryTree.Node, true)
        assert.equal(newNode.data, 1)
        assert.equal(newNode.lNode, null)
        assert.equal(newNode.rNode, null)
        assert.equal(binaryTree.root instanceof serializeDeserializeBinaryTree.Node, true)
    })
})