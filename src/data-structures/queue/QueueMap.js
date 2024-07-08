export class QueueMap {
  constructor() {
    this._elements = new Map()
    this._frontIndex = 0
    this._backIndex = 0
  }

  get isEmpty() {
    return this._elements.size === 0
  }

  enqueue(elements) {
    this._elements.set(this._backIndex, elements)
    this._backIndex++
  }

  dequeue() {
    const el = this._elements.get(this._frontIndex)
    this._elements.delete(this._frontIndex)
    this._frontIndex++

    return el
  }

  peek() {
    return this._elements.get(this._frontIndex)
  }

  print() {
    return this._elements
  }
}
