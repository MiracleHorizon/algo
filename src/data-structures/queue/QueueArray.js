export class QueueArray {
  constructor() {
    this._elements = []
  }

  get isEmpty() {
    return this._elements.length === 0
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
