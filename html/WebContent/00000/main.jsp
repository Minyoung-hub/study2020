<%@ page language='java' contentType='text/html; charset=UTF-8'
	pageEncoding='UTF-8'%>
<%@ taglib prefix='c' uri='http://java.sun.com/jsp/jstl/core'%>
<!DOCTYPE html>
<html lang="ko">
<head>
<title>UMS</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet"
	href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script
	src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css" />
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"></script>
<script>
	function alert_ok() {
		swal("성공", "사용자가 추가 되었습니다.", "success");
	}

	function alert_cancel() {
		swal("취소", "취소 되었습니다.", "error");
	}

	function alert_end() {
		swal({
			title : "종료하시겠습니까?",
			type : "warning",
			showCancelButton : true,
			cancelButtonText : "아니오",
			confirmButtonText : "네",
			closeOnConfirm : false
		}, function() {
			swal("종료", "시스템이 종료됩니다.");
		});
	}

	function alert_modify() {
		swal({
			title : "수정하시겠습니까?",
			type : "warning",
			showCancelButton : true,
			cancelButtonText : "아니오",
			confirmButtonText : "네",
			closeOnConfirm : false
		}, function() {
			swal("성공", "수정이 완료되었습니다.", "success");
		});
	}

	function alert_delete() {
		swal({
			title : "삭제하시겠습니까?",
			type : "warning",
			showCancelButton : true,
			cancelButtonText : "아니오",
			confirmButtonText : "네",
			closeOnConfirm : false
		}, function() {
			swal("성공", "삭제가 완료되었습니다.", "success");
		});
	}
</script>
<style>
th, td, h1 {
	text-align: center;
}

.off {
	float: right;
	margin: 20px;
}
</style>
</head>
<body>
	<div class='container'>
			<div class='off'>
				<button type='button' class='btn btn-default' onClick='alert_end()'>
					<span class='glyphicon glyphicon-off'></span>
				</button>
			</div>
			<div class='jumbotron'>
				<h1>UMS</h1>
			</div>

			<h2>사용자 목록</h2>
			<table class="table table-hover">
				<thead>
					<tr>
						<th class='col-md-2'>번호</th>
						<th class='col-md-5'>이름</th>
						<th class='col-md-5'>날짜</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
				</tbody>
			</table>
			
			<button class='btn btn-success' data-target='#add'
			data-toggle='modal'>
			<span class='glyphicon glyphicon-plus'> 추가</span>
		</button>
		<button class='btn btn-warning' data-target='#modify'
			data-toggle='modal'>
			<span class='glyphicon glyphicon-pencil'> 수정</span>
		</button>
		<button type='button' class='btn btn-danger' onClick='alert_delete()'>
			<span class='glyphicon glyphicon-remove'> 삭제</span>
		</button>

		<form>
			<div class='modal fade' id='add'>
				<div class='modal-dialog modal-lg'>
					<div class='modal-content'>
						<div class='modal-header'>
							<button type='button' class='close' data-dismiss='modal'
								onClick='alert_cancel()'>&times;</button>
							<h4 class='modal-title'>등록할 사용자 이름을 입력해주세요.</h4>
						</div>
						<div class='modal-body'>
							<input type='text' name='addUser' value='' class='form-control' />
						</div>
						<div class='modal-footer'>
							<button type='button' class='btn btn-info' data-dismiss='modal'
								onClick='alert_ok()'>확인</button>
						</div>
					</div>
				</div>
			</div>
			
			<div class='modal fade' id='modify'>
				<div class='modal-dialog modal-lg'>
					<div class='modal-content'>
						<div class='modal-header'>
							<button type='button' class='close' data-dismiss='modal'
								onClick='alert_cancel()'>&times;</button>
							<h4 class='modal-title'>수정할 사용자 이름을 입력해주세요.</h4>
						</div>
						<div class='modal-body'>
							<input type='text' class='form-control' />
						</div>
						<div class='modal-footer'>
							<button type='button' class='btn btn-info' data-dismiss='modal'
								onClick='alert_modify()'>확인</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</body>
</html>