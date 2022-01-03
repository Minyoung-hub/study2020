// 평범한 경우 this 객체에는 주어객체가 들어간다.
let user1 = {
	name: 'isabel',
	greet() {
		console.log(`I am ${this.name}.`);
	}
};

let user2 = {
	name: 'jade',
	greet() {
		console.log(`I am ${this.name}.`);
	}
};

user1.greet(); // I am isabel.
user2.greet(); // I am jade.

// 글로벌.name
name = 'morpheus';

function greet() { // 글로벌.greet
	console.log(`I am ${this.name}.`);
// 객체는 선언할 때는 없고 호출하면 생긴다.
}

user1 = {name: 'neo'};
user2 = {name: 'trinity'};

greet(); // I am morpheus. // 글로벌.greet
greet.call(user1); // I am neo.
greet.call(user2); // I am trinity.

user1 = {
	name : 'rebecca',
	greet(){
		console.log(`I am ${this.name}.`);
	}
};

user2 = {
	name : 'colin',
};

user1.greet(); // I am rebecca.
// user2.greet(); // TypeError: user2.greet is not a function
user1.greet.call(user2); // I am colin.
// call을 쓰면 this 객체를 고를 수 있다.