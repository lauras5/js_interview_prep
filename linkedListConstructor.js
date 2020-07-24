const head = Symbol("head");

class LinkedList {
  constructor() {
    this[head] = null;
  }

  // single argument
  add(data) {
    // new node
    const newNode = new LinkedListNode(data);

    // no items in list yet
    if (this[head] == null) {
      // set head to new node
      this[head] = newNode;
    } else {
      let current = this[head];

      // get to end of nodelist
      while (current.next !== null) {
        current = current.next;
      }
      // where current.next == null
      // assign node to next pointer
      current.next = newNode;
    }
  }

  get(index) {
    if (index > -1) {
      let current = this[head];
      // keep track of current index
      let i = 0;

      while (current !== null && i < index) {
        current = current.next;
        // increment current index
        i++;
      }

      // return data
      return current !== null ? current.data : undefined;
    } else {
      return undefined;
    }
  }
}
