import { HashMap } from "./hashMap.js"

const test = new HashMap() // or HashMap() if using a factory

test.set('apple', 'red'); // 10
test.set('banana', 'yellow'); // 5
test.set('carrot', 'orange'); // 3
test.set('dog', 'brown'); // 12 - head
test.set('elephant', 'gray'); // 1
test.set('frog', 'green'); // 4
test.set('grape', 'purple'); // 11 - head
test.set('hat', 'black'); // 11 - [1]
test.set('ice cream', 'white'); // 13
test.set('jacket', 'blue'); // 14
test.set('kite', 'pink'); // 15
test.set('lion', 'golden'); // 12 [1]
console.log(`Number of entries after append: ${test.length()}`); 

test.set('dog', 'black');
test.set('hat', 'white');
test.set('lion', 'brown');
console.log(`Number of entries after update: ${test.length()}`); 

test.set('moon', 'silver'); // 1 - [1]
console.log(`Number of entries after trigger: ${test.length()}`); 
console.log(`Capacity: ${test.capacity}`);



