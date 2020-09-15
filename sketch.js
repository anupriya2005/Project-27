
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobObject1 = new bob(200,200,1);
bobObject2 = new bob(200,300,1);
bobObject3 = new bob(200,400,1);
bobObject4 = new bob(200,500,1);
bobObject5 = new bob(200,600,1);

roof1 = new roof(400,100,700,15);

rope1 = new rope(bobObject1.body, roof1.body, bobDiameter*2,0);
rope2 = new rope(bobObject2.body, roof1.body, bobDiameter*2,0);
rope3 = new rope(bobObject3.body, roof1.body, bobDiameter*2,0);
rope4 = new rope(bobObject4.body, roof1.body, bobDiameter*2,0);
rope5 = new rope(bobObject5.body, roof1.body, bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}



