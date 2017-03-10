var c = document.getElementById("vimage");
var xmlns = "http://www.w3.org/2000/svg";
var w = c.getBoundingClientRect().width
var h = c.getBoundingClientRect().height
var r = 20;
var requestID;
var animate = true;

function makeCircle(x,y){
    var c1 = document.createElementNS( xmlns, "circle");
    c1.setAttribute("cx",x)
    c1.setAttribute("cy",y)
    c1.setAttribute("dx",1)
    c1.setAttribute("dy",1)
    c1.setAttribute("fill","purple")
    c1.setAttribute("r",r)
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
    c.appendChild(makeCircle(Math.random() * (w-2*r) + r, Math.random() * (h-2*r) + r));
    c.removeChild(this);
    event.stopPropagation();
};


var moveC = function(){
    if (animate){
        animate=false;
        
        var moveDot = function() {
            //console.log(d.width.animVal)
            //console.log(d.height.animVal)
            var circles = document.getElementsByTagName('circle')
            var xcor,ycor,dx,dy;
            
            for (var i = 0; i < circles.length;i++){
                circle = circles[i]
                xcor = parseInt(circle.getAttribute("cx"));
                ycor = parseInt(circle.getAttribute("cy"));
                dx = parseInt(circle.getAttribute("dx"));
                dy = parseInt(circle.getAttribute("dy"));
                
                if (xcor + r >= w){
                    dx=-1
                }

                if (xcor - r<= 0){
                    dx=1;
                }

                if (ycor + r >= h){
                    dy=-1;
                }

                if (ycor - r <= 0){
                    dy=1;
                }
                circle.setAttribute("cx",xcor+dx) 
                circle.setAttribute("cy",ycor+dy)
                circle.setAttribute("dx",dx)
                circle.setAttribute("dy",dy)
            };
            requestID = window.requestAnimationFrame( moveDot );

        };
        moveDot();
    }else{
        window.cancelAnimationFrame(requestID);
        animate=true
    }
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

var move = document.getElementById( "move-but" );
move.addEventListener("click", moveC);

