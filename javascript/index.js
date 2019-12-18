$(document).ready(function () { //Ensures page is loaded correctly before being able to execute any js code



    sessionStorage.setItem('loginAcces', 'false'); //Data used to check if you are logged in or not, (false by default) 
    var checkData = sessionStorage.getItem('checkFailed'); //Gets data from sessionstorage, used to check if you failed to access.
    if (checkData == 'true') { //if you failed acces
        $.notify("Venligst login", {
            className: "info",
            position: "bottom center"
        });
        var checkNotifcation = sessionStorage.setItem('checkFailed', 'false'); //After notification is played, reset. 
    }

    //localStorage save username and password for GITHUB version
    $('#loginUserFormButton').click(function () {
        var inputUsername = $("#UsernameField").val();
        var inputPassword = $("#PasswordField").val();
        var localUsername = localStorage.getItem('username');
        var localPassword = localStorage.getItem('password');

        if (inputUsername.length == 0 || inputPassword.length == 0) {
            $("#UsernameField").notify("Udfyld begge felter", {
                className: "warn",
                position: "right middle"
            });
        } else if (inputUsername == localUsername && inputPassword == localPassword) {
            window.location.href = "home.html";
            sessionStorage.setItem('loginAcces', 'true');

        } else {
            $("#UsernameField").notify("Ugyldigt brugernavn eller adgangskode", {
                className: "error",
                position: "right middle"
            });
        }
    });

    $("#createUserPageButton").click(function () { //Function call on button click
        window.location.href = "opret.html"; //Switch to login page
    });

});
