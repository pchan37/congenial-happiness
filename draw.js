var svg = document.getElementById("svg");
var NS = "http://www.w3.org/2000/svg";
var eX = -1;
var eY = -1;

var dotsAreCool = function(e) {
    var c = document.createElementNS(NS, "circle");
    
    var line = document.createElementNS(NS, "line");
    if (eX == -1) {
	eX = e.offsetX;
	eY = e.offsetY;
	c.setAttribute("fill","lightsteelblue");
    } else {
	c.setAttribute("fill","white");
    }
    line.setAttribute("x1", eX);
    line.setAttribute("y1", eY);
    eX = e.offsetX;
    eY = e.offsetY;
    line.setAttribute("x2", eX);
    line.setAttribute("y2", eY);
    line.setAttribute("style", "stroke:black;stroke-width:1");
    svg.appendChild(line);
    
    c.setAttribute("cx", eX);
    c.setAttribute("cy", eY);
    c.setAttribute("r", 20);
    c.setAttribute("stroke","black");
    c.setAttribute("stroke-width",1);

    svg.appendChild(c);
};

svg.addEventListener("click", dotsAreCool);

var clearbtn = document.getElementById("clear-btn");
clearbtn.addEventListener("click", function(e){
    while (svg.lastChild) {
	svg.removeChild(svg.lastChild);
    }
    eX = -1;
    eY = -1;
});
