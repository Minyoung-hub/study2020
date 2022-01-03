/* 순서대로 index를 주어 값을 나열하는 객체를 interable 객체라고 한다. */
let arr = new Array(1, 'hello', {age:3}, function fn(){});
console.log(arr);   // [ 1, 'hello', { age: 3 }, [Function: fn] ]

arr = [1, true, {age: 30}, function fn(){}];
console.log(arr);   // [ 1, true, { age: 30 }, [Function: fn] ]

arr = [];
arr[0] = 'a';
arr[1] = 'b';
arr[3] = 'c';
arr[6] = 'd';

console.log(arr);   // [ 'a', 'b', <1 empty item>, 'c', <2 empty items>, 'd' ]
/* x empty items = x개의 빈 값이 있다. */

console.log(arr[1]);   // b
console.log(arr[2]);   // undefined

//
console.log(arr.length);   // 7 ( 빈 값도 index값을 읽는다. )


//
let aArr = [1, 2];
let bArr = [2, 3];
let totArr = aArr.concat(bArr); // 주어 객체를 건드리지 않는다.
console.log(totArr);   // [ 1, 2, 2, 3 ]

//
arr = ['hello', 'world', '!'];
let str = arr.join();   // 'join'메서드는 배열의 값들을 연결시켜준다.
console.log(str);   // hello,world,!
console.log(typeof str);   // String

console.log(arr.join('/'));   // hello/world/!
console.log(arr.join(''));   // helloworld!
console.log(arr.join(' '));   // hello world !

// stack 차례대로 'data'를 쌓고 하나씩 꺼내읽는다.
arr = [];
arr.push(1);   // 'push'메서드는 'data'를 쌓는행위
arr.push(2);
arr.push(3);

console.log(arr);   // [ 1, 2, 3 ]
console.log(arr.pop());   // 3 // 'pop'메서드는 'data'를 꺼내서 읽는 행위, 읽은 값은 배열에서 사라진다.
console.log(arr);   // [ 1, 2 ]
console.log(arr[0]); // 1


// queue 먼저 들어온 'data'가 먼저 읽힌다.(줄서기)
arr = [];
arr.push(1);
arr.push(2);
arr.push(3);

console.log(arr);   // [ 1, 2, 3 ]
console.log(arr.shift());   // 1 // 'shift'메서드는 'data'를 들어간 순서대로 읽는 행위, 읽은 값은
                     // 배열에서 사라진다.
console.log(arr);   // [ 2, 3 ]
// 특정 인덱스 값을 읽고나면 그 뒤의 값들이 한칸씩 앞으로 자리 이동을 하게 된다. 만약 값들을 다 꺼내야된다면 뒤에서부터 꺼내는 것이 효율적이다.
console.log(arr[0]);   // 2


//
arr = [1, 2, 3];
arr.reverse();      // 'reverse'메서드는 배열의 순서를 거꾸로 만든다.
console.log(arr);   // [ 3, 2, 1 ] // 'reverse'메서드는 기존의 배열을 변형시킨다.


//
arr = [0, 1, 2];
let newArr = arr.slice(1);   // 'slice'메서드는 parameter의 index에서 배열을 자른다. //
                     // 'slice'메서드의 parameter값은 index번호 이다.
console.log(newArr);   // [ 1, 2 ]
console.log(arr);   // [ 0, 1, 2 ] // 'slice'메서드는 새로운 배열을 만드는것이지 기존의 배열을 변형시키지
               // 않는다.


//
arr = [0, 7, 8, 5];
arr.splice(1, 2, 1, 2, 3, 4);   // splice( indexA 선택, indexB 선택, 넣을 값. 갯수 마음대로 )
                        // index A~B의값을 잘라내고 parameter값을 추가한다.
console.log(arr);   // [ 0, 1, 2, 3, 4, 5 ]


//
arr = [3, 1, 2];
arr.sort();
console.log(arr);   // [ 1, 2, 3 ]

arr = [8, 11, 21, 9];
arr.sort();
console.log(arr); // [ 11, 21, 8, 9 ]

arr.sort((a, b) => a - b);
console.log(arr); // [ 8, 9, 11, 21 ]

arr.sort((a, b) => b - a);
console.log(arr); // [ 21, 11, 9, 8 ]

arr = [3, 1, 2];
arr.sort((a, b) => b - a);   // [문법] parameter값에 '(a, b) => b - a'를 넣어주면 내림차수로
                     // 정렬된다.
console.log(arr);   // [ 3, 2, 1 ]


// traversing
arr = [];
arr[0] = 'a';
arr[1] = 'b';
arr[3] = 'c';
arr[6] = 'd';


for(let i=0; i<arr.length; i++)
   console.log(arr[i]);
/*
 * a b undefined c undefined undefined d
 */


for(let item of arr)   // iterable객체는 'for'문 안에 'of'를 쓸 수 있다.
   console.log(item);
/*
 * a b undefined c undefined undefined d
 */

let fruits = ['apple', 'orange', 'pear'];

for(let item in fruits)
   console.log(item);   // 0, 1, 2 // 객체의 Key를 읽는다.

for(let idx in fruits)
   console.log(`${fruits[idx]}`);   // apple, orange, pear // 객체의 값을 읽는다.


function print(e){
   console.log(e);
}

function print2(e, i){
   console.log(`${i}: ${e}`);
}

function negate(e, i, arr){
   arr[i] = -e;
}

arr = [1, 2];
arr.forEach(print);   // 1, 2 // 'forEach'메서드는 element값을 파악한다.
arr.forEach(print2);   // 0: 1, 1: 2 // index도 파악한다.

arr.forEach(negate);   // 배열객체 음수화.
console.log(arr);   // [ -1, -2 ]


//
let group = {
      title: 'art',
      students: ['winston', 'ucal', 'martha'],
      showList(){
         this.students.forEach( // this는 메소드를 호출하는 시점에 결정된다.
            student => console.log(this.title, student)   
         );
      }
}

group.showList();
/*
art winston
art ucal
art martha
*/


//
let matrix = [
   [1, 2],
   [3, 4]
];

// 배열 객체에 있는 값들을  serializing 하는 방법
// 객체를 문자열 형태로 변화 시키는 것은 serializing이라고 부른다.
arr = [1, 2, 3];
console.log(arr);   // [ 1, 2, 3 ]
console.log(arr.toString()); // 1, 2, 3   // toString()은 배열안의 값 하나하나를 읽어, String값으로 바꿔주고있다.
console.log(String(arr));	 // 1, 2, 3

console.log([] + 1);	 // 1
console.log([1] + 1);	 // 11
console.log([1, 2] + 1); // 1, 21

for(let item in fruits){
		let num = Number(item);
	   console.log(num+1);
}