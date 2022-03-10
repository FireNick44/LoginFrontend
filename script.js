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

var menu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');
  menu;
})

var test1 = true;

function menu(){
  if(test1 == true){
    test4.classList.add("disappear");
    test4.classList.remove("appear")
    test1 = false;
    console.log("dwadawd");
  }
  else if(test1 == false){
    test4.classList.add("appear");
    test4.classList.remove("disappear")
    test1 = true;
  }
}