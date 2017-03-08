var c = document.getElementById("vimage");
var xmlns = "http://www.w3.org/2000/svg";
var w = c.getBoundingClientRect().width
var h = c.getBoundingClientRect().height


function makeCircle(x,y){
    var c1 = document.createElementNS( xmlns, "circle");
    c1.setAttribute("cx",x)
    c1.setAttribute("cy",y)
    c1.setAttribute("fill","purple")
    c1.setAttribute("r","20")
    return c1;
};

var addCircle = function(event){
    //if (event.target == this) ????
        c.appendChild(makeCircle(event.offsetX,event.offsetY));
};

var changeColor = function(event){
    this.setAttribute("fill","green")
    this.addEventListener("click",remove);

};

var remove = function(event){
    c.appendChild(makeCircle(int(Math.random() * w), int(Math.random() * h)));
    c.removeChild(this);
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
