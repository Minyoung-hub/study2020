function User(name){ // 생성자 // 가독성을 위해서 생성자로 쓰는 펑션 이름의 맨 앞글자는 대문자로 쓴다.
	// this = {};
	this.name = name;
	this.greet = function() {
		console.log(`I am ${this.name}`);
	};
	// return this;
}

/* Duck typing
 * (오리를 알고 있는 상태)오리를 보고 저건 오리다. 그렇기 때문에 뒤뚱뒤뚱 걷고, 꽥꽥 소리를 낸다.
 * (오리를 모르고 있는 상태)오리를 본다. 그것은 꽥꽥하고 뒤뚱뒤뚱 걷는다. 고로 오리다. -> 이런 관점이 duck typing
 */

// 생성자를 이용해서 객체를 만들 때 new를 넣어주면됨
const user1 = new User('bob'); // new 연산자로 호출 했기 때문에 User가 생성자가 된것이다.
const user2 = new User('sarah');
user1.greet(); // I am bob
user2.greet(); // I am sarah

//
let str = String(1);
console.log(typeof str); // string

str = new String(1);
console.log(typeof str); // object // 생성자가 리턴하는 값의 타입은 객체(Object)이다.

//
let human = new function() {
	this.name = 'neo';
	this.age = 27;
};

//
function BigUser() {
	this.name = 'amy';
	return {name: 'beth'}; // this 객체가 아닌 다른 객체를 return하고 싶을 때 
}

function SmallUser() {
	this.name = 'lorie';
	return; // function의 실행을 종료가 목적이다.
}

console.log(new BigUser()); // { name: 'beth' }
console.log(new SmallUser()); // SmallUser { name: 'lorie' }
console.log(new SmallUser); // SmallUser { name: 'lorie' } // 파라미터 없는 펑션을 호출할 때는 파라미터 괄호를 생략할 수 있다.

console.log(SmallUser); // [Function: SmallUser] // SmallUser function이 실행되지 않은 것이다.
console.log(SmallUser()); // undefined

// 객체를 후에 디자인 할 수 있다.(미리 디자인해서 만들어줄 필요 없다.)
const user = new Object(); // new 없었으면 평범한 펑션으로 호출하는 것. 근데 new가 있으면 생성자로 호출됨
user.name = 'chris';
user['age'] = 38;
user.greet = function() {
	console.log(`I am ${this.name}`);
};

console.log(user); // { name: 'chris', age: 38, greet: [Function] }

user.greet(); // I am chris

// 
const person = Object.create(user);
console.log(person); // {}
console.log(person.name); // chris
console.log(person === user); // false 주소값이 다르면 다른 객체 같으면 같은 객체 => person객체의 주소값과 user객체의 주소값은 다르다 = 다른 객체이다.  
// person 객체는 user 객체의 창문 역할을 하는 view 객체이다. create은 view 객체를 만드는 역할을 한다.