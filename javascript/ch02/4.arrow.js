let add = function(a, b) {
	return a + b;
}

add = (a, b) => `${a} + ${b} = ${a + b}`; // 1 + 2 = 3
console.log(add(1, 2));

const double = n => 2 * n; 
console.log(double(2)); // 4

const greet = () => console.log('hello');
greet(); // hello
console.log(greet()); // hello undefined
console.log(greet); // [Function: greet]

const age = 16;
const welcome = (age < 20) ?
		() => console.log('You are in teens.') :
		() => console.log('You are not in teens.');
welcome(); // You are in teens.
console.log(typeof welcome); // function

let shef1 = food => `sweet ${food}`;
let shef2 = food => `hot ${food}`;
let waiter = (food, shef) => shef(food);
console.log(waiter('jajangmyeon', shef1));
console.log(waiter('jajangmyeon', shef2));
console.log(waiter('champon', shef1));

let sum = (a, b) => {// 2줄이상의 명령문이 있으면 {}로 감싸고 return을 준다.
	   const result = a + b;
	   return result;
	};

	console.log(sum(1, 2));
