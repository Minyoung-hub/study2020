let set = new Set();
// set은 키 없이 값을 넣어야 하기 때문에 중복값을 허용하지 않는다

set.add({name: 'jhon'});
set.add({name: 'pete'});
set.add({name: 'jhon'});
// 첫번쨰 존과 세번째 존은 중복되지 않는다. 물리적으로 주소값이 다르다. 

console.log(set); // Set { { name: 'jhon' }, { name: 'pete' }, { name: 'jhon' } }

let user1 = {name: 'jhon'};
let user2 = {name: 'pete'};

set.clear();

set.add(user1);
set.add(user2);
set.add(user1);
//첫번째 user1과 세번째 user1은 중복된다. 물리적으로 주소값이 같다.

console.log(set); // Set { { name: 'jhon' }, { name: 'pete' } } 

console.log(set.size); // 2

/** iterable set **/
for(let user of set)
	console.log(user); // 잘됨 -> iterable이라는 증거
/*
{ name: 'jhon' }
{ name: 'pete' } 
*/

set.forEach((val, valAgain, set) => 
	console.log(val, valAgain)
);
/*
{ name: 'jhon' }  { name: 'jhon' }
{ name: 'pete' }  { name: 'pete' }
*/

console.log(set.has(user1));	// true
console.log(set.delete(user2)); // true
console.log(set.size);			// 1

//
set = new Set([1, 2, 3]);
console.log(set); // Set { 1, 2, 3 }

set = new Set('hello');
console.log(set); // Set { 'h', 'e', 'l', 'o' }
// array도 string도 set으로 잘 변환이 된다.