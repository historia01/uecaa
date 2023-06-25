const username = "admin";
const password = "admin";
let loggedIn = 0;

$(document).ready(function() {
    var localsession = localStorage.getItem('_temporalLog');
    var loginPrompt = document.querySelector('.loginPrompt');
    loginPrompt.style.display = 'none';
    $('.content').css('display', 'unset');
    if(localsession == "1"){
        $(".sessionStop").html("Admin - Cerrar Sesion");
        loggedIn = 1;
    } else {
        $(".sessionStop").html("Inicia Sesion")
    }
    $(".sessionStop").click(function(){
        if(loggedIn == 1){
            localStorage.setItem('_temporalLog', '0');
            location.reload();
        } else {
            var temporalContent = $('.content');
            var loginPrompt = document.querySelector('.loginPrompt');
            loginPrompt.style.display = 'unset';
            $('.content').css('display', 'none');
        }
    });
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
});