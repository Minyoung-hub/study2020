let map = new Map();

map.set('1', 'hello');
map.set(1, {name: 'david'});
map.set(true, function fn(){});

console.log(map.get('1')); // hello
console.log(map.get(true)); // [Function: fn]

console.log(map.has(1)); // true (1 이라는 키가 있냐?는 뜻임)
console.log(map.size); // 3 // map에 entry숫자를 확인할 수 있다.

console.log(map.delete(1)); // true // delete를 이용하면 특정 키를 가진 엔트리를 지울 수 있다
console.log(map.size); // 2

map.clear(); // map에 있는 모든 entry를 지운다.
console.log(map.size); // 0

// map의 특징 : key의 타입이 애니타입 -> 객체도 key로 쓸 수 있다.
let person = {name: 'damon'};
map = new Map();
map.set(person, 12);
console.log(map.get(person)); // 12
console.log(map); // Map { { name: 'damon' } => 12 }

/** chaining **/ // 메서드가 주어 객체를 리턴해줘야 사용할 수 있다.
map = new Map();
map.set(1, 'amellia')
	.set(2, 'avery')
	.set(3, 'adela');
console.log(map) // Map{ 1 => 'amellia', 2 => 'avery', 3 => 'adela'}


/** iterable map **/ // map은 iterable이다.
let greens = new Map([ // 생성과 동시에 값 넣어주려면 entry들을 배열로만들어 넣어주면된다.
   ['cucumber', 500],
   ['tomato', 350],
   ['onion', 50]
]);

for(let vegetable of greens) // for of가 잘 작동함 -> iterable이라는 증거
   console.log(vegetable);
/*
[ 'cucumber', 500 ]
[ 'tomato', 350 ]
[ 'onion', 50 ] 
*/

for(let user of map)
   console.log(user); // 위에서 set으로 넣었던 것도 배열로 넣어져 있다.
/*
[ 1, 'amellia' ]
[ 2, 'avery' ]
[ 3, 'adela' ]
*/

// key들 얻어내기
for(let vegetable of greens.keys()) // keys 메소드는 키들만 return한다.
   console.log(vegetable); 
/*
cucumber
tomato
onion
*/

// value값 얻어내기
for(let amount of greens.values())
   console.log(amount);
/*
500
350
50
*/

greens.forEach((val, key, map) =>
	console.log(key, val)
);
/*
cucumber 500
tomato 350
onion 50
*/

/** object -> entries -> map **/
let user = {
		name: 'aiden',
		age: 56
};

let entries = Object.entries(user);
console.log(entries); // [ [ 'name', 'aiden' ], [ 'age', 56 ] ] 배열을 원소로 가진 배열
map = new Map(entries);
console.log(map); // Map { 'name' => 'aiden', 'age' => 56 }

/** entries -> object **/
let items = [
	['apple', 1],
	['orange', 2],
	['pear', 3]
];

let fruits = Object.fromEntries(items);
console.log(fruits); //{ apple: 1, orange: 2, pear: 3 }


/** map -> object **/
map = new Map();
map.set('apple', 1);
map.set('orange', 2);
map.set('pear', 3);

entries = map.entries();
console.log(entries); // [Map Entries] { [ 'apple', 1 ], [ 'orange', 2 ], [ 'pear', 3 ] }
fruits = Object.fromEntries(entries);
console.log(fruits); // { apple: 1, orange: 2, pear: 3 }

fruits = Object.fromEntries(map);
console.log(fruits); // { apple: 1, orange: 2, pear: 3 }

