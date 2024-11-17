let dragon;

function setup() {
  createCanvas(400, 400);
  dragon = new Dragon(width / 2, height / 2);
}

function draw() {
  background(220);
  dragon.show();
}

class Dragon {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.bodyColor = color(255, 0, 0);
    this.eyeColor = color(0);
  }

  show() {
    // Body
    fill(this.bodyColor);
    ellipse(this.x, this.y, 80, 60);

    // Head
    fill(this.bodyColor);
    ellipse(this.x + 40, this.y, 40, 40);

    // Eyes
    fill(this.eyeColor);
    ellipse(this.x + 40, this.y - 10, 10, 10);

    // Mouth
    noFill();
    stroke(0);
    arc(this.x + 40, this.y + 10, 20, 10, 0, PI);

    // Tail
    fill(this.bodyColor);
    triangle(this.x - 40, this.y, this.x - 80, this.y - 20, this.x - 80, this.y + 20);
  }
}
