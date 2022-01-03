let id1 = Symbol('id');
let id2 = Symbol('id');

console.log(id1 == id2); 	  // false //심볼의 이름을 뭘로 주든 심볼에 들어간 값은 각각 다르다. 
console.log(id1);			  // Symbol(id) //심볼은 객체다. 그래서 객체.으로 호출할 수 있다.
console.log(id1.toString());  // Symbol(id) // 위에꺼는 자동으로 toString을 호출한 후 받아온 값이라는 것을 알 수 있다.
console.log(id1.description); // id // description을 이용하면 property name만 알 수 있다.

// hidden property
let user = {
		name: 'neo'
};

let id = Symbol('id');
user[id] = 1;
 
console.log(user.id); // undefined // 닷연산자로 접근 불가
console.log(user[id]); // 1 // 심볼로 만든 엔트리는 스퀘어로 접근해야함.
// property name에 스페이스바가 들어갈 때, name이 숫자일때, 심볼일 때 닷연산자를 쓸 수 없고, 스퀘어 연산자로 접근해야한다.

user = {
		name : 'morpheus',
		age : 52,
		[id] : 2
}

console.log(user.id); // undefined // 닷연산자로 접근 불가
console.log(user[id]); // 2 // 심볼로 만든 엔트리는 스퀘어로 접근해야함.

for(let key in user)
	console.log(key); 
/* name
 * age
 */
// 두군데 이상에서 공유하는 객체에 나만의 키(엔트리)를 추가시키고 싶을때 쓰는 문법이 Symbol이다.
// 나만의 property를 만들어 줄 때 심볼을 쓴다.
console.log(Object.ㅏeys(user));