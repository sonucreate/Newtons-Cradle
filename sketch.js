
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var options;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof =new Roof(400,100,800,10);
	ball =new Ball((roof.width/2)-140,300,70);
	ball2=new Ball((roof.width/2)-70,300,70);
	ball3=new Ball(roof.width/2,300,70);
	ball4=new Ball((roof.width/2)+70,300,70);
	ball5=new Ball((roof.width/2)+140,300,70);
	rope =new Chain(ball.body,roof.body,-140,0);
	rope2=new Chain(ball2.body,roof.body,-70,0);
	rope3=new Chain(ball3.body,roof.body,0,0);
	rope4=new Chain(ball4.body,roof.body,+70,0);
	rope5=new Chain(ball5.body,roof.body,+140,0);
	//dustbin2=new Dustbin(650,635,97,10,options);
	//dustbin3=new Dustbin(700,600,10,80,options);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display()
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW)
	console.log("hello")
	Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:-50});
	
	}
	

