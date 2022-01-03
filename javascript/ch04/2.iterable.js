// 순서대로 index를 주어 값을 나열하는 객체를 iterable 객체라고 한다.
let range = {
	from: 1,
	to: 3 // 여기에 Infinity를 써주면 무한대로 값을 뽑아낼 수 있다.
}; // 엔트리가 2개 있는 평범한 객체

// 평범한 range 객체에 Symbol.iterator 펑션을 추가해서 iterable로 만들어준다.
// 펑션안에는 next펑션이 있어야 하고 그 펑션은 done이라는 키를 꼭 가지고 있어야한다.
range[Symbol.iterator] = function() {
	return {
		current: this.from,
		last: this.to,
		next() {
			if(this.current <= this.last)
				return {done: false, value: this.current++};
			else
				return {done: true};
		}
	}
};

for(let num of range)
	console.log(num);
/*
1
2
3
*/

range = {
	from: 1,
	to: 3,
	
	[Symbol.iterator] () {
			this.current = this.from;
			return this;
	},
	
	next() {
		if(this.current <= this.to)
			return {done: false, value: this.current++};
		else
			return {done: true};
	}
};

for(let num of range)
	console.log(num);
/*
1
2
3
*/

/**iterable string**/
let greeting = 'hello';
console.log(greeting[Symbol.iterator]); // [Function: [Symbol.iterator]]
// greeting에 Symbol.iterator가 있는지 확인하는데 있으면 iterable임
let iterator = greeting[Symbol.iterator](); // iterator 안에는 next메소드만 달랑 하나 있다

while(true){
	let result = iterator.next();
	if(result.done) break;
	console.log(result.value);
}
/*
h
e
l
l
o
*/

for(let char of greeting)
	console.log(char);
/*
h
e
l
l
o
*/

/** array-like **/ // 객체인데 배열처럼 생긴 객체를 말함
let arr = {
	0: 'hello',
	1: 'world',
	3: 'earth',
	length: 4
};

// for(let item of arr){} // TypeError: arr is not iterable (array-like는 array는 아니다.)

for(let key in arr)
	console.log(key, arr[key]);
/*
0 hello
1 world
3 earth
length 4
*/

arr = Array.from(arr); // array-like
console.log(arr); // [ 'hello', 'world', undefined, 'earth' ]

for(let word of arr)
	console.log(word);
/*
hello
world
undefined
earth
*/

arr = Array.from(range); // iterable
console.log(arr); // [ 1, 2, 3 ]

//string은 존제 자체로 iterable이다.
arr = Array.from('hello'); // iterable string
console.log(arr); // [ 'h', 'e', 'l', 'l', 'o' ]

