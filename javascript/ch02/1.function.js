// function declaration(함수 선언)
function greet(){ // code block(괄호로 묶여져 있는 부분을 일컫는 말)
	console.log('hello');
}

greet(); // hello

// function expression(함수 표현식) : 이름 없는 function을 변수에 할당 -> 변수 명이 function의 이름으로 쓰임.
let salute = function() {
	console.log('hi');
};

salute(); // hi

let sayHello = function(user, greeting){
	return `${greeting}, ${user}`;
};

console.log(sayHello('rebecca', 'hello')); // hello, rebecca

const sayHi = function(){
	console.log('Hi');
};

const say = sayHi;
say(); // Hi

let compliment = function(user, greeting){
	const phrase = greeting + ', ' + user + '.';
	return function(){
		console.log(phrase);
	};
};

let compliment2 = compliment('madonna', 'good morning');
console.log(compliment2); // [Function]
compliment2(); // good morning, madonna.

// 무명(1회용)
(function(){
	console.log('earth');
})(); // earth

(function(user){
	console.log('earth ' + user);
})('hoo'); // earth hoo

let myFn = function(fn){
	const result = fn();
	console.log(result);
};

myFn(function(){
	return 'moon';
}); // moon

let argFn = function(){
	return 'star';
};

myFn(argFn); // star

// Function()
let add = new Function('a', 'b', 'return a + b'); // new 다음에 Function을 써주면 객체가 하나 생성된다. 이렇게 생성된 객체는 함수의 역할을 하게 된다.
console.log(add(1, 2)); // 3
console.log(typeof add); // function

// 
let showMsg = function(from, msg='no message.'){
	console.log(`${from}: ${msg}`);
}

showMsg('trinity', 'follow a rabbit.'); // trinity: follow a rabbit.
showMsg('trinity'); // trinity: no message.

function calculator(a, b, operator='+'){
	let result = 0;
	if(operator == '*') result = a * b;
	else if(operator == '-') result = a - b;
	else if(operator == '/') result = a / b;
	else result = a + b;
		
	console.log(`${a} ${operator} ${b} = ${result}`);
}
calculator(4, 3);
calculator(4, 3, '*');
calculator(4, 3, '/');
calculator(4, 3, '-');

//NFE: Name Function Expression 자기가 자기를 호출하고 싶을 때 쓴다.
let tellHi = function fn(who){
	if(who) console.log(`Hi, ${who}.`);// "파라미터 값이 있으면" 이란 의미! who값이 없으면 false 있으면 true이기 때문
	else fn('Guest');
};

tellHi(); // Hi, Guest.
tellHi('Adel'); // Hi, Adel.