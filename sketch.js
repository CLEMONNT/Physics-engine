const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var object;
var ground;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var objectOptions={
    restitution:1
  }
  object=Bodies.circle(200,100,50,objectOptions);
  console.log(object.position.x); 
  World.add(world,object);
  var groundOptions={
    isStatic:true
  }

  ground=Bodies.rectangle(200,390,200,20,groundOptions);
  World.add(world,ground);
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(object.position.x,object.position.y,50,50);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20); 
}