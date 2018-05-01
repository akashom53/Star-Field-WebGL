var w = window.innerWidth;
var h = window.innerHeight;

var stars = [];
var starCount = 600;

var speed = 0;

function setup(){
	createCanvas(w, h, WEBGL);
	background(0);

	for (var i = 0; i < starCount; i++){
		stars.push(new Star());
	}
}

function draw() {
	background(0, 0, 0);
	// translate(w/2, h/2);
	for (var i = 0; i < starCount; i++){
		stars[i].update();
		stars[i].show();
	}
	if (mouseX >= 0 && mouseX <= w){
		speed = map(mouseX, 0, w, 0, 10);
	}
}


function Star() {
	this.x = floor(random(-w/2, w/2));
	this.y = floor(random(-h/2, h/2));
	this.z = floor(random(w));
	this.r = floor(random(2));

	this.update = function() {
		this.z += speed;
		if (this.z > w){
			this.x = floor(random(-w/2, w/2));
			this.y = floor(random(-h/2, h/2));
			this.z = 0;
		}
	}

	this.show = function() {
		push();
		noStroke();
		fill(255);
		translate(this.x, this.y, this.z);
		sphere(this.r);
		pop();
	}
}