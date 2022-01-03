<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<script src="http://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script>
   $(() => {
      $('#chkBtn').click(() => {
         $.ajax({
            url: "id/validate",
            data: {"loginId": $("#loginId").val()},
            success: (result) => {
               console.log(result);
               if(result.duplicated == true){
                  $("#msg").html("사용중인 아이디입니다. " + result.availableId + "를 권합니다.<br>추천 아이디를 쓰시겠습니까?");
                  $("#yes").show();
                  $('#no').text('아니요');
                  $('#yes').click(() => $('#loginId').val(result.availableId));
               }
               else{
                  $("#msg").text('사용가능한 아이디입니다.');
                  $("#yes").hide();
                  $('#no').text('확인');
            }
            },
            complete: (result) => $("#msgModal").modal("show")
         });
      });
   });
</script>
<p></p>
<div class="container">
   <form>
      <label>아이디: <input id="loginId" type="text" /></label>
      <button id="chkBtn" type="button">중복검사</button>
   </form>
</div>

<div id="msgModal" class="modal fade">
   <div class="modal-dialog modal-sm">
      <div class="modal-content">
         <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
         </div>
         <div class="modal-body">
            <p id="msg"></p>
         </div>
         <div class="modal-footer" >
         	<button type="button" id='yes' data-dismiss="modal">예</button>&npsp;
         	<button type="button" id='no' data-dismiss="modal">확인</button>
         </div>
      </div>
   </div>
</div>