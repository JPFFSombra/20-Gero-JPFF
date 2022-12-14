
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let terra, block1,block2,block3
function preload()
{
	
}

function setup() {
	createCanvas(400, 250);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	let terraOpcoes = {
		isStatic : true
	}

	let block1_options = {
		restitution : 0.5,
		friction : 0.02,
		frictionAir: 0
	}

	let block2_options = {
		restitution : 0.7,
		friction : 0.01,
		frictionAir: 0.1
	}

	let block3_options = {
		restitution : 0.01,
		friction : 1,
		frictionAir: 0.3
	}
terra = Bodies.rectangle(200,245,400,10, terraOpcoes );
World.add(world,terra)

block1 = Bodies.circle(220,10,10,block1_options)
World.add(world,block1)

block2 = Bodies.rectangle(110,50,10,10,block2_options)
World.add(world,block2)

block3 = Bodies.rectangle(350,50,10,10,block3_options)
World.add(world,block3)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  fill("black")
  background("purple");
  Engine.update(engine);
  rect(terra.position.x,terra.position.y,400,10)
  ellipse(block1.position.x, block1.position.y, 10)
  rect(block2.position.x,block2.position.y,10,10)
  rect(block3.position.x,block3.position.y,100,50)
  drawSprites();
 
}



