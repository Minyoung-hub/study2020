const val = 1 + 2 * 3 / 2;

let i = 1;
console.log(++i); // 2
i = 1;
console.log(i++); // 1
console.log(i); // 2

let foo = 'hello';
let bar = 'world';
console.log(foo + ' ' + bar); // hello world

foo = 1;
bar = '2';
console.log(foo + bar); // 12

console.log(foo + Number(bar)); // 3

console.log(foo + +bar); // 3

const one = 1;
const zero = 0;
const two = 2;

// 마지막으로 읽은 값이 출력된다.
console.log(one || zero); // t or f 1
console.log(zero || one); // f or t 1
console.log(one && zero); // t and f 0
console.log(one && two); // t and t 2
console.log(two && one); // t and t 1

/* 
 * foo && doSomething(foo); 앞에서 t이면 뒤를 살펴보고 앞에서 f이면 뒤를 살펴보지 않는다.
 * foo가 t이면(문자거나 0이 아닌 숫자일 때) doSometing함수에 foo값을 넣고 뭔가를 진행시킨다.
 * bar = baz || createBar(); 앞에서 t이면 뒤를 살펴보지 않고 앞에서 f이면 뒤를 살펴본다.
 * baz가 f이면(0이면) createBar함수를 실행시킨다.
 */

// equivalent(동등한)
const baz = '1';
console.log(one == zero); // false
console.log(one != zero); // true
console.log(one == baz); // true

// identical(같은)
console.log(one === baz); // false
console.log(one !== baz); // true
console.log(one === parseInt(baz)); // true

console.log('dog' === 'dog'); // true
console.log(1 === 1); // true
console.log({} === {}); // false
console.log(function(){} === function(){}); // false

console.log(one > two); // false
console.log(two > baz); // true
console.log(two <= baz); // false