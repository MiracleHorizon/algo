/*
  Leetcode: https://leetcode.com/problems/remove-outermost-parentheses
 */

import { StackMap as Stack } from '@structures/stack/StackMap.js'

export function removeOuterParentheses(string) {
  const stack = new Stack()
  let result = ''

  for (let right = 0; right < string.length; right++) {
    const bracket = string[right]

    if (bracket === '(') {
      if (!stack.isEmpty) {
        result += bracket
      }

      stack.push(bracket)
    } else {
      stack.pop()

      if (!stack.isEmpty) {
        result += bracket
      }
    }
  }

  return result
}

removeOuterParentheses('(()())(())')
removeOuterParentheses('(()())(())(()(()))')
removeOuterParentheses('()()')
