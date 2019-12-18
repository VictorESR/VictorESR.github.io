 $(document).ready(function () { //Ensures page is loaded correctly before being able to execute any js code
     
     var checkData = sessionStorage.getItem('loginAcces'); //Gets data from sessionstorage, used to check if you logged in or not.
     if (checkData != 'true') { //if you are not logged in do this:
         window.location.href = "index.html"; //redirect to login page
         var checkNotifcation = sessionStorage.setItem('checkFailed', 'true'); //Data used to tell (notification) if access was denied
     }
     
     UnityLoader.instantiate("unityContainer", "Build/V1.1.json");

     
     var windowWidth = $(window).width(); //The width of the screen, used to place the webgl in the middle
     var placementCalc = (windowWidth - 1280) / 2 + "px"; //Calculation of placement
     $("#unityContainer").css("left", placementCalc); //Applying css using JQUERY
     $("#unityContainer").css("top", "20px");
 });
