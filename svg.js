var addCircle, animate, change, height, makeCircle, move, rid, svg, width, animating;

svg = document.getElementById('svg');

move = document.getElementById('move');

height = svg.getAttribute('height');

width = svg.getAttribute('width');

animating = false;

rid = void 0;

change = function(e) {
  if (this.getAttribute('fill') === 'green') {
    svg.appendChild(makeCircle(Math.random() * width, Math.random() * height, 40));
    svg.removeChild(this);
    return;
  }
  this.setAttribute('fill', 'green');
  return e.stopPropagation();
};

makeCircle = function(x, y, r) {
  var c;
  c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  c.setAttribute('cx', x);
  c.setAttribute('cy', y);
  c.setAttribute('r', r);
  c.setAttribute('fill', 'red');
  c.setAttribute('stroke', 'black');
  c.setAttribute('dx', 1);
  c.setAttribute('dy', 1);
  c.addEventListener('click', change);
  return c;
};

addCircle = function(e) {
  if (this === e.target) {
    return svg.appendChild(makeCircle(e.offsetX, e.offsetY, 40));
  }
};

animate = function(e) {
    if (!animating){
	animating=true;
	var moveCircle;
	window.cancelAnimationFrame(rid);
	moveCircle = function() {
	    var circ, circles, curx, cury, dx, dy, i, newDot, r;
	    circles = document.getElementsByTagName('circle');
	    i = 0;
	    while (i < circles.length) {
		circ = circles[i];
		curx = parseInt(circ.getAttribute('cx'));
		cury = parseInt(circ.getAttribute('cy'));
		dx = parseInt(circ.getAttribute('dx'));
		dy = parseInt(circ.getAttribute('dy'));
		r = parseInt(circ.getAttribute('r'));
		if (curx === width / 2) {
		    circ.setAttribute('r', r / 2);
		    newDot = makeCircle(curx + dx * -1, cury, r / 2);
		    newDot.setAttribute('dx', dx * -1);
		    newDot.setAttribute('dy', dy * -1);
		    svg.appendChild(newDot);
		}
		if (r <= 2) {
		    svg.removeChild(circ);
		}
		if (curx >= width - r || curx <= r) {
		    circ.setAttribute('dx', dx * -1);
		}
		if (cury >= height - r || cury <= r) {
		    circ.setAttribute('dy', dy * -1);
		}
		curx += parseInt(circ.getAttribute('dx'));
		cury += parseInt(circ.getAttribute('dy'));
		circ.setAttribute('cx', curx);
		circ.setAttribute('cy', cury);
		i++;
	    }
	    rid = window.requestAnimationFrame(moveCircle);
	};
	return moveCircle();
    }else{
	window.cancelAnimationFrame(rid);
	animating=false;
    }
};





var clearSVG = function(){
    console.log("hello");
    while (svg.lastChild) {
	svg.removeChild(svg.lastChild);
    };
}



svg.addEventListener('click', addCircle);

clear = document.getElementById( "clear-but" );
clear.addEventListener("click", clearSVG);

move = document.getElementById( "move-but" );
move.addEventListener("click", animate);

