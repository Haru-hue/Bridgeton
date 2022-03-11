//Change image on click
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

//unwraps the select option
function unwrap(elems) {
  elems = 'length' in elems ? elems : [elems];
  for (var i = 0; i < elems.length; i++) {
      var elem        = elems[i];
      var parent      = elem.parentNode;
      var grandparent = parent.parentNode;

      grandparent.insertBefore(elem, parent);

      if (parent.children.length === 0) 
          grandparent.removeChild(parent);
  }
}

var option = document.querySelectorAll(".sizes option")   
unwrap(option);

//Making the unwrapped class buttons
var button = document.querySelectorAll("#buttonsize option")
button.forEach(item => { 
  let btn = document.createElement("button")
  btn.innerHTML = item.textContent
  item.parentNode.replaceChild(btn, item);
})

//Setting the attributes to the class
var newb = document.querySelectorAll("#buttonsize button")
for(var i = 0;i < newb.length; ++i) {
  newb[i].setAttribute("class", "btn btn-option")
}

newb.forEach( (btClickEv,_,buttons) =>  {
  btClickEv.onclick = () =>
    buttons.forEach(bt=>bt.classList.toggle('on',bt===btClickEv))
})

function append () {
  if(window.innerWidth < 768) {
    var arSizes = ["Small", "Medium", "Large", "X-Large", "Large", "XX-Large"]
    for(var i = 0; i <= arSizes.length; i++) {
      newb[i].textContent = arSizes[i]
    }
  } 
}

window.addEventListener('resize', append())

var select = document.querySelector(".quan")
var contents

for(var i=1; i<=30;i++) {
  contents+= "<option>" + i + "</option>"
}

select.innerHTML = contents

