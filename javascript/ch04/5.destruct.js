/** destructing assignment **/

let arr = ['ilya', 'kantor'];
let [firstName, surName] = arr;
console.log(firstName, surName); // ilya kantor

[firstName, surName] = 'john smith'.split(' ');
console.log(firstName, surName); // john smith

// 변수의 개수가 적은 경우
let[one, two] = [1, 2, 3];
console.log(one, two); // 1 2

// 변수의 개수가 많은 경우
[two, three] = [2];
console.log(two, three); // i   a

// 중간에 변수 하나 빼기
[one, , three] = [1, 2, 3, 4];
console.log(one, three); // 1 3


//
let[a, b, c] = 'i am'; // 문자 하나하나가 쪼개진다.
console.log(a, b, c); // i   a
[a, b, c] = 'i am'.split(' ');
console.log(a, b, c); // i am undefined

[a, b, c] = new Set([1, 2, 3, 4]);
console.log(a, b, c); // 1 2 3 

//
let user = {};
[user.name, user.surname] = 'jhon smith'.split(' ');
console.log(user); // { name: 'jhon', surname: 'smith' }

//
user = {
		name: 'oscar',
		age: 21
};

let entries = Object.entries(user);
console.log(entries); // [ [ 'name', 'oscar' ], [ 'age', 21 ] ]

for(let [key, val] of Object.entries(user)) // 할당하는 값은 iterable이어야 한다.
	console.log(key, val); 
/*
name oscar
age 21
*/

let map = new Map([
	['name', 'edith'],
	['age', 30]
]);

for(let [key, val] of map)
	console.log(key, val);
/*
name edith
age 30
*/

//
let guest = 'jane'; // 구조화 되어 있지 않다.
let admin = 'pete'; // 구조화 되어 있지 않다.

[guest, admin] = [admin, guest]; // 문자데이터 두개로 배열을 만들고 배열을 구조화 시켰다.
console.log(guest, admin); // pete jane

// 값의 개수가 더 많은 경우
[one, two, ...rest] = [1, 2, 3, 4]; // rest 문법을 이용하면 나머지 데이터를 구조화 시켜서 객체 하나에 넣을 수 있다.
console.log(one, two, rest); // 1 2 [ 3, 4 ]  // rest 문법을 사용하면 배열의 형태로 나온다.

// 변수의 개수가 더 많은 경우 
[name, surname='anonymous'] = ['john']; // 변수명에 할당연산자와 함께 기본값을 넣어줬다.
console.log(name, surname); // john anonymous

//
let options = {
		title: 'menu',
		width: 100,
		height: 200
};

// pattern 구조물의 할당에서 plain object를 할당한다면 할당연사자 왼편에는 pattern이 나와야한다.
let {title, height, width} = options; // pattern에서 쪽 객체의 변수명은 오른쪽 객체의 키와 이름이 일치해야 한다.(순서는 상관없다)
console.log(title, width, height); // menu 100 200

let {width:w, height:h} = options; // pattern에 별명을 넣어준다.
console.log(w, h); // 100 200

let {title:t, ...other} = options; // pattern에서는 rest 문법을 사용하면 object(객체)의 형태로 나온다.
console.log(t, other); // menu { width: 100, height: 200 }

let{title:subject, wide = 1000} = options;
console.log(subject, wide); // menu 1000

[options.title, options.width, options.height] = ['article', 10, 20];
console.log(options); // { title: 'article', width: 10, height: 20 }

// {title, width, height} = options; // SyntaxError: Unexpected token '=' 
({title, width, height} = options);
console.log(title, width, height); // menu 100 200


// pattern을 복잡하게 만들어봤다
let bread = {
		size: {
			width: 100,
			height: 200
		}, // 밸류값이 객체
		items: ['cake', 'donut'], // 밸류값이 배열
		extra: true // 밸류값이 불린타입
};

let {size, items} = bread;
console.log(size); // { width: 100, height: 200 }
console.log(items); // [ 'cake', 'donut' ]
console.log(size, items); // { width: 100, height: 200 } [ 'cake', 'donut' ]

// pattern을 객체와 유사하게 준다.
let{
	size: {
		width: breadth,
		height: level,
	},
	items: [item1, item2]
} = bread;

console.log(breadth, level, item1, item2); // 100 200 cake donut

/** argument **/
let menu = {
		title: 'menu',
		items: ['list', 'add'],
		expired: 10
};

function showMenu({title:name, items:[entry1, entry2]}){ // function의 parameter부분을 pattern 으로 기술했다.
	console.log(name, entry1, entry2);
}

showMenu(menu); // menu list add