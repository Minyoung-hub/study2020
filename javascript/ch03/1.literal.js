{}; // 객체를 가장 간단하게 만드는 문법

// Object literal
let user = { // 괄호로 만든 객체에 이름을 붙여주려면 변수에 할당해주면 된다.
	name : {
		first : 'bob',
		last : 'smith'
	}, // 각각의 property는 comma로 구별이 된다.
	'nick name' : 'tiger face',
	age : 12,
	intertsts : [ 'music', 'movie' ],
	sing : function() {
		console.log('la la');
	}, // 마지막 property뒤에는 comma를 붙여도 되고 안붙여도 된다.
}; // property의 동의어는 entry
// property name에 ''를 꼭 붙여줘야하는 상황 : property key name에 sapce bar가 들어가는 경우, key
// name을 숫자로 설정한 경우

// 엔트리 사용법 : 객체.엔트리이름 => 객체에 있는 엔트리 주솟값을 읽어온다.
console.log(user.name); // { first: 'bob', last: 'smith' }
console.log(user.name.first); // bob
console.log(user['name']['first']); // bob
console.log(user.sing()); // la la undefined
user.sing(); // la la

// console.log(user.'nick name'); // SyntaxError: Unexpected string
console.log(user['nick name']); // tiger face
// 스퀘어 안에 property name을 써줄때는 꼭 string type으로 써준다.

let key = 'nick name'; // key 값을 동적으로 계속 바꿔서 넣을 수 있다.
console.log(user[key]); // tiger face

// 
user.name.first = 'jhon'; // 닷연산자
user['age'] = 50; // 스퀘어
console.log(user.name.first, user.age); // jhon 50

// 
let man = {
		   name: "john",
		   surname: "smith",
		   fullName(){
		      return `${this.name} ${this.surname}`;
	 },
};

console.log(man.fullName()); // john smith
console.log(man.fullName); // [Function: fullName]

//		   
let man1 = {
		   name: "john",
		   surname: "smith",
		   get fullName(){ // fullname은 property이다.
		      console.log("getter start");
		      return `${this.name} ${this.surname}`;
		   },
		   set fullName(name){
		      [this.name, this.surname] = name.split(" "); // space로 나눠짐
		   }, // 마지막 property에 컴마를 붙여도 상관없음
};

		console.log(man1.fullName); // getter start john smith
		man1.fullName = "bob dilon";
		console.log(man1.fullName); // getter start bob dilon

// console.log(man.fullName()); // jhon smith
console.log(man.fullName); // jhon smith // getter 사용

man.fullName = 'bob dilon'; // setter 사용
console.log(man.fullName); // bob dilon // getter 사용

//
let human = {
		_name: 'no more',
		
		get name(){
			return this._name;
		}, 
		
		set name(name){
			this._name = name;
		}
}
console.log(human.name);
human.name = 'crown';
console.log(human.name);
//할당연산자가 있는지 없는지로 setter getter가 구분된다.
//getter, setter 안에있는 변수명에 언더바 써준다.

human._name = 'neo';
console.log(human._name); // 'neo'
// 이렇게 쓰는 것도 가능하지만 이렇게 쓸 거면 getter setter를 쓸 필요가 없다.

 
let user1= {
		_name: 'error',
		
		get name(){
			return this._name;
		}, 
		
		set name(name){
			if(name.length >= 4)
				this._name = name;
			else this._name = 'error';
		}
}
console.log(user1.name);
user1.name = 'minyoung';
console.log(user1.name);
user1.name = 'min';
console.log(user1.name);