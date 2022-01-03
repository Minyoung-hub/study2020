// 절차지향으로 표현
function greet() {
	console.log('hi');
}

console.log(greet.name); // greet

let sayHello = function(){};
console.log(sayHello.name); // sayHello


// 객체지향으로 표현
let user = {
		sayHi(){}, 
		sayBye: function(){} // 메소드라고 부르기도 한다.
};

console.log(user.sayHi.name); // sayHi
console.log(user.sayBye.name); // sayBye


//
function f1(a){}
function f2(a, b){}
function f3(a, b, ...more){}

console.log(f1.length, f2.length, f3.length); // 1 2 2

//
function sayHi(){
	sayHi.counter++; // counter라는 property가 추가된다.
}

sayHi.counter = 0;

sayHi();
sayHi();

console.log(sayHi.counter); // 2

