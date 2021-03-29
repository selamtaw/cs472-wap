// problem 15

setInterval(myTimer, 1000);

function myTimer() {
    let d = new Date();
    document.getElementById("clock").innerHTML = d.toUTCString();
}