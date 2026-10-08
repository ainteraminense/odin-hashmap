import { HashMap } from "./hashMap.js"

const test = new HashMap() // or HashMap() if using a factory

test.set('apple', 'red'); // 10 , after rehash 26 - head
test.set('banana', 'yellow'); // 5 , , after rehash 5 - head
test.set('carrot', 'orange'); // 3 , after rehash 3 - head
test.set('dog', 'brown'); // 12 - head
test.set('elephant', 'gray'); // 1 , after rehash 17 - head
test.set('frog', 'green'); // 4 , after rehash 4 - head
test.set('grape', 'purple'); // 11 - head, , after rehash 11 - head
test.set('hat', 'black'); // 11 - [1]
test.set('ice cream', 'white'); // 13 , after rehash 13 - head
test.set('jacket', 'blue'); // 14 , after rehash 14 - head
test.set('kite', 'pink'); // 15 , after rehash 15 - head
test.set('lion', 'golden'); // 12 [1]
console.log(`Number of entries after append: ${test.length()}`); 

test.set('dog', 'black'); // , after rehash 28 - head
test.set('hat', 'white'); //, after rehash 27 - head
test.set('lion', 'brown'); // , after rehash 28 - [1]
console.log(`Number of entries after update: ${test.length()}`); 

test.set('moon', 'silver'); // 1 - [1] , after rehash 1 - head
console.log(`Number of entries after trigger: ${test.length()}`); 
console.log(`Capacity: ${test.capacity}`);



