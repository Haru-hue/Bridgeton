$(function(){
    var select = $(".quan");
    for (i=1;i<=100;i++){
        select.append($('<option></option>').val(i).html(i))
    }
});


//var num = document.getElementsByClassName("quan");

