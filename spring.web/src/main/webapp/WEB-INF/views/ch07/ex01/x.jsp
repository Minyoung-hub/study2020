<%@ page language='java' contentType='text/html; charset=UTF-8' pageEncoding='UTF-8'%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script>
function showDate() {
	let date = new Date();
	$('#currentTime').text(
		`\${date.getFullYear()}/\${(date.getMonth() + 1)}/\${date.getDate()}\
		\${date.getHours()}:\${date.getMinutes()}:\${date.getSeconds()}`);
}

function listNums() {
	$.ajax({
		url: "x/listNums",
		success: nums => {
			$("ul").empty();
			$(nums).each((i, n) => $('ul').append('<li>' + n + '</li>'));
		}
	});
}

function init() {
	$('#good').click(()=>{
		$.ajax({
			url : 'x/good',
			success : cnt => {
				$("#msg").text(cnt);
				listNums();
			},
		});
	});
	
	$('#badWithX').click(()=>{
		$.ajax({
			url : 'x/badWithX',
			success : cnt => {
				$("#msg").text(cnt);
				listNums();
			},
			error: (a, b, err) => $("#msg").text(err)
		});
	});

	$('#badNoX').click(()=>{
		$.ajax({
			url : 'x/badNoX',
			success : cnt => {
				$("#msg").text(cnt);
				listNums();
			},
			error: (a, b, err) => $("#msg").text(err)
		});
	});
	
	$('#badService').click(()=>{
		$.ajax({
			url : 'x/badService',
			success : cnt => {
				$("#msg").text(cnt);
				listNums();
			},
			error: (a, b, err) => $("#msg").text(err)
		});
	});
	
	$('#listNums').click(()=> listNums());
}

$(()=> {
	showDate();
	init();
});
</script>

<p id = 'currentTime'></p>

<button type="button" id="good">Good</button>
<button type="button" id="badWithX">badWithX</button>
<button type="button" id="badNoX">badNoX</button>
<button type="button" id="badService">badService</button>
<button type="button" id="listNums">listNums</button>

<p id = 'msg'></p>

<ul></ul>