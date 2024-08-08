function setup() {
  createCanvas(600, 300);
  background("white");
}

function draw() {
  fill("red");

  if (mouseIsPressed) {
    circle(mouseX, mouseY, 20, 20);
  }

  //console.log(mouseIsPressed);

  stroke("red");
}
