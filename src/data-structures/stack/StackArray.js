export class StackArray {
  constructor() {
    this._elements = []
    this._topIndex = 0
  }

  get isEmpty() {
    return this._elements.length === 0
  }

  push(element) {
    this._elements.push(element)
    this._topIndex++
  }

  pop() {
    this._elements.pop()
    this._topIndex = this._elements.length
  }

  peek() {
    if (this.isEmpty) {
      return null
    }

    return this._elements[this._topIndex]
  }

  print() {
    return this._elements
  }
}
