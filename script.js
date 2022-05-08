var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gotti");
var button = document.querySelector(".manifest");

function eminem(){
     body.style.background
  = "linear-gradient(to right,"+ color1.value + ","+ color2.value + ")";
  css.textContent = body.style.background + " ; "
}


function randomColor(){
var color = "#";
for(var i=0; i<6; i++){
color += Math.floor(Math.random() * 10);
}
return color;
}

function setColor(){
color1.value = randomColor();
color2.value = randomColor();
eminem();
}

button.addEventListener("click",setColor);

color1.addEventListener("input",eminem);

color2.addEventListener("input", eminem);
