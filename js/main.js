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

//Toggle class on and off
newb.forEach( (btClickEv,_,buttons) =>  {
  btClickEv.onclick = () =>
    buttons.forEach(bt=>
      {
        if(window.innerWidth < 768) {
        document.querySelector("#desc span").textContent = btClickEv.textContent
      } else document.querySelector("#desc span").textContent = ""
      bt.classList.toggle('on',bt===btClickEv)
    })
      
})

//Changes text when window's width is below 768px
function append () {
  if(window.innerWidth < 768) {
    var arSizes = ["Small", "Medium", "Large", "X-Large", "XX-Large"]
     newb.forEach( (button, index)=>button.textContent=arSizes[index]
     )
  } 
}

window.addEventListener('resize', append())

//Appends 1-30 to the dropdown list
var select = document.querySelector(".quan")
var contents

for(var i=1; i<=30;i++) {
  contents+= "<option>" + i + "</option>"
}

select.innerHTML = contents