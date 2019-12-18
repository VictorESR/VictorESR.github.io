 $(document).ready(function () { //Ensures page is loaded correctly before being able to execute any js code
     
     var checkData = sessionStorage.getItem('loginAcces'); //Gets data from sessionstorage, used to check if you logged in or not.
     if (checkData != 'true') { //if you are not logged in do this:
         window.location.href = "index.html"; //redirect to login page
         var checkNotifcation = sessionStorage.setItem('checkFailed', 'true'); //Data used to tell (notification) if access was denied
     } 
 }); 
