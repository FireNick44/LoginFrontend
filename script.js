var loader = document.querySelector(".loader")
var content = document.querySelector(".content")

window.addEventListener("load", vanish);

function Sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function vanish() {
  await Sleep(2000);
  loader.classList.add("disappear");
  await Sleep(100);
  content.classList.add("appear");
}

var ModeMenu = document.querySelector(".cardmode");
var BG = document.querySelector(".background")


ModeMenu.addEventListener("click", function(){
  ModeMenu.classList.toggle("open");
  BG.classList.toggle("background2")
}) 