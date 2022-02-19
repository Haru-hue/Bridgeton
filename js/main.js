// To append 1 to 30 to the select 
$(document).ready(function(){
    var select = $(".quan");
    for (i=1;i<=30;i++){
        select.append($('<option></option>').val(i).html(i))
    }

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

    $(".sizes option").unwrap().each(function() {
      var btn = $('<button class = "btn btn-option">' + $(this).text() + '</button>')
      $(this).replaceWith(btn)
  })

  $(document).on('click', '.btn-option', function() {
    $(".btn-option").removeClass("on");
    $(this).addClass("on");
})
});



