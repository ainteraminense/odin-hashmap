class Node {
    constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
    };
}

export class LinkedList {
    constructor() {
        this.head = undefined;
    };

    size() {
        if (this.head === undefined) {
            return 0;
        } else {
            let temp = this.head;
            let count = 0;
            while (temp.next != null) {
                temp = temp.next;
                count++;
            }
            return count;
        }
    };

    append(value) {
        const node = new Node(value, null);
        if (this.head === undefined) {
            this.head = node;
        } else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            } 
            temp.next = node;
        }
    };

    findIndex(key) {
        if (this.head === undefined) {
            return -1;
        } else {
            let count = 0;
            let temp = this.head;
            while (temp.next != null) {
                if (temp.value.key === key) {
                    return count;
                }
                temp = temp.next;
                count++;
            }
            return -1;
        }
    };

    remove(indexToRemove) {
            let temp = this.head;
            let count = 0;
            while(temp.next != null && count) {
                if (count === indexToRemove - 1) {
                    temp = temp.next.next;
                    continue;
                }
                temp = temp.next;
                count++;
            }
    };

    size() {
        if (this.head === undefined) {
            return 0;
        } else {
            let temp = this.head;
            let count = 0;
            while (temp.next != null) {
                temp = temp.next;
                count++;
            }
            return count;
        }
    };
}