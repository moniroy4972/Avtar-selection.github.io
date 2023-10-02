// console.log("test");
var button = document.getElementById("btn").addEventListener("click", function () {
    var container = document.getElementById('container')
    var image = document.getElementById("image");
    var input = document.getElementById("input");
    if (input.value == "") { 
        image.src = "https://www.pinclipart.com/picdir/middle/200-2008697_account-customer-login-man-user-icon-login-icon.png"
    }
    // Here I Fetch APi Of Random Image Website :  https://joesch.moe/api/v1/random 

    else {
        image.src = " https://joesch.moe/api/v1/random"; 
    } 
})




