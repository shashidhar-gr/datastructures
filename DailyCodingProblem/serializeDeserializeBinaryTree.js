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
*/

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

    deserialize(s = '') {
        s = s.toString();
        if(s === '')
            return null;
        
        let list = s.split(); 
        for(let i = 0; i < list.length; i++) {
            this.insert(list[i])
        }
        return this.root;
    }

    insert(element) {

        let newNode = new Node(element);

        if(this.root === null)
            this.root = newNode;
        else 
            this.insertNode(this.root, newNode)
    }

    insertNode(root, node) {

        if(root.)    

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