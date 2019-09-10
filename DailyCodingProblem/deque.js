/**
 * The deque abstract data type is defined by the following structure and operations. 
 * A deque is structured, as described below, as an ordered collection of items where items are added and removed from either end, either front or rear
 * Reference: https://runestone.academy/runestone/books/published/pythonds/BasicDS/TheDequeAbstractDataType.html
 *   *Rear -> Node -> Node -> Node -> *Front
 */

class Deque {
    
    constructor() {
        this.data = [];
    }
    
    //Adds a new item to the front of the deque. It needs the item and returns nothing.
    addFront(item) {
        this.data.push(item)
    }

    //Adds a new item to the rear of the deque. It needs the item and returns nothing.
    addRear(item) {
        this.data.unshift(item)
    }

    //Removes the front item from the deque. It needs no parameters and returns the item. The deque is modified.
    removeFront() {
        return this.data.pop()
    }

    //Removes the rear item from the deque. It needs no parameters and returns the item. The deque is modified.
    removeRear() {
        return this.data.shift()
    }

    //Returns the front item from the deque.
    getFront() {
        if(this.data.length > 0)
            return this.data[this.data.length - 1]
        else
            return undefined;  
    }

    //Returns the rear item from the deque.
    getRear() {
        if(this.data.length > 0)
            return this.data[0]
        else
            return undefined; 
    }

    //Tests to see whether the deque is empty. It needs no parameters and returns a boolean value.
    isEmpty() {
        if(this.data.length === 0)
            return true;
        else 
            return false;
    }

    //Returns the number of items in the deque. It needs no parameters and returns an integer.
    size() {
        return this.data.length;
    }
}

exports.Deque = Deque;