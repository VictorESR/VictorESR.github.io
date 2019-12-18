$(document).ready(function () { //Ensures page is loaded correctly before being able to execute any js code

    sessionStorage.setItem('loginAcces', 'false'); //Data used to check if you are logged in or not, (false by default) 




 //localStorage save username and password for GITHUB version
    $('#createUserFormButton').click(function () {
        var inputUsername = $("#UsernameField").val();
        var inputPassword = $("#PasswordField").val();

        if (inputUsername.length == 0 || inputPassword.length == 0) {
            $("#UsernameField").notify("Udfyld begge felter", {
                className: "warn",
                position: "right middle"
            });
        } else {
            localStorage.setItem("username", inputUsername);
            localStorage.setItem("password", inputPassword);
            $("#createUserFormButton").notify("Bruger oprettet", {
                className: "success",
                position: "bottom center"
            });
            $("#UsernameField").val("");
            $("#PasswordField").val("");
        }


    });

    $("#loginPageButton").click(function () { //Function call on button click
        window.location.href = "index.html"; //Switch to login page
    });

});
