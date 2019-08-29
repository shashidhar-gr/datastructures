/*
    Daily Coding Problem: Problem #3 [Medium]

    This problem was asked by Google.

    Given the root to a binary tree, implement serialize(root), 
    which serializes the tree into a string, and deserialize(s), 
    which deserializes the string back into the tree.

    For example, given the following Node class
    class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

    The following test should pass:
    node = Node('root', Node('left', Node('left.left')), Node('right'))
    assert deserialize(serialize(node)).left.left.val == 'left.left'

    LeetCode: https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
    GeekForGeeks: https://www.geeksforgeeks.org/serialize-deserialize-binary-tree/
    Youtube: https://www.youtube.com/watch?v=suj1ro8TIVY
*/

var Queue = require('./queue').Queue;

class Node {
    constructor(data) {
        this.data = data;
        this.lNode = null;
        this.rNode = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    /** 
     * Function that will be call by external source to deserialize the binary tree.
     * Input: String containing binary tree elements to deserialize.
     * Output: Returns Binary tree, that is constructed using elements in given input.
    */
    deserialize(s = '') {
        s = s.toString();

        if(s === '')
            return null;
        
        let list = s.split();
        let queue = new Queue(); 
        for(let i = 0; i < list.length; i++) {
            queue.add(list[i])
        }

        return deserializeHelper(queue);
    }

    /**
     * Function that will helps to deserialize the elements given in queue to binary tree. 
     * Input: Queue Object.
     * Ouput: Binary Tree Object.
    */
    deserializeHelper(queue = null) {
        if(queue === null || queue.elements().length === 0)
            return null;

        let node = new Node(queue.remove())
        node.lNode = this.deserializeHelper(queue)
        node.rNode = this.deserializeHelper(queue)
        return node;
    }

    insert(element) {

        let newNode = new Node(element);

        if(this.root === null)
            this.root = newNode;
        else 
            this.insertNode(this.root, newNode)
    }

    insertNode(root, node) {

        if(root)    

        if(node.data < root.data) 
            insertNode(root.data.lNode, node)
        else   
            insertNode(root.data.rNode, node)
    }

    serialize(root) {

    }
}

exports.BinaryTree = BinaryTree;
exports.Node = Node;