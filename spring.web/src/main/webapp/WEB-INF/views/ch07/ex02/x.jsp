<%@ page language='java' contentType='text/html; charset=UTF-8' pageEncoding='UTF-8'%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script>
function init() {
	$('#good').click(()=> {
		$.ajax({
			url: 'x/good',
			success: cnt => $("#msg").text(cnt)
		});
	});
	
	$('#bad').click(()=> {
		$.ajax({
			url: 'x/bad',
			success: cnt => $("#msg").text(cnt),
			error: (a, b, err) => $("#msg").text(err)
		});
	});
		
	$('#badWithX').click(()=> {
		$.ajax({
			url: 'x/badWithX',
			success: cnt => $("#msg").text(cnt),
			error: (a, b, err) => $("#msg").text(err)
		});
	});
}

$(init);
</script>

<button type="button" id="good" class="btn btn-default">Good</button>
<button type="button" id="bad" class="btn btn-default">Bad</button>
<button type="button" id="badWithX" class="btn btn-default">BadWithX</button>

<p id = "msg"></p>