<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<script src="http://code.jquery.com/jquery-3.4.1.min.js"></script>
<script>
	$(() => {
		$('#userForm').on('submit', e => {
			e.preventDefault();
			$.ajax({ // ajax통신을 하면서 데이터를 리퀘스트에 담는데 그 데이터는 form의 데이터 이다.
				url: 'user/register',
				data: $('#userForm').serialize(), // serialize -> 쿼리스트링 형태로 파라미터 값을 담아둔다.
				success: user => {
					$('p').html('다음 사용자를 저장했습니다.<br>'
							+ '이름: ' + user.name + '<br>'
							+ '나이: ' + user.age + '<br>'
							+ '가입일: ' + new Date(user.regDate).toLocalDateString());
				},
				error: (a, b, err) => $('p').text(err)
			});
		});
	});
</script>

<form id='userForm'>
	<label>이름 <input type='text' name='name'></label>
	<label>나이 <input type='number' name='age'></label>
	<label>등록일 <input type='date' name='regDate'></label>
	<button type='submit'>제출</button>
</form>
<p></p>