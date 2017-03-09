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
        circle = makeCircle(event.offsetX,event.offsetY)
        c.appendChild(circle);
        circle.addEventListener('click', changeColor);
};

var changeColor = function(event){
    this.setAttribute("fill","green")
    this.addEventListener("click",remove);
    event.stopPropagation();
};

var remove = function(event){
    c.appendChild(makeCircle(Math.random() * w, Math.random() * h));
    c.removeChild(this);
    event.stopPropagation();
};

var move = function(){

    var increasex = true;
    var increasey = true;

    var drawDot = function() {
        //console.log(d.width.animVal)
        //console.log(d.height.animVal)
        
        d.setAttribute("x",xcor);
        d.setAttribute("y",ycor);
        if (xcor + 20 >= w){
            increasex=false;
        }

        if (xcor - 20<= 0){
            increasex=true;
        }

        if (ycor + 20 >= h){
            increasey=false;
        }

        if (ycor - 20 <= 0){
            increasey=true;
        }

        if (increasex){
            xcor++;
        }else{
            xcor--;
        }

        if (increasey){
            ycor++;
        }else{
            ycor--;
        }  

        requestID = window.requestAnimationFrame( drawDot );

    }
    drawDot();
};


var clearSVG = function(){
    console.log("hello");
	while (c.lastChild) {
		c.removeChild(c.lastChild);
	};
}



c.addEventListener('click', addCircle);

var clear = document.getElementById( "clear-but" );
clear.addEventListener("click", clearSVG);
