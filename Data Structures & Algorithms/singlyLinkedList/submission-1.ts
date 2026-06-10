class Mode {
    value: number;
    next: Mode | null;

    constructor(value, nextNode = null) {
        this.value = value;
        this.next = nextNode;       
    }
}

class LinkedList {
    tail;

    head;

    constructor() {
        this.head = new Mode(-1);
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        let curr = this.head.next;
        let i = 0;
        while (curr) {
            if (i === index) {
                return curr.value;
            }
            i++;
            curr = curr.next;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        const newNode = new Mode(val, this.head.next);
        this.head.next = newNode;
        if (newNode.next === null) {
            this.tail = newNode;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        const newNode = new Mode(val);
        this.tail.next = newNode;
        this.tail = newNode
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        let prev = this.head;
        let i = 0;
        while(i < index && prev) {
            i++;
            prev = prev.next;

        }
        if (!prev || !prev.next) return false;

        
        if (prev.next === this.tail) {
            this.tail = prev;
        }
        prev.next = prev.next.next;
        return true;      

    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        const values = [];
        let scroll = this.head.next;
        while (scroll != null) {
            values.push(scroll.value);
            scroll = scroll.next;
        }
        return values;
    }

}