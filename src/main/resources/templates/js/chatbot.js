/* chatbot.js */

$(document).ready(function(){

    // 챗봇에게 질문하고 응답받기
    // message 입력하고 전송버튼 눌렀을 때
    $('#chatForm').on('submit', function(){
        event.preventDefault();

        // message 입력하고 [전송] 누르면 chatBox에 보낸 메시지 추가하기
        if($('#message').val() != "") {
            $('#chatBox').append('<div class="msgBox send"><span>'
                                + $('#message').val() + '</span></div><br>');
        }

        $('#message').val('');

        // 응답 받는 함수 호출
        getResponse();
    }); // charForm submit

    // 서버로부터 받는 메시지(가정)
    function getResponse() {
        var result = "저는 챗봇입니다.";

        $('#chatBox').append('<div class="msgBox receive"><br>챗봇<br><span>'
        + result + '</span></div><br>');

        // 스크롤 해서 올리기
        $('chatBox').scrollTop($('#chatBox').prop("scrollHegiht"));
    }

}); // ready 종료