/*
  Leetcode: https://leetcode.com/problems/valid-parentheses
 */

import { StackMap as Stack } from '@structures/stack/StackMap.js'

export function isValidParentheses(string) {
  if (string.length <= 1) {
    return false
  }

  const stack = new Stack()

  for (let i = 0; i < string.length; i++) {
    const bracket = string[i]

    if (bracket === '(' || bracket === '{' || bracket === '[') {
      stack.push(bracket)
      continue
    }

    /*
      In case no brackets were put on the stack,
      for example, in the case with the string ")()",
      then the parentheses string is invalid.
     */
    if (stack.isEmpty) {
      return false
    }

    const lastBracket = stack.peek()
    if (
      (lastBracket === '(' && bracket === ')') ||
      (lastBracket === '{' && bracket === '}') ||
      (lastBracket === '[' && bracket === ']')
    ) {
      stack.pop()
    } else {
      return false
    }
  }

  return stack.isEmpty
}

isValidParentheses('[') // false
isValidParentheses('[}') // false
isValidParentheses('()') // true
isValidParentheses('(){}[]') // true
isValidParentheses('({[]})') // true
isValidParentheses('(}[]()') // false
isValidParentheses('({[]))') // false
