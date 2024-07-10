/*
  Leetcode: https://leetcode.com/problems/number-of-recent-calls
 */

import { QueueMap as Queue } from '@structures/queue/QueueMap.js'

export class RecentCounter {
  constructor() {
    this._queue = new Queue()
  }

  ping(t) {
    this._queue.enqueue(t)

    while (this._queue.peek() < t - 3000) {
      this._queue.dequeue()
    }

    return this._queue.size
  }
}
