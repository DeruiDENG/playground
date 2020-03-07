/* eslint-disable @typescript-eslint/camelcase */
// @ts-check

/**
 * @this {{fullQueue: number[], orderedQueue: number[]}}
 */
export const MaxQueue = function() {
  /**
   * @type {number[]}
   */
  this.fullQueue = [];
  /**
   * @type {number[]}
   */
  this.orderedQueue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
  return this.orderedQueue.length ? this.orderedQueue[0] : -1;
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
  this.fullQueue.push(value);
  while (
    this.orderedQueue.length &&
    this.orderedQueue[this.orderedQueue.length - 1] < value
  ) {
    this.orderedQueue.pop();
  }
  this.orderedQueue.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  const removedValue = this.fullQueue.shift();
  if (removedValue === undefined) {
    return -1;
  }

  if (removedValue === this.orderedQueue[0]) {
    this.orderedQueue.shift();
  }

  return removedValue;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
