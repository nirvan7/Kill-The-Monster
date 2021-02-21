const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hero,heroImg1,heroImg2;
var monster,monsterImg1,monsterImg2;
var ground;
var background,backImg;
var fly;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11;
var block12,block13,block14,block15,block16,block17,block18,block19,block20,block21;
var block22,block23,block24,block25,block26;

function preload() {
//preload the images here
heroImg1=loadImage("images/Superhero-01.png");
heroImg2=loadImage("images/Superhero-02.png");
monsterImg1=loadImage("images/Monster-01.png");
monsterImg2=loadImage("images/Monster-02.png");
backImg=loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 600);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground= new Ground(1500,400,3000,10);
  hero= new Hero(200,200,20);
  fly= new Fly(hero.body,{x:200,y:200});
  monster= new Monster(700,200,20);
   block1= new Block(400,375,40,40);
   block2= new Block(400,335,40,40);
   block3= new Block(400,295,40,40);
   block4= new Block(400,255,40,40);
   block5= new Block(400,215,40,40);
   block6= new Block(400,175,40,40);
   block7= new Block(400,135,40,40);
   block8= new Block(400,95,40,40);
   block9= new Block(440,375,40,40);
   block10= new Block(440,335,40,40);
   block11= new Block(440,295,40,40);
   block12= new Block(440,255,40,40);
   block13= new Block(440,215,40,40);
   block14= new Block(440,175,40,40);
   block15= new Block(480,375,40,40);
   block16= new Block(480,335,40,40);
   block17= new Block(480,295,40,40);
   block18= new Block(480,255,40,40);
   block19= new Block(480,215,40,40);
   block20= new Block(480,175,40,40);
   block21= new Block(480,135,40,40);
   block22= new Block(520,375,40,40);
   block23= new Block(520,335,40,40);
   block24= new Block(520,295,40,40);
   block25= new Block(520,255,40,40);
   block26= new Block(520,215,40,40);

Engine.run(engine);
}

function draw() {
  background(backImg);
  Engine.update(engine);
  ground.display();
  hero.display();
  fly.display();
  block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
//block10.display();
//block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
block26.display();
monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY});
}

