/*
function handleLogin(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let url = document.getElementById("url").value;

    console.log("w1d5 problem 13: ");
    console.log("Email: " + email);
    console.log("Password: " + password);
    console.log("URL: " + url);
}*/

$(document).ready(function () {

    $("#login-form").submit(function (event) {
        event.preventDefault();
        const email = $("#email").val();
        const password = $("#password").val();
        const url = $("#url").val();
        console.log(event);
        console.log("**** using jquery ***");
        console.log("Email: " + email);
        console.log("Password: " + password);
        console.log("Url: "+ url);
    });
});