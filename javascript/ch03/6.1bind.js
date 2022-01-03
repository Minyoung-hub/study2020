let user = {
		name: 'madonna',
		greet(){
			console.log(`I am ${this.name}.`);
		},
};

user.greet(); // I am madonna.

setTimeout(user.greet, 100); // I am undefined. // user.greet은 유저 객체가 아닌 유저 객체 안에 있는 greet function을 넘겨준 것이다.

let fn = user.greet;
setTimeout(fn, 200); // I am undefined.


//
setTimeout(function() {
	user.greet();
}, 300); // I am madonna.

setTimeout(() => user.greet(), 400); // I am madonna.