const Engine = Matter.Engine,
const World = Matter.World,
const Events = Matter.Events,
const Bodies = Matter.Bodies;
 
var Particles = [];
var Plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function preload(){

}

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  //Create the Bodies Here
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 40; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 15; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 40; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }
  
  //create 4th row of plinko objects
  for (var j = 15; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create particle objects
  
    
}
 


function draw() {
  rectMode(CENTRE);
  background(0);
  textSize(20)
  drawSprites();
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  for (var k = 0; k < particles.length; k++) {
    particles[k].display();
  }
  if(frameCourt%60===0){
    particles.push(new particles(random(width/2-10, width/2+10),10,10));
  }
}

