class Node {
    constructor(hashNode, nextNode) {
    this.hashNode = hashNode;
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

    append(hashNode) {
        const node = new Node(hashNode, null);
        if (this.head === undefined) {
            this.head = node;
        } else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            } 
            temp.next = node;
        }
    };

    update(hashNode, index) {
        const node = new Node(hashNode, null)
        if (this.head === undefined) {
            this.head = node;
        } else {
            let count = 0;
                if (index === 0) {
                   node.next = this.head.next;
                   this.head = node; 
                }
            let temp = this.head;
            while (temp.next) {
                if (count === index - 1) {
                    node.next = temp.next.next;
                    temp.next = node;
                } else {
                temp = temp.next;
                }
                count++;
            }
        }
    };

    findIndex(key) {
        if (this.head === undefined) {
            return -1;
        } else {
            const keys = this.keys();
            let count = 0;
            if (keys[count] === key) {
                return count;
            }
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
                count++;
                if (keys[count] === key) {
                    return count;
                }
            }
            return -1;
        }
    };

    remove(indexToRemove) {
            let temp = this.head;
            let count = 0;
            if (count === indexToRemove) {
                this.head = this.head.next;
                return;
            }
            while(temp && temp.next != null) {
                if (count === indexToRemove - 1) {
                    temp.next = temp.next.next;
                    count++;
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
            let count = 1;
            while (temp.next != null) {
                temp = temp.next;
                count++;
            }
            return count;
        }
    };

    keys() {
        let temp = this.head;
        const result = [];
        result.push(Object.keys(temp.hashNode)[0]);
        while (temp.next != null) {
            result.push(Object.keys(temp.next.hashNode)[0]);
            temp = temp.next;
        }
        return result;
    };

    values() {
        let temp = this.head;
        const result = [];
        result.push(Object.values(temp.hashNode)[0]);
        while (temp.next != null) {
            result.push(Object.values(temp.next.hashNode)[0]);
            temp = temp.next;
        }
        return result;
    };

    // entries() {
    //     let temp = this.head;
    //     const result = [];
    //     const keys = this.keys();
    //     const values = this.values();
    //     while (temp.next != null) {
    //         for (let i = 0; i<keys.length;i++) {
    //         result.push[{[keys[i]]:values[i]}];
    //         temp = temp.next;
    //     }
    // }
    //     return result;
    // };
}