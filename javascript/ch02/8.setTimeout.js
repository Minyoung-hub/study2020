function sayHi(){
	console.log('hello');
}

setTimeout(sayHi, 1000); // hello // 셋타임아웃이 실행되면 즉각 세이하이라는 콜백을 큐에 등록한다. 그리고 1초 뒤에 큐에서 꺼낸다.
console.log("Hi"); // Hi

//
function greet(phrase, who){ 
	console.log(phrase, who);
}

setTimeout(greet, 2000, 'hello', 'knox'); // hello knox

//
let timeId = setTimeout(() => console.log('hhii'), 1000);
console.log(timeId);
/*
Timeout {
_idleTimeout: 1000,
_idlePrev: [TimersList],
_idleNext: [Timeout],
_idleStart: 24,
_onTimeout: [Function],
_timerArgs: undefined,
_repeat: null,
_destroyed: false,
[Symbol(refed)]: true,
[Symbol(asyncId)]: 7,
[Symbol(triggerId)]: 1
}
*/

clearTimeout(timeId);
console.log(timeId);

/*
Timeout {
  _idleTimeout: -1,
  _idlePrev: null,
  _idleNext: null,
  _idleStart: 24,
  _onTimeout: null,
  _timerArgs: undefined,
  _repeat: null,
  _destroyed: true,
  [Symbol(refed)]: true,
  [Symbol(asyncId)]: 7,
  [Symbol(triggerId)]: 1
}
 */