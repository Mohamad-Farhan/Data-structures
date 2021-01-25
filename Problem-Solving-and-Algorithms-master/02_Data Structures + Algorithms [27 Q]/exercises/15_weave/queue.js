// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
    this.i = 0
  }

  add(record) {
    this.data.unshift(record);
    this.i++
  }

  remove() {
    if (this.data.length) {
      this.i--
      return this.data.pop();
    }
  }
  peek() {
    return this.data[this.i - 1]
  }

}

module.exports = Queue;
