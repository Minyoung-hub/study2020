let animal = {
		name: 'animal'
};

let rabbit = {
		age : 3
};

//[[Prototype]] => 괄호 두개 넣는 이유 : 감춰져 있다는 뜻!
console.log(animal.__proto__); // {}(엔트리가 없는 텅 빈 객체)
console.log(rabbit.__proto__); // {}

rabbit.__proto__ = animal; // 부모를 설정한다.(프로토 타입을 설정한다.) => age property뿐만 아니라 age property까지 자유롭게 쓸 수 있다.
console.log(rabbit.__proto__); // { name: 'animal' }
console.log(rabbit.name, rabbit.age); // animal 3

//
animal = {
		walk(){
			console.log('animal walk.');
		}
};

rabbit = {
		__proto__: animal
};

rabbit.walk(); // animal walk.

rabbit.walk = function() {
	console.log('rabbit walk.');
};
rabbit.walk(); // rabbit walk.

//
let user = {
		_name: 'user',
		get name() {
			return this._name;
		}, // 잊지말자 comma(property로 나열하는 것이기 때문에 comma가 필요하다)
		set name(name){
			this._name = name;
		}
}

let admin = {
		__proto__: user
};

console.log(admin.name); // user

//
animal = {
	name: 'animal',
	weight: 50,
	eat() {
		console.log(`${this.name} eat.`);
	}
};

rabbit = {
		name: 'rabbit', 
		eat() {
			console.log(`${this.name} eat.`);
		}
};

let lion = {
		name: 'lion',
		eat() {
			console.log(`${this.name} eat.`);
		},
		__proto__: animal
};

animal.eat(); // animal eat.
rabbit.eat(); // rabbit eat.
lion.eat(); // lion eat.

console.log(Object.keys(rabbit)); // [ 'name', 'eat' ]

for(let key in rabbit)
	console.log(key); // name  eat

console.log(Object.keys(lion)); // [ 'name', 'eat' ] 여기서는 부모 키 조회 안됨.

for(let key in lion)
	console.log(key); // name  eat  weight(부모가 갖고있는 키까지 조회가능)

for(let key in lion) {
	let isOwn = lion.hasOwnProperty(key);
	
	if(isOwn) console.log(`child property: ${key}`);
	else console.log(`parent property: ${key}`);
};
/*
child property: name
child property: eat
parent property: weight
*/