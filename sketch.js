
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var dustbin1, dustbin2, dustbin3;
var paper;
var ground;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbin1 = new Dustbin(900,450, 220, 15);
	dustbin2 = new Dustbin(780,395, 15, 100 );
	dustbin3 = new Dustbin(1020, 395, 15, 100);
	
	paper = new Paper(130,430,15);
	ground = new Ground(600,470,1200,16);

}


function draw() {
	
  background(0);
  Engine.update(engine);
  strokeWeight(4);
  paper.display();
  ground.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
 
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {y: -40, x: 40})
	 }
   }



