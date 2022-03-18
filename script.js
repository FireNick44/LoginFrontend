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
var lnk = document.querySelector(".navlink.lnk1");
var lnk1 = document.querySelector(".navlink.lnk2");
var cards = document.querySelector(".card.cardpw");
var cards1 = document.querySelector(".card.cardmode");
var body = document.body;
var username = document.querySelector(".username");
var pwrep = document.querySelector(".pw-rep");
var mail = document.querySelector(".mail");
var pw = document.querySelector(".pw");

modemenu.addEventListener("click", function(){

  modemenu.classList.toggle("open");
  bg.classList.toggle("background-light");
  cards.classList.toggle("card-light");
  cards1.classList.toggle("card-light");
  body.classList.toggle("body-light");
  mail.classList.toggle("mail-light");
  pw.classList.toggle("pw-light");
  pwrep.classList.toggle("pw-rep-light");
  username.classList.toggle("username-light");
  lnk.classList.toggle("lnk-light");
  lnk1.classList.toggle("lnk-light");

});