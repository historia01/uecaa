const username = "admin";
const password = "admin";
let loggedIn = 0;

function hideLoginPrompt() {
    var temporalLog = localStorage.getItem('_temporalLog');
    if (temporalLog === '1') {
        var temporalContent = $('.content');
        var loginPrompt = document.querySelector('.loginPrompt');
        loginPrompt.style.display = 'none';
        $('.content').css('display', 'unset');
    }
}

$(document).ready(function() {
    loggedIn = localStorage.getItem('_temporalLog');
    hideLoginPrompt();
    $(".loginButton").click(function(){
        console.log("Trying to Verify credentials...")
        let loggedIn = localStorage.getItem('_temporalLog');
        let user_field = $("#floatingInput").val();
        let pass_field = $("#floatingPassword").val();
        let alert = $(".alert");
        if(user_field == username && pass_field == password){
            $(".loginPrompt").css("display", "none");
            $('.content').css('display', 'unset');
            console.log("Correct Password");
            localStorage.setItem('_temporalLog', '1');

        } else {
            $("#floatingInput").addClass("is-invalid");
            $("#floatingPassword").addClass("is-invalid");
            $(".invalid-feedback").css("display", "unset")
        }
    });
    $(".sessionStop").click(function(){
        localStorage.setItem('_temporalLog', '0');
        location.reload();
    });
});