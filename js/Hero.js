class Hero {
constructor(x,y,r)
{
  var options= {
    density: 1,
    FrictionAir: 1
 }
   this.x=x;
   this.y=y;
   this.r=r;
 this.image=loadImage("images/Superhero-01.png");
 this.body=Bodies.circle(this.x,this.y,(this.r)/2,options);
 World.add(world,this.body);
}
display()
{
  var Pos=this.body.position;	
  push();
  translate(Pos.x,Pos.y);
  scale(3)
  rectMode(CENTER);
  rotate(this.body.angle)
  fill(255,0,255)
  imageMode(CENTER);
  ellipseMode(CENTER);
  image(this.image, 0,0,this.r*2, this.r*2);
  pop();
}
}







 









