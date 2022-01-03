function init(){
	let name = 'amanda';
	
	function displayName(){ // 자신의 상위 lexcical environment에 대한 주소값도 가지고 있다 그래서 얘는 init()의 주소값을 가지고 있다.
		console.log(name);
	}
	
	displayName();
}

init(); // amanda

let name = 'neo';
// closure = function + lexcical environment
function makeFn(){
	let name = 'parker';
	
	function displayName(){
		//let name = 'alice';
		console.log(name);
	}
	
	return displayName;
}

let myFn = makeFn();
myFn(); // parker

//
function makeCounter(){
	let count = 0;
	
	return function(){
		return count++;
	}
}

let counter = makeCounter();
console.log(counter(), counter()); // 0 1