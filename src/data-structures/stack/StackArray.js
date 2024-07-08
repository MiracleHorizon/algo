export class StackArray {
  constructor() {
    this._elements = []
  }

  get size() {
    return this._elements.length
  }

  get isEmpty() {
    return this.size === 0
  }

  push(element) {
    this._elements.push(element)
  }

  pop() {
    this._elements.pop()
  }

  peek() {
    if (this.isEmpty) {
      return null
    }

    return this._elements[this._elements.length - 1]
  }

  print() {
    return this._elements
  }
}
