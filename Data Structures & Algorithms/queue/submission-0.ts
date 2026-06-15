class ListNode {
    value: number | null;
    next: ListNode | null;
    prev: ListNode | null;

    constructor(val: number = -1) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class MyDeque {
    head: ListNode;
    tail: ListNode;
    constructor() {
        this.head = new ListNode();
        this.tail = new ListNode();

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @return {boolean}
     */
    isEmpty(): boolean {
        return this.head.next === this.tail;
    }

    /**
     * @param {number} value
     */
    append(value: number): void {
        const newNode = new ListNode(value);
        newNode.prev = this.tail.prev;
        newNode.next = this.tail;
        this.tail.prev.next = newNode;
        this.tail.prev = newNode;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value: number): void {
        const newNode = new ListNode(value);
        newNode.next = this.head.next;
        newNode.prev = this.head;
        this.head.next.prev = newNode;
        this.head.next = newNode;
    }

    /**
     * @return {number}
     */
    pop(): number {
        if (this.isEmpty()) return -1;
        const target = this.tail.prev;
        const prevNode = target.prev;
        const value = target.value;

        this.tail.prev = prevNode;
        prevNode.next = this.tail;

        return value;
    }

    /**
     * @return {number}
     */
    popleft(): number {
        if (this.isEmpty()) return -1;
        const target = this.head.next;
        const nextNode = target.next;
        const value = target.value;

        this.head.next = nextNode;
        nextNode.prev = this.head;
        
        return value;
    }
}
