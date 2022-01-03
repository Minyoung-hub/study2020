/* 
 * 자바스크립트의 데이터 타입은 크게 2가지 기본타입, 객체 
 * 자바 스크립트의 기본타입은 
 * 스트링, 넘버, 빅인트, 불리언, 널, 언디파인드, 심볼 이렇게 7가지가 있고 나머지는 객체이다.
 */

/** string **/
let foo = "I am a string";
foo = 'So am I';
foo = `back tick`;
console.log(foo);

foo = 'He said "Javascript is awesome"';
foo = "He said \"Javascript is awesome\"";
console.log(foo);

/** number **/
foo = 100;
foo = 100.10;
foo = 0.10;
// 넘버타입은 8바이트의 공간을 잡고 쓴다.

console.log(1 / 0); // Infinity
console.log('a' / 1); // NaN도 값이다.
		
foo = NaN; // NaN이 값이라는 증거!
console.log(isNaN(foo));
console.log(1 == 1);
console.log(foo == NaN); // 특별한 값이라 equal 연산자가 못알아들음 그래서 isNaN함수로 써줘야함.

foo = 1;
console.log(isFinite(foo)); // 숫자타입인지 확인한다.
foo = 'hello';
console.log(isFinite(foo));

// parseInt는 문자가 오는 순간 멈춰버린다.
foo = '100px12';
console.log(parseInt(foo));
foo = '+1';
console.log(parseInt(foo));
foo = '-1';
console.log(parseInt(foo));
foo = '...31';
console.log(parseInt(foo));
foo = '010-1234-5678';
console.log(parseInt(foo));
foo = '801212-11147896';
console.log(parseInt(foo));

foo = '12.6';
console.log(parseInt(foo));
console.log(parseFloat(foo)); // string을 실수 값으로 읽는다.
console.log(Number(foo)); 
console.log(+foo); // 숫자가 써있는 string값 앞에 +연산자를 붙여주면 숫자로 바꿀 수 있다.

/** bigint **/
// foo = 1n;

/** boolean **/
const okay = true;
const fail = false;

/** null: nothing, empty, unknown **/
let val = null;

/** undefined: 값이 할당된 적이 없다. 존재하지 않는다. **/
let val2;
console.log(val2);
val2 = undefined;

/** typeof **/
console.log(typeof 'a'); // string
console.log(typeof 3); // number
// console.log(typeof 1n); // bigint
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof foo); // bigint
console.log(typeof meh); // undefined

console.log(typeof function(){}); // function(object)
console.log(typeof {}); // object(객체)
console.log(typeof []); // object(배열 객체)
console.log(typeof Symbol('a')); // symbol타입의 값

/** casting **/
val = true;
val = String(val);
console.log(typeof val); // string

val = '6' / '2';
console.log(val); // 3

val = false / true;
console.log(val); // 0

val = Number(val);
console.log(typeof val); // number

console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(true)); // 1
console.log(Number('1')); // 1
console.log(Number('a')); // NaN
console.log(Number(' ')); // 0
console.log(Number('')); // 0

console.log(Boolean(-1)); // true
console.log(Boolean(1)); // true
console.log(Boolean('a')); // true
console.log(Boolean('0')); // true
console.log(Boolean(0)); // false
console.log(Boolean(' ')); // true
console.log(Boolean('')); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false