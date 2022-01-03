/** JSON(JavaScript Object Notation) **/ 
// 자바스크립트의 객체를 표기하는 것을 흉내낸 문법
// JSON pakage 설치할 때 명령문 : npm i -g json

let user = {
		name: 'kelly',
		age: 30,
		isAdmin: false,
		course: ['html', 'css'],
		wife: null
};

// serializing
let json = JSON.stringify(user); // 객체가 스트링으로 변환
console.log(typeof json); // string
console.log(json); // {"name":"kelly","age":30,"isAdmin":false,"course":["html","css"],"wife":null} // 자바 스크립트 객체와 같은 모양

user = {
		name: 'jessie',
		room: {
			number: 23,
			participants: ['john','ann']
		},
		greet(){
			return 'hello';
		},
		[Symbol('id')]: 123,
		color: undefined
};

console.log(JSON.stringify(user)); // {"name":"jessie","room":{"number":23,"participants":["john","ann"]}}
// function, undefined, Symbol은 JSON으로 변환하지 않는다.


//
let room = {
		number: 23
};

let meetup = {
		title: 'conference',
		room
};

console.log(JSON.stringify(meetup)); // {"title": "conference", "room":{"number":23}} // room 객체에 toJSON이 없을 때

room.toJSON = function(){
	return this.number;
}

console.log(JSON.stringify(meetup)); // {"title":"conference","room":23} // // room 객체에 toJSON을 썼을 때


//
let manJson = '{"name": "will", "age": 27, "major": ["computer", "art"], "friend": {"name": "scott", "age": 25}}';

let man = JSON.parse(manJson);
console.log(man);
/*
{
  name: 'will',
  age: 27,
  major: [ 'computer', 'art' ],
  friend: { name: 'scott', age: 25 }
}
*/
console.log(man.name); // will