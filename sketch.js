
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree1 = new tree(550,430,10,30)
    ground1 = new ground(400,688,800,20)
    
    boyobj = new boy();
    stoneobject = new stone();
    mango1 = new mango(630,470,10,10)
    mango2 = new mango(670,490,10,10)
    mango3= new mango(620,520,10,10)
    mango4= new mango(700,465,10,10)
    mango5= new mango(730,489,10,10)
    mango6 = new mango(760,500,10,10)
    mango7 = new mango(700,515,10,10)
    hand1 = new hand(stoneobject,{x:50,y:575})
    
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  tree1.display();
  ground1.display();
  boyobj.display();
  stoneobject.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  hand1.display();
  

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stoneobject.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  stoneobject.fly();
}


