const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bola;
var piso;

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  var bola_options = {
    restitution: 0.7,
    frictionAir: 0.05,
  };

  bola = Bodies.circle(200, 100, 20, bola_options);
  World.add(world, bola);

  piso = new Piso(200, 390, 400, 20);
}

function draw() {
  background("black");

  Engine.update(engine);

  strokeWeight(2);
  stroke("purple");
  noFill();

  piso.show();

  ellipseMode(RADIUS);
  ellipse(bola.position.x, bola.position.y, 20);
}
