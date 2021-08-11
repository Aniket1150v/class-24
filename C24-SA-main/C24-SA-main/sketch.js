const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var angle;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}
function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
  angle = -PI/4;
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 35, 50,angle);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(backgroundImg);
  Engine.update(engine);
    tower.display();
   cannon.display();
 
}

