class Paper {
  constructor(x, y, angle) {
    var options = {
      isStatic: false,
      restituition: 0.3,
      friction: 0,
      density: 1.2
    }
    this.x = x
    this.y = y
    this.angle = angle
    this.image = loadImage('paper.png')
    this.body = Bodies.circle(x, y, angle, options)
    World.add(world, this.body)
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
