export class QueueArray {
  constructor() {
    this._elements = []
  }

  get size() {
    return this._elements.length
  }

  get isEmpty() {
    return this.size === 0
  }

  enqueue(element) {
    this._elements.push(element)
  }

  dequeue() {
    this._elements.shift()
  }

  peek() {
    return this._elements[0]
  }

  print() {
    return this._elements
  }
}
