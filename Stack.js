let Node = require("./Node");

let size = 0;

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
    }
    count() { return size; }
}

Stack.prototype.push = (data) => {
    let node = new Node(data);
    if (!this.first) {
        this.first = node;
        this.last = node;
    } else {
        node.next = this.first;
        this.first = node;
    }
    size++;
}
Stack.prototype.pop = () => {
    if (!this.first)
        return null;

    let node = this.first;

    if (node.next) {
        node = node.next;
        this.first = node;
    } else {
        this.first = null;
        this.last = null;
    }
    size--;
    return node.data;
}
Stack.prototype.peek = () => {
    let str = "";
    let node = this.first;
    while (true) {
        if (!node) {
            return str;
        }
        str += node.data + " ";
        node = node.next;
    }
}

module.exports = Stack;
