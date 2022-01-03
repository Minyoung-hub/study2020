<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<script src="http://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script>
   $(() => {
      $('#chkBtn').click(() => {
         $.ajax({
        	method: 'post',
            data: {"userId": $("#userId").val()},
            success: review => {
               if(review.overlap == true) {
                  $("#msg").html("사용중인 아이디입니다. <br>" 
                		  + "추천하는" + review.proposeId 
                		  + "를 사용하시겠습니까?");
                  $("#yesBtn").show();
                  $('#yesBtn').click(() => $('#userId').val(review.proposeId));
                  $('#noBtn').text('아니오'); 
               } else {
                  $("#msg").text('사용가능한 아이디입니다.');
                  $("#yesBtn").hide();
                  $('#noBtn').text('확인');
               }
            },
            complete: () => $("#msgModal").modal("show")
         });
      });
   });
</script>
<style>
form, button {
	margin: 5px;
}
</style>

<div class="container">
   <form>
      <label>아이디: <input id="userId" type="text" /></label>
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
         	<button type="button" class= 'close' id='yesBtn' data-dismiss="modal">예</button>
         	<button type="button" class= 'close' id='noBtn' data-dismiss="modal">확인</button>
         </div>
      </div>
   </div>
</div>