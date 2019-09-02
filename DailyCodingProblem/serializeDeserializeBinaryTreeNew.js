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
    Ideserve: https://www.ideserve.co.in/learn/serialize-deserialize-binary-search-tree
*/


class Node {
    constructor(data = null) {
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
    deserialize (s = '') {
        s = s.toString();

        if(s === '')
            return null;

        let list = s.split(',');
        console.log("List length: "+list.length);  
        console.log("List: "+list);  
        let low = 0, high = list.length - 1;
        
        return this.deserializeHelper(list, low, high);
    }

    deserializeHelper(list, low, high) {
        if (low < 0 || low > high)
            return null;
        
        let root = new Node(list[low]);
        let div = -1;
        for(let  i = low+1 ; i < list.length; i++) {
            if(list[i] > list[low]){
                div = i;
                break;
            }
        }

        root.left = this.deserializeHelper(list, low+1, div-1);
        root.right = this.deserializeHelper(list, div, high);

        this.root = root;
        return root;
    }
}

exports.Node = Node;
exports.BinaryTree = BinaryTree;