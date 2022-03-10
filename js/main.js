
// To append 1 to 30 to the select 
$(document).ready(function(){
    var select = $(".quan");
    for (i=1;i<=30;i++){
        select.append($('<option></option>').val(i).html(i))
    }

   

    //Changing background images
    const thumbnails = document.querySelectorAll(".view > div");

    const setBackground = function(event) {
    const mainImage = document.getElementById("slider");
        if (event.target && event.target.dataset.image) {
          mainImage.style.backgroundImage = `url(${event.target.dataset.image})`;
        }
    }

    for(const thumbnail of thumbnails) {
      thumbnail.addEventListener("click", setBackground);
    }

  // Changing the option to buttons
    $(".sizes option").unwrap().each(function() {
      var btn = $('<button class = "btn btn-option">' + $(this).text() + '</button>')
      $(this).replaceWith(btn)
  })
          
  $(document).on('click', '.btn-option', function() {
    var text = $(this).text()
    alert(text)
    $(".btn-option").removeClass("on");
    $(this).addClass("on");

    var innerWidth = $("body").innerWidth()
    if(innerWidth < 768) {

      
      if(text === "S") {
        $("#desc span").text("Small")
      } else if (text === "M") {
        $("#desc span").text("Medium")
      } else if (text === "L") {
        $("#desc span").text("Large")
      } else if (text === "XL") {
        $("#desc span").text("X-Large")
      } else if (text === "XXL") {
        $("#desc span").text("XX-Large")
      }
    } else {
      $("desc span").remove()
    }
    
  })
});
