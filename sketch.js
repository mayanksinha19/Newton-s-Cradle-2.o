
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,bobObject1, bobObject2, bobObject3, bobObject4, bobObject5,rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,80,500,20);
	bobObject1=new bob(200,400,50);
	bobObject2=new bob(300,400,50);
	bobObject3=new bob(400,400,50);
	bobObject4=new bob(500,400,50);
	bobObject5=new bob(600,400,50);
	
	rope1=new rope(bobObject3.body,ground.body,0);
	rope2=new rope(bobObject2.body,ground.body,-100);
	rope3=new rope(bobObject1.body,ground.body,-200);
	rope4=new rope(bobObject4.body,ground.body,100);
	rope5=new rope(bobObject5.body,ground.body,200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
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

	/*strokeWeight(3);
	line (ground.body.position.x,ground.body.position.y,bobObject3.body.position.x,bobObject3.body.position.y);*/

  drawSprites();
 
}
function keyPressed(){
	if(keyCode===RIGHT_ARROW){
		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:800,y:-200});
	}
}



