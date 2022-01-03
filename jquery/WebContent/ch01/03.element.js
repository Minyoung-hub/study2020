/** $('css selector') **/
// jQuery function이 return하는 것 : collection 한개
$('#myId') // <div id = 'myId'></div>  

$('.myClass') // <div class = 'myClass'></div>

$('input[name="surname"]') // <input name= 'surname'/>

$('#contents ul.people li')
/*
<div id = 'contents'>
	<ul class='people'>
		<li></li> --이것을 호출
		<li></li> --이것을 호출
	</ul>
</div>
*/

$('a.external: first')
/* 
<a class='external'></a> --이것을 호출(first)
<a class='external'></a>
*/

$('tr:odd')
/*
<tr></tr> --이것을 호출(홀수)
<tr></tr>
<tr></tr> --이것을 호출(홀수)
*/

$('div:visible') // 화면에 출력된  div들만 골라낸다. (visible)

$('div:gt(2)') // gt(2) = greater than   2   // index번호가 2를 '초과'하는것.

/*
<div></div>
<div></div>
<div></div>
<div></div> --이것을 호출   (index번호 3)
*/

$('div:animated')

$('a[rel="thinger"]')      // rel 속성이 thinger인것         // <a rel='thinger'></a>
$('a[rel$="thinger"]')      // rel 속성이 thinger로 끝나는것      // <a rel='do-nothinger'></a>

if($('div.foo')) {}  // $('div.foo')의 값이 없더라도 객체를 return하기때문에 [] 가 나온다. 때문에 true가 된다.
if($('div.foo').length) {} //  []의 length값은 0이 return된다. 0은 false. 이 값이 0 이면 div.foo객체를 찾지 못했다는 뜻이다.

/** filtering **/
$('div.foo').has('p') // $('div.foo') 중에서 p가 있는아이들만 골라낸다. ( 2중 검색 )      
// has는 property(요소)를 골라낸다.// has는 p를 자식으로 갖고있는 div 객체를 골라낸다.
$('ul li').filter('.current') // ul, li중에서 .current가 있는것을 골라낸다.               
// filter는 class(속성)을 골라낸다. // current class가 붙어있는 li 객체들을 골라낸다.
$('ul li').not('.current') // filter와 반대기능을 한다. current class가 없는 li 객체들을 골라낸다.
// ul, li중에서 .current가 없는것을 골라낸다.
$('ul li').eq(5) // 5번째 li 객체를 골라낸다(idx는 0부터 시작한다.)
// ul, li중에서 index[5]번인것을 골라낸다.


/** form **/
$('form button')            // button   // button type만 선택.
/*
 * <form>
 *       <button>   </button>      <<-- 이것을 호출
 *       <input type='button'>
 * </form>
 */

$('form :button')            // :button   // button 계열 선택.
/*
 * <form>
 *       <button>   </button>      <<-- 이것을 호출
 *       <input type='button'>   <<-- 이것을 호출
 * </form>
 */

$('form: radio') // <input type='radio'/>
$('form: checkbox') // <input type='checkbox'/>

$('form: checked')  // '체크된'것들만 선택.
/*
<input type='checkbox'/>
<input type='radio'/>
<select>
*/

$('form: selected') // <select><option></option></select>

$('form: enabled') // form중 사용중인 것들만 선택.
$('form: disabled')  // form중 사용중이지 않은것들만 선택

$('form: file') // <input type='file'/>

$('form: input')
/*
<input type='text'/>
<textarea></textarea>
<select></select>
<button type='submit'></button>
*/
$('form: text') // <input type='text'/>

$('form: password') // <input type='password'/>

$('form input[name="gender"]:radio') // <input type='radio' name='gender'/>

$('form: reset') // <input type='reset'/>

$('form: submit') // <input type='submit'/>

/*
 * $('css selector')
 * css selector형태의 String Type을 $()안에 넣어주면
 * 해당 elements를 찾아 객체안에 담는다.
 * 그리고 .html()을 붙여 DOM으로 만들어 return한다.
 */
