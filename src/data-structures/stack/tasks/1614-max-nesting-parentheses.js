/*
 Leetcode: https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses
 */

import { StackArray as Stack } from '@structures/stack/StackArray.js'

export function maxDepth(string) {
  const stack = new Stack()

  let max = 0

  for (let i = 0; i < string.length; i++) {
    const char = string[i]

    if (char === '(') {
      stack.push(char)
    }

    if (char === ')') {
      stack.pop()
    }

    max = Math.max(max, stack.size)
  }

  return max
}

maxDepth('(1+(2*3)+((8)/4))+1') // 3
maxDepth('(1)+((2))+(((3)))') // 3
maxDepth('()(())((()()))') // 3
