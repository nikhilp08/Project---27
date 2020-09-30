
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400,200,300,20);

	bobObject1 = new Bob(100,600,40);
	bobObject2 = new Bob(140,600,40);
	bobObject3 = new Bob(180,600,40);
	bobObject4 = new Bob(220,600,40);
	bobObject5 = new Bob(260,600,40);

	rope1 = new Rope(bobObject1.body,roof.body,-70,5);
	rope2 = new Rope(bobObject2.body,roof.body,-35,5);
	rope3 = new Rope(bobObject3.body,roof.body,-2,5);
	rope4 = new Rope(bobObject4.body,roof.body,35,5);
	rope5 = new Rope(bobObject5.body,roof.body,70,5);
	
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background("white");
	
  	roof.display();
	
 	bobObject1.display();
    bobObject2.display();
    bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}




