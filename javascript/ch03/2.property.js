let user = {};
console.log(user.height, user.weight); // undefined undefined

user.height = 200; // 객체.property 에 할당연산자 붙여주면 property에 값이 추가됨. // 닷연산자를 써도되고
user['weight'] = 80; // 스퀘어 연산자를 써도된다.

console.log(user.height, user.weight);

// delete property
delete user.weight; // 객체.property 안의 값 삭제
console.log(user.weight); // undefined


//
const foo = function(){}; // function도 객체다!!
foo.cnt = 1;
console.log(foo.cnt); // 1

//
let makeUser = function(name, age){
	return{
		name : name, // property name과 parameter value를 통일 시켜준다.
		age : age,
	};
}
console.log(makeUser('doris', 57)); // { name: 'doris', age: 57 }

// 위에 코드말고 아래있는 코드를 써주면 된다.

makeUser = function(name, age){
	return {
		name,
		age
	}
};
console.log(makeUser('lincoln', 27)); // { name: 'lincoln', age: 27 }


//
let man = {
		name: 'samuel',
		1: 'one',
		2: 'two'
};

// console.log(man.1); // SyntaxError: missing ) after argument list
console.log(man['1']); // one


//
console.log('name' in man); // true

//
for(let key in man)
	console.log(`${key}: ${man[key]}`);
/*
1: one
2: two
name: samuel
*/
// of 옆에는 collection in 옆에는 객체

//
user = {
		greet: function() {
			console.log('hi');
		}
}
user.greet(); // hi

// 위 아래 둘다 같은 의미

user = {
		greet() {
			console.log('hello');
		}
}
user.greet(); // hello

console.log(Object.keys(user)); // [ 'greet' ]
console.log(Object.values(user)); // [ [Function: greet] ]

console.log(Object.entries(user)); // [ [ 'greet', [Function: greet] ] ]
// key랑 value 두개를 통칭하는 용어 = entry