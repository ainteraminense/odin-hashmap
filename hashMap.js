import { LinkedList } from "./linkedList.js";

export class HashMap {
    constructor(loadFactor = 0.75, capacity = 16) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.buckets = [];
        this.buckets.length = capacity;
    };

    hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i));
    }

    return hashCode % this.capacity;
    };

    isAboveThreshold() {
        const threshold = this.capacity * this.loadFactor;
        return this.length() > threshold ? true : false;
    }

    set(key, value) {
        const index = this.hash(key);
        // check if index is out of bounds
        if (index < 0 || index >= this.buckets.length) {
        throw new Error("Trying to access index out of bounds");
        }
        // implement grow buckets if it exceeds load capacity
        if(this.buckets[index] === undefined) {
            this.buckets[index] = new LinkedList();
            this.buckets[index].append({[key]:value});
        } else {
            const linkedListIndex = this.buckets[index].findIndex(key);
            if (linkedListIndex === -1) {
                this.buckets[index].append({[key]:value});
            } else {
                this.buckets[index].update({[key]:value}, linkedListIndex)
            }
        }
        if(this.isAboveThreshold()) {
            this.reset();
        }
    };
    
    reset() {
        // console.log(this.keys());
        // console.log(this.values());
        const keys = this.keys();
        const values = this.values();
        this.capacity = this.capacity * 2;
        this.buckets = [];
        this.buckets.length = this.capacity;
        for (let i = 0; i < keys.length; i++) {
            this.set(keys[i], values[i]);
        }
    }

    get(key) {
        const index = this.hash(key);
        // check if index is out of bounds
        if (index < 0 || index >= this.buckets.length) {
        throw new Error("Trying to access index out of bounds");
        }
        if(this.buckets[index] === null) {
            return undefined;
        } else {
            const linkedListIndex = this.buckets[index].findIndex(key);
            if (linkedListIndex === -1) {
                return undefined;
            } else {
                return this.buckets[index].values()[linkedListIndex];
            }
        }
    };

    has(key) {
        const index = this.hash(key);
        // check if index is out of bounds
        if (index < 0 || index >= this.buckets.length) {
        throw new Error("Trying to access index out of bounds");
        }
        if(this.buckets[index] === null) {
            return false;
        } else {
            const linkedListIndex = this.buckets[index].findIndex(key);
            if (linkedListIndex !== -1) {
                return false;
            } else {
                return true;
            }
        }
    };

    remove(key) {
        const index = this.hash(key);
        // check if index is out of bounds
        if (index < 0 || index >= this.buckets.length) {
        throw new Error("Trying to access index out of bounds");
        }
        if(this.buckets[index] === null) {
            return false;
        } else {
            const linkedListIndex = this.buckets[index].findIndex(key);
            if (linkedListIndex !== -1) {
                if (linkedListIndex > 0) {
                    this.buckets[index].remove(linkedListIndex);
                    return true;
                }        
            } else {
                return false;
            }
        }
    };

    length() {
        let total = 0;
        this.buckets.forEach((bucket) => {
            total += bucket.size();
        });
        return total;
    };

    clear() {
        this.buckets = [];
    };

    keys() {
        let result = []
        this.buckets.forEach((bucket) => {
            result = result.concat(bucket.keys());
        });
        return result;
    };
    
    values() {
        let result = []
        this.buckets.forEach((bucket) => {
            result = result.concat(bucket.values());
        });
        return result;
    };

    entries() {
        const result = []
        this.buckets.forEach((bucket) => {
            result = result.concat(bucket.entries());
        });
        return result;
    };
}
