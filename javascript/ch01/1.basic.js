'use strict' // 코드를 엄격모드로 실행한다.(코드를 엄격하게 검사한다.)
/* 여러줄 주석 */
// 한줄짜리 주석
/** commend **/ //얘도 주석인데 자바스크립트 API문서를 만들 때 사용함 
// 자바스크립트 API 문서 내용

/** 변수명 명명 규칙 **/
const userName = 'jhon'; //camel case 객체지향 좋아하는 사람들이 이거좋아함
const userName2 = 'jhon';
// const 2userName = 'jhon';
const user_name = 'jhon'; //snake case 절차지향을 좋아하는 사람들이 이거 좋아함
const $userName = 'jhon'; //자바스크립트에서 변수명에 특수문자를 포함할 수 있다.($,_)
/*
 * 보통 변수명 앞에 달러가 붙은 변수는 특별한 변수라는 것을 의미한다.
 * 보통 달러가 포함이 된 변수에는 제이쿼리 객체를 담는다.
 * 자바 스크립트에서는 변수명에는 문자, 숫자, 특수문자($, _)이다. 하지만 숫자는 맨 처음에 나올 수 없다. 
 * 두번째 이후부터만 쓸 수 있다. 그래서 변수명의 첫글자는 문자거나 특수문자여야 한다.
 */


const a = 1;
const b = function() {}; // 함수도 하나의 값이다.
const c = b(a); // b가 리턴한 값을 c가 받는다.

let y;
y = 1;
y = 2;

const z = 1;
// z = 2;  const변수는 상수가 된다. 그래서 값을 바꿀 수 없다.

/*
 * let은 변수만 선언해도 괜찮지만 const는 선언과 동시에 초기 값을 꼭 줘야한다.
 * const 값을 고정, let 값 변화 가능
 */

console.log('a');
console.log('b')
/*
 *  자바 스크립트에서는 명령문 끝에 세미콜론을 생략할 수 있는데, 그때는 꼭 한줄에 하나의 명령문만 써야한다.
 *  왜냐하면 명령문을 한줄 전체로 취급하기 떄문이다.
 */