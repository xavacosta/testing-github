var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function randomHex() {
	var hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
	var hex = "#"
	for(var i=0; i < 6;i++) {
		index = Math.floor(Math.random() * hexValues.length); //random goes from 0 - .999
		hex += hexValues[index];
	}
	return hex;
}

function randomColor() {
	color1.setAttribute("value", randomHex());
	color2.setAttribute("value", randomHex());
	setGradient();
}

function initialize() {
	color1.setAttribute("value", "#FF0000"); //red in hex. This method only accepts hex.
	color2.setAttribute("value", "#FFFF00"); //yellow
	setGradient();
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


initialize();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColor);