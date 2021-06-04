
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var hammer;
var iron;
var rubber;
var stone;
var engine;
var world;


function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground= new Ground(600,600,1200,20)

  iron= new Iron(80,100)

  stone= new Stone(800,200,100,100)

  rubber= new Rubber(500,100)

  hammer= new Hammer(600,200)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  Engine.update(engine)

  
  stone.display();
  ground.display();
  iron.display();
  rubber.display();
  hammer.display();
}



