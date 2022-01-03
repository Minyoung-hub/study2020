//function declaration
function greet(){
   console.log("hello");
}//선언이라 세미콜론 안 붙음

greet();

//function expression
let salute = function(){
   console.log("hello I am salute");
};

salute();

let sayHello = function(user, greeting){
   return `${greeting}, ${user}`
};

console.log(sayHello("rebecca", "hello"));
console.log(sayHello()); // undefined, undefined
const sayHi = function(){
   console.log("Hi");
};
console.log(sayHi()); // Hi undefined
const say = sayHi;
say(); // Hi

sayHello = sayHi;
console.log(sayHello() + "123"); // Hi undefined123

let compliment = function(user, greeting){
   const phrase = greeting + ", " + user + ".";
   
   return function() {
      console.log(phrase);
   }
}

let compliment2 = compliment("madonna", "good morning");
console.log(compliment2); // [Function]
compliment("madonna", "good morning");
console.log("---");
console.log(compliment2());// good morning, madonna. undefined
console.log("---");
compliment2(); // good morning, madonna.

(function(user) {// 이름이 몸체가 될 수 있다.(무명 = 1회용)
   console.log("earth, " + user); // earth, hoo
})("hoo");

let myFn = function(fn) {
   const result = fn();
   console.log(result);
};

myFn(function(){
   return "moon";
}); // moon

let argFn = function(){
   return "star";
};
console.log(argFn()); // star
myFn(argFn); // star

// Function()
let add = new Function("a", "b", "return (a) + b");// 파라미터 모두 스트링 마지막은 몸체
console.log(add(1, 2)); // 3
console.log(add("1", "2")); // 12
console.log(typeof add); //function
console.log(typeof add()); //number

//파라미터 기본값 지정
let showMsg = function(from="o", msg="no message."){
   console.log(`${from}: ${msg}`);
};

showMsg(); // o: no message.
showMsg(null, "zz"); // null: zz
showMsg(undefined, "zz"); // o: zz
showMsg("ari"); // ari: no message.
showMsg("ari", "gato"); // ari: gato

//펑션만들어서 원하는 계산하기 피연산자 2개 연산자 2개 넘기기 기본값 더하기