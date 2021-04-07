const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var binImg,bin;

function preload(){
    binImg = loadImage("dustbingreen.png");
   
}
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
  world = engine.world;


	ground = new Ground(400,650,800,20)
    ball= new Paper(100,640,50)
    box1=new Dustbin(570,580,20,120);
    box2=new Dustbin(600,630,90,20);
    box3=new Dustbin(630,580,20,120);


	Engine.run(engine);
  
}



function draw(){
    background("black");
    Engine.update(engine);

    
ground.display();
ball.display();
box1.display();
box2.display();
 box3.display();
    drawSprites();

    image(binImg,550,500,120,150);
}

function keyPressed(){
    if(keyCode === UP_ARROW){
      Matter.Body.applyForce(paper.body,paper.body.position,{x:120,y:-120})
    }
}