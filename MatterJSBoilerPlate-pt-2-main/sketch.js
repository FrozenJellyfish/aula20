const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle1 = 60
var angle2 = 60
var angle3 = 60

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.

	var plane_options={
		isStatic: true
	}

	var block_options={
		isStatic: true
	}

	var rotator_options={
		isStatic: true
	}

	var particle_options = {
		restitution : 1,
		friction : 0.2
	}

    particle1 = Bodies.circle(250,20,10,particle_options)
	World.add(world, particle1)

	particle2 = Bodies.circle(250,20,10,particle_options)
	World.add(world, particle2)

	particle3 = Bodies.circle(250,20,10,particle_options)
	World.add(world, particle3)

	particle4 = Bodies.circle(250,20,10,particle_options)
	World.add(world, particle4)

	particle5 = Bodies.circle(250,20,10,particle_options)
	World.add(world, particle5)


	block1 = Bodies.rectangle(100,200,150,20,block_options)
	World.add(world, block1)

	block2 = Bodies.rectangle(400,200,150,20,block_options)
	World.add(world, block2)

	plane = Bodies.rectangle(250,300,150,20, plane_options)
    World.add(world, plane)

	rotator1 = Bodies.rectangle(250,150,100,20,rotator_options)
	World.add(world, rotator1)

	rotator2 = Bodies.rectangle(250,150,100,20,rotator_options)
	World.add(world, rotator2)

	rotator3 = Bodies.rectangle(250,150,100,20,rotator_options)
	World.add(world, rotator3)

	Engine.run(engine);
  
	rectMode(CENTER)
	ellipseMode(RADIUS)

}


function draw() {
  background(250);
  Engine.update(engine)
  
  drawSprites();


  Matter.Body.rotate(rotator1,angle1)
  push()
  translate(rotator1.position.x , rotator1.position.y)
  rotate(angle1)
  rect(0,0,150,20)
  pop()

  angle1 +=3



  Matter.Body.rotate(rotator2,angle2)
  push()
  translate(rotator2.position.x , rotator2.position.y)
  rotate(angle2)
  rect(0,0,150,20)
  pop()

  angle2 -=2.5



  Matter.Body.rotate(rotator3,angle3)
  push()
  translate(rotator3.position.x , rotator3.position.y)
  rotate(angle3)
  rect(0,0,150,20)
  pop()

  angle3 +=3.5


  rect(plane.position.x,plane.position.y,550,10)
  rect(block1.position.x,block1.position.y,100,20)
  rect(block2.position.x,block2.position.y,100,20)

  ellipse(particle1.position.x,particle1.position.y,10);
  ellipse(particle2.position.x,particle2.position.y,10);
  ellipse(particle3.position.x,particle3.position.y,10);
  ellipse(particle4.position.x,particle4.position.y,10);
  ellipse(particle5.position.x,particle5.position.y,10);

 
}
