// @ts-check
/**
 * Initialize your data structure here.
 * @this {{arrs: number[]}}
 */
var MyQueue = function() {
  /**
   * @type {number[]}
   */
  this.arrs = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  const savedArr = [];
  while (this.arrs.length) {
    const top = this.arrs.pop();
    savedArr.push(top);
  }

  const result = [x];
  while (savedArr.length) {
    const top = savedArr.pop();
    result.push(top);
  }

  this.arrs = result;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  return this.arrs.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.arrs[this.arrs.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.arrs.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
