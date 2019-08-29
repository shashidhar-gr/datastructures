class Queue {
    constructor() {
        this.data = [];
    }

    elements() {
        return this.data;
    }

    add(element) {
        this.data.push(element)    
    }

    remove() {
        return this.data.shift();
    }
}

exports.Queue = Queue;