class Ball {
  constructor(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball0 = new Ball(random(50), random(height), 1);
  ball1 = new Ball(random(50), random(height), 1);
}
function draw() {
  background(200);
  ball0.x += ball0.dx;
  ball0.dx += 0.60;
  circle(ball0.x, ball0.y, 50);
  ball1.x += ball1.dx;
  ball1.dx += 0.6;
  circle(ball1.x, ball1.y, 50);
  if (ball0.x >= width) {
    ball0.dx = -0.75 * ball0.dx;
  }
  if (ball1.x >= width) {
    ball1.dx = -.75 * ball1.dx;
  }
}
