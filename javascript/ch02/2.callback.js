function sayOdd(num){
	console.log(`${num} is an odd number.`); 
}

function sayEven(num){
	console.log(`${num} is an even number.`); 
}

function lookNum(fn1, fn2){
	const num = parseInt(Math.random() * 10) + 1;
	if(num % 2 != 0) fn1(num); // num이 홀수이면
	else fn2(num); // num이 짝수이면
}

lookNum(sayOdd, sayEven);

function add(a, b){
	console.log(`${a} + ${b} = ${a + b}`);
}
function minus(a, b){
	console.log(`${a} - ${b} = ${a - b}`);
}
function multi(a, b){
	console.log(`${a} * ${b} = ${a * b}`);
}
function divide(a, b){
	console.log(`${a} / ${b} = ${a / b}`);
}
function calculation(a, b, op){
	op(a, b);
};

calculation(4, 3, add);
calculation(4, 3, minus);
calculation(4, 3, multi);
calculation(4, 3, divide);

function add2(a, b){
	return a + b;
}
function minus2(a, b){
	return a - b;
}
function multi2(a, b){
	return a * b;
}
function divide2(a, b){
	return a / b;
}
function calculate2(a, b, fn = add2){
	return fn(a, b);
}

console.log(calculate2(4, 3, add2),
			calculate2(4, 3, minus2),
			calculate2(4, 3, multi2),
			calculate2(4, 3, divide2),
			calculate2(4, 3));

let shef1 = function(food){
	   return `sweet ${food}`;
	}

	let shef2 = function(food){
	   return `hot ${food}`;
	}

	let waiter = function(food, shef){
	   return shef(food);
	} // 이 부분이 callback

	console.log(waiter('jajangmyeon', shef1), 
	         waiter('jajangmyeon', shef2),
	         waiter('champon', shef2));