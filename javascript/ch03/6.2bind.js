//
let name = 'lincoln';

let man = {
		name: 'leo'
};

function greet() {
	console.log(`I am ${this.name}.`);
}

greet(); // I am undefined.
name = 'lincoln'
function greet() {
	console.log(`I am ${this.name}.`);
}
let fn = greet.bind(man);
fn(); // I am leo.

setTimeout(fn, 1000); // I am leo.
// call 은 바로 그 함수 실행해주고 bind는 그 함수을 리턴해서 let fn에 담을 수 있다.


//
let user = {
	name: 'jhon',
	greet() {
		console.log(`I am ${this.name}`);
	}
}

let greetFn = user.greet.bind(user);

setTimeout(greetFn, 1000); // I am jhon.

user.greet = function(){
	console.log('hello');
}