$(document).ready(function(){

    // 시작 시 ID 입력란에 포커스 추가
    $('#id').focus();

    // input 텍스트 입력란과 비밀번호 입력란에 포커스 있을 때 색상 변경
    $('input[type="text"], input[type="password"]')
            .on('focus', function(){
                $(this).css('background', 'pink');
            });

    $('input[type="text"], input[type="password"]')
    .on('blur', function(){
        $(this).css('background', '');
    });

    // 키보드 이벤트 처리
    // 첫 번째 전화번호(hp1) 입력란에 입력값이 3개가 되면 다음 입력(hp2)로 포커스 이동
    // keyup 이벤트    
    $('#hp1')
    .on('keyup', function(){
        if($(this).val().length == 3)
            $('#hp2').focus();
    });

    // 두 번째 전화번호(hp2) 입력란에 입력값이 4개가 되면 다음 입력(hp3)로 포커스 이동
    $('#hp2')
    .on('keyup', function(){
        if($(this).val().length == 4)
            $('#hp3').focus();
    });

    // 엔터키 눌렀을 때 submit 되지 않도록 처리
    $(document).on('keydown', function(e){
        if(e.keyCode == 13) return false;
    });

    // ID 입력한 후 엔터키 눌렀을 때 비밀번호로 포커스 이동
    $('#id').on('keydown', function(e){
        // 값의 입력 여부와 상관없이 무조건 이동
      /*  if(e.keyCode == 13){
            $('#pwd').focus();
            return false;
        } */

        // ID를 입력하고 엔터키 눌렀을 때만 이동
        if($('#id').val != "" && e.keyCode == 13){
            $('#pwd').focus();
            return false;
        }
    });

    // [완료] 버튼 클릭하면 입력 유효성 확인
    $('#newMemberForm').submit(function() {
        // ID를 입력하지 않은 경우
        // 아이디를 입력하세요 경고창 출력되고, 아이디 입력란에 포커스
        // 다음 페이지로 전송되지 않도록 처리

        if($('#id').val() == ""){
            alert("아이디를 입력하세요.");
            $('#id').focus();
            return false;
        }

        // 비밀번호 입력하지 않은 경우
        // "비밀번호를 입력하세요" 경고창 출력
        // 포커스
        // 다음 페이지로 전송되지 않도록 처리
        if($('pwd').val() == ""){
            alert("비밀번호를 입력하세요");
            $('#pwd').focus();
            return false;
        }


        // 라디오 버튼 선택하지 않은 경우
        // "학년을 선택하세요" 출력
        // 다음 페이지로 전송되지 않도록 처리
        if($('input:radio[name="year"]:checked').length == 0){
            alert("학년을 입력하세요");
            return false;
        }

        // 체크박스를 선택하지 않은 경우
        // "관심분야는 1개 이상 선택하세요" 출력
        // 다음 페이지로 전송되지 않도록 처리
        if(!$(':checkbox').is(':checked')){
            alert("관심 분야는 1개 이상 선택하세요");
            return false;
        }

        // 학과를 선택하지 않은 경우
        // "학과를 선택하세요" 출력
        // 다음 페이지로 전송되지 않도록 처리
        if($('option').val() == ""){
            alert("학과를 선택해 주세요");
            return false;
        }




    }); // submit 종료
}); // ready 종료