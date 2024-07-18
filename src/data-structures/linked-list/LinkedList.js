class LinkedList {
  /**
   @param head {ListNode | null}
   */
  constructor(head = null) {
    this.head = head
  }

  /**
   * @returns {ListNode | null}
   */
  getFirst() {
    let current = this.head

    while (current.next) {
      current = current.next
    }

    return current
  }

  /**
   * @param element {ListNode}
   * @returns {void}
   */
  addLast(element) {
    let current = this.head

    while (current.next) {
      current = current.next
    }

    current.next = element
  }

  addFirst(element) {
    element.next = this.head
    this.head = element
  }
}

class ListNode {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}
