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

var modemenu = document.querySelector(".cardmode");
var bg = document.querySelector(".background");
var cards = document.querySelector(".card.cardpw");
var cards1 = document.querySelector(".card.cardmode");
var body = document.body
var pw = document.querySelector(".pw");
var mail = document.querySelector(".mail");
var lnk = document.querySelector(".navlink");
var lnk1 = document.querySelector(".navlink1");

modemenu.addEventListener("click", function(){

  modemenu.classList.toggle("open");
  bg.classList.toggle("background-light")
  cards.classList.toggle("card-light");
  cards1.classList.toggle("card-light");
  body.classList.toggle("body2");
  pw.classList.toggle("pw2");
  mail.classList.toggle("mail2");
  lnk.classList.toggle("nav2");
  lnk1.classList.toggle("nav2");
});