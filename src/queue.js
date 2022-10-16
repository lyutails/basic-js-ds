const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
// class Queue {

//   getUnderlyingList() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   enqueue(/* value */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//     [].length
//     at(-1)
//     push()
//   }

//   dequeue() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }

// module.exports = {
//   Queue
// };

class Queue {  
  consturctor(){
    this.head = 0
    this.tail = 0
  }

  getUnderlyingList() {
    if (this.head > 0) {
      for (let i = this.head; i < this.tail; i++) {
        this.data[i - this.head] = this.data[i]
        delete this.data[i]
      }
      this.tail = this.length
      this.head = 0
    }
  }

  enqueue(value) {
    this.head.push(value);
  }

  dequeue() {
    if (this.tail.lenth === 0) {
      this.move();
    }
  }
} 

module.exports = {
  Queue
};
