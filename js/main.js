// To append 1 to 30 to the select 
$(document).ready(function(){
    var select = $(".quan");
    for (i=1;i<=30;i++){
        select.append($('<option></option>').val(i).html(i))
    }
});

//To change Images without the use of inline CSS, hopefully one day I will learn a better method
function changeImage () {
    var mainImage = document.getElementById("slider");
    mainImage.style.backgroundImage = "url('./images/gallery-3.jpg')";
}

function changeImage1 () {
    var mainImage = document.getElementById("slider");
    mainImage.style.backgroundImage = "url('./images/gallery-1.jpg')";
}

function changeImage2 () {
    var mainImage = document.getElementById("slider");
    mainImage.style.backgroundImage = "url('./images/gallery-2.jpg')";
}

function changeImage3 () {
    var mainImage = document.getElementById("slider");
    mainImage.style.backgroundImage = "url('./images/gallery-4.jpg')";
}