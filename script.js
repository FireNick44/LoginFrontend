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
var BG = document.querySelector(".background");
var Cards = document.querySelector(".card.cardpw");
var Cards1 = document.querySelector(".card.cardmode");
var Body = document.body
var PW = document.querySelector(".pw");
var Mail = document.querySelector(".mail");
var Nav = document.querySelector(".navlink");
var Nav1 = document.querySelector(".navlink1");

ModeMenu.addEventListener("click", function(){
  ModeMenu.classList.toggle("open");
  BG.classList.toggle("background2")
  Cards.classList.toggle("card2");
  Cards1.classList.toggle("card2");
  Body.classList.toggle("body2");
  PW.classList.toggle("pw2");
  Mail.classList.toggle("mail2");
  Nav.classList.toggle("nav2");
  Nav1.classList.toggle("nav2");
}) 