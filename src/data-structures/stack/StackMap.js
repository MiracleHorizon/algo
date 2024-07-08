export class StackMap {
  constructor() {
    this._elements = new Map()
    this._topIndex = 0
  }

  get isEmpty() {
    return this._elements.size === 0
  }

  push(element) {
    const index = this._topIndex + 1
    this._elements.set(index, element)
    this._topIndex = index
  }

  pop() {
    this._elements.delete(this._topIndex)
    this._topIndex = this._elements.size
  }

  peek() {
    return this._elements.get(this._topIndex)
  }

  print() {
    return this._elements
  }
}
