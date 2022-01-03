<%@ page language='java' contentType='text/html; charset=UTF-8' pageEncoding='UTF-8'%>
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script>
$(()=> {
   $('#attachFile').change(function() {
      imgView(this)
   });
   
   $("#sendBtn").click(()=> {
      let data = new FormData($('form')[0]); // 바이너리 타입까지 모두 품을 수 있음.
      
      $.ajax({
      
    	  method : 'post',
         data : data,
         processData: false, // serialize 하지말아라. (QueryString으로 바꾸는 작업)
         contentType: false,
         success: result => { // 평범한 명령문이 있으면 블럭으로 둘러싸줘야함. 함수를 호출하는게 아니기 때문.
            if(result) $('#msg').text('전송 성공.')
         },
         error: (a, b, err) => $('#msg').text(err),
         complete: ()=> $('#msgModal').modal('show')
      });
   });
});

function imgView(input){
   if(input.files && input.files[0]){
      let reader = new FileReader();
      reader.addEventListener('load', ()=> {
         $('#preViewImg').attr('src', reader.result);
      }, false);  //load 이벤트 핸들러 등록
      
      reader.readAsDataURL(input.files[0]);
   }
}
</script>

<div class="container">
   <form>
   <input type="file" id="attachFile" name='attachFile'/>
   </form>
   <button type="button" id="sendBtn" class="button btn-default">전송</button>
   <img id="preViewImg">
</div>

<div id = "msgModal" class="modal fade">
   <div class="modal-dialog modal-sm">
      <div class="modal-content">
         <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
         </div>
         <div class="modal-body">
            <p id="msg"></p>
         </div>
         <div class="modal-footer">
            <button type="button" class="close" data-dismiss="modal">확인</button>
         </div>
      </div>
   </div>
</div>