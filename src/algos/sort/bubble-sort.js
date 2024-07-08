export function bubbleSort(array) {
  let isSwapped = false

  do {
    isSwapped = false

    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] < array[i - 1]) {
        [array[i], array[i - 1]] = [array[i - 1], array[i]]
        isSwapped = true
        break
      }
    }
  } while (isSwapped)
}
