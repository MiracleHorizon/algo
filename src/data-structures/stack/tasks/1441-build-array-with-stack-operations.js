/*
  Leetcode: https://leetcode.com/problems/build-an-array-with-stack-operations
 */

import { StackArray as Stack } from '@structures/stack/StackArray.js'

export function buildArray(target, n) {
  const stack = new Stack()
  let currentNumber = 1
  let from = 0

  while (currentNumber <= n && from < target.length) {
    const num = target[from]

    if (num === currentNumber) {
      stack.push('Push')
      currentNumber++
      from++
    } else {
      stack.push('Push')
      stack.push('Pop')
      currentNumber++
    }
  }

  return stack
}

buildArray([1, 3], 3) // ["Push","Push","Pop","Push"]
buildArray([1, 2, 3], 3) // ["Push","Push","Push"]
