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

function calc(a, b, op){
	op(a, b);
}

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