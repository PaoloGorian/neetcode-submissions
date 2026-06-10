class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class MyLinkedList {
    
    constructor() {
        this.head = new ListNode(-1);
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        if (index < 0 || index >= this.size) return;
        let node = this.head.next;
        let prev = this.head;
        while (index > 0) {
            prev = node;
            node = node.next;
            index--;
        }
        return prev;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.size) return -1;
        let curr = this.head.next;
        while (index > 0) {
            curr = curr.next;
            index--;
        }

        return curr.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        const newNode = new ListNode(val, this.head.next);
        this.head.next = newNode;
        this.size++;
        return;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        const newNode = new ListNode(val);
        let curr = this.head;
        while(curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.size++;
        return;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index < 0 || index > this.size) return;
        const newNode = new ListNode(val);
        let curr = this.head.next;
        let prev = this.head;
        while(index > 0) {
            prev = curr;
            curr = curr.next;
            index--;
        }

        newNode.next = curr;
        prev.next = newNode;
        this.size++;
        return;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) return;
        let curr = this.head.next;
        let prev = this.head;
        while (index > 0) {
            prev = curr;
            curr = curr.next;
            index--;
        }
        prev.next = curr.next;
        this.size--;
        return;
    }
}
