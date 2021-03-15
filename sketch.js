
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	,ball;
var world;


function setup() {
	createCanvas(1360, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	
	ball=new Ball(200,200,100,100)

	keyPressed();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  //keyPressed();

 // ball.pos.x=ball.position.x
 // ball.pos.y=ball.position.y



  groundObject.display();
  dustbinObj.display();
  ball.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(ball.body,ball.body.pos,{x:130,y:-145});
	}
}