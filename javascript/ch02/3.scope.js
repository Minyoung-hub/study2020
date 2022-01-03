// lexical environment
// case 1:
{
	let msg = 'hello';
	console.log(msg); // Hello
} // 블록 안의 msg는 블록이 끝나는 순간 사라졌다.

{
	let msg = 'world';
	console.log(msg); // world
}

let msg = 'world';


// case 2:
sayHi(); // Hi
// sayHello();  // ReferenceError : Cannot access 'sayHello' before initialization(변수는 있는데 초기화는 안됐다.)
// tell(); // 변수가 없을 때 나오는 에러 ReferenceError : tell is not defined

function sayHi(){
	console.log('Hi');
}

const sayHello = function(){
	console.log('Hello');
	
}

sayHi();	//Hi
sayHello();	//Hello


// case 3:
const age = 16;

if(age < 20) {
	function welcome() {
		console.log('You are in teens.')
	}
}
welcome(); // You are in teens.
// welcome은 블록이 생성될 때 생겼다가 블록이 끝나면서 사라지지 않는다.

if(age < 20) {
	const allow = function(){
		console.log('You are in 10s');
	}
}
// allow(); // ReferenceError : allow is not defined
// allow는 블록이 생성될 때 생겼다가 블록이 끝나면서 사라진다.

