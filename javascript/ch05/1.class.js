class Animal { // 설탕문법(sugar syntax)
	growl() {
		console.log('growl');
	}
}

new Animal().growl(); // growl

//
let Bird = class{ // class가 담겨져 있기 때문에 변수명은 대문자로 시작한다.
	tweet() {
		console.log('tweet');
	}
}

new Bird().tweet(); // tweet

// 메서드 이름을 동적으로 생성
class User {
	['say' + 'Hi'](){
		console.log('hi');
	}
}

new User().sayHi(); // hi

//
function makeClass(phrase){
	return class{
		phonate() {
			console.log(phrase);
		}
	}
}

let Idea = makeClass('capitalism'); // class가 담겨져 있기 때문에 변수명은 대문자로 시작한다.
new Idea().phonate(); // capitalism

//
class Flower {
	name = 'flower';
	
	say() {
		console.log(this.name); 
	}
}

let flower = new Flower();
console.log(flower.name); // flower
flower.name = 'iris';
flower.say(); // iris

//
class Ball {
	constructor(name){
		this.name = name;
	}
	
	say() {
		console.log(this.name);
	}
}

let ball = new Ball("ball");
console.log(ball.name); // ball
ball.say(); // ball

class Car{
	cunstructor(name){
		this.name = name;
	}

	set name(name){
		console.log('set name(name)')
		this.name = name;
	}
	
	get name(){
		return this._name + ' get';
	}
}

let car = new Car('tesla') // set name(name)
// console.log(car._name); // tesla
console.log(car.name); // tesla

//
class Lion{
	_name;
	
	set name(name){
		if(name.length >= 4) this._name = name;
		else console.log('the name is too short.');
	}
	
	get name() {
		return this._name;
	}
}

let lion = new Lion();
lion.name = 'bently';
console.log(lion.name); // bently

lion.name = 'ham'; // the name is too short.
console.log(lion.name); // bently


class Clock{
	constructor(saperator){
		this.saperator = saperator;
	}
	
	start(){
		setInterval(() => console.log(new Date().getHours(), this.saperator , new Date().getMinutes(), this.saperator , new Date().getSeconds()), 1000);
	}
}

new Clock(":").start();