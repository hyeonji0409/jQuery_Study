$(document).ready(function() {
    $('#chatForm').on('submit', function(){
        event.preventDefault();
        // message 입력하고 [전송] 버튼 누르면 (엔터쳐도 됨)
        // chatBox에 보낸 메시지 추가
        if($('#message').val() != ""){
            $('#chatBox').append('<div><div class="msgBox send">' +
                                                $('#message').val() + '</div></div><br>');
        }

        $("#message").val('')

        getResponse();

    });

    function getResponse() {
        let result = "저는 챗봇입니다.안녕하세요 질문을 길게 하고 있습니다. 어떻게 출력되나요안녕하세요 질문을 길게 하고 있습니다. 어떻게 출력되나요안녕하세요 질문을 길게 하고 있습니다. 어떻게 출력되나요안녕하세요 질문을 길게 하고 있습니다. 어떻게 출력되나요"

        $('#chatBox').append('챗봇<br><div><div class="msgBox receive">' +
                                result + '</div></div><br>');

        $("#chatBox").scrollTop($("#chatBox").prop("scrollHeight"));
    }

});