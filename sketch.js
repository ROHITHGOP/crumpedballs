
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ball, leftside, middle, rightside;

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Paper(100,200,30);
	leftside = new Dustbin(740,270,20,120);
	rightside = new Dustbin(920,270,20,120);
	middle = new Dustbin(830,330,200,20);
	ground = new Ground(600,350,width,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  leftside.display();
  rightside.display();
  middle.display();
  drawSprites(); 
}
function keyPressed() {
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(ball.body,middle.body.position,{x:160,y:-165})
	}
}


