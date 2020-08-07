
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var bobObject1 = new bobObject1(400,450,20,20);
bobObject1 = ellipse(400,450,20,20);

var bobObject2 = new bobObject2(400,450,20,20);
bobObject2 = ellipse(390,450,20,20);

var bobObject3 = new bobObject3(400,450,20,20);
bobObject3 = ellipse(380,450,20,20);

var bobObject4 = new bobObject4(400,450,20,20);
bobObject4 = ellipse(370,450,20,20);

var bobObject5 = new bobObject5(400,450,20,20);
bobObject5 = ellipse(360,450,20,20);

rope1 = new rope(bob1.body,roof.body,-bobDiameter * 2,0)
rope2 = new rope(bob2.body,roof.body,-bobDiameter * 2,0)
rope3 = new rope(bob3.body,roof.body,-bobDiameter * 2,0)
rope4 = new rope(bob4.body,roof.body,-bobDiameter * 2,0)
rope5 = new rope(bob5.body,roof.body,-bobDiameter * 2,0)
var roof = new roof(90,400,200,15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



