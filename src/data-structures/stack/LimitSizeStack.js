import { StackArray } from './StackArray.js'

export class LimitSizeStack extends StackArray {
  constructor(size) {
    super()
    this._size = size
  }

  get isFull() {
    return this._elements.length <= this._size
  }

  push(element) {
    if (!this.isFull) return

    super.push(element)
  }
}
