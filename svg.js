var c = document.getElementById("vimage");
var xmlns = "http://www.w3.org/2000/svg";


function makeCircle(x,y){
    var c1 = document.createElementNS( xmlns, "circle");
    c1.setAttribute("cx",x)
    c1.setAttribute("cy",y)
    c1.setAttribute("fill","red")
    c1.setAttribute("r","20")
    return c1;
};

var addCircle = function(event){
    c.appendChild(makeCircle(event.offsetX,event.offsetY));
};

var clearSVG = function(){
    console.log("hello");
	while (c.lastChild) {
		c.removeChild(c.lastChild);
	};
}

c.addEventListener('click', addCircle);

var clear = document.getElementById( "b" );
clear.addEventListener("click", clearSVG);
