var loader = document.querySelector(".loader")
var content = document.querySelector(".content")


//Sleep
function Sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

window.addEventListener("load", sessionLoadPage);

//PageLoader
async function sessionLoadPage() {
  if(!sessionStorage.getItem("pageWasLoaded")) {
      loader.classList.add("appear");
      await Sleep(3000);
      loader.classList.add("disappear");
      await Sleep(100);
      content.classList.add("appear");
      sessionStorage.setItem("pageWasLoaded", true);
  }
  else if (sessionStorage.getItem("pageWasLoaded")) {
      await Sleep(2000);
      loader.classList.add("disappear");
      await Sleep(100);
      content.classList.add("appear");
  }
}

//Darkmode & Lightmode
var body = document.body;
var modemenu = document.querySelector(".cardmode");
var bg = document.querySelector(".background");
var lnk = document.querySelector(".navlink.lnk1");
var lnk1 = document.querySelector(".navlink.lnk2");
var cards = document.querySelector(".card.cardpw");
var cards1 = document.querySelector(".card.cardmode");
var username = document.querySelector(".username");
var mail = document.querySelector(".mail");
var pw = document.querySelector(".pw");
var pwrep = document.querySelector(".pw-rep");

modemenu.addEventListener("click", function(){
  modemenu.classList.toggle("open");
  body.classList.toggle("body-light");
  bg.classList.toggle("background-light");
  lnk.classList.toggle("lnk-light");
  lnk1.classList.toggle("lnk-light");
  cards.classList.toggle("card-light");
  cards1.classList.toggle("card-light");
  
  mail.classList.toggle("mail-light");
  pw.classList.toggle("pw-light");

  username.classList.toggle("username-light");
  pwrep.classList.toggle("pw-rep-light");
});


