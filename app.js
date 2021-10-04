let Stack = require("./Stack");

let stack = new Stack();
console.log(stack.__proto__);
stack.push(10);
stack.push(20);
console.log('peek 1 ',stack.peek());
stack.push(30);
stack.push(40);

console.log('peek 2 ',stack.peek());

console.log('pop 1 ',stack.pop());
console.log('peek 3 ', stack.peek());

console.log('count 1 ',stack.count());

