class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage ("sprites/smoke.png")
    this.tra = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
if (this.body.position.x>200 && this.body.velocity.x >10){
var position = [this.body.position.x, this.body.position.y]
this.tra.push(position)
}
for(var I = 0; I< this. tra.length; I++){
  image(this.image2, this.tra [I][0], this.tra [I][1])
}
    super.display();
  }
}
