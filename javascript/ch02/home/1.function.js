// eval는 문자로 표현된 JavaScript 코드를 실행하는 함수 하지만 실행속도가 느려지므로 웬만하면 사용하지 않는 것이 좋다.
function calc(a, b, op='+'){
	let result = eval(a + op + b);
	console.log(`${a} ${op} ${b} = ${result}`);
}
calc(4, 3);
calc(4, 3, '*');
calc(4, 3, '/');
calc(4, 3, '-');

function calculator(a, b, op ='+'){
	let result = 0;
	if(op == '*') result = a * b;
	else if(op == '-') result = a - b;
	else if(op == '/') result = a / b;
	else result = a + b;
	
	console.log(`${a} ${op} ${b} = ${result}`);
}
calculator(4, 3);
calculator(4, 3, '*');
calculator(4, 3, '/');
calculator(4, 3, '-');