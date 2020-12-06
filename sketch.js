const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() 
{
    
}

function setup()
{
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,height,width,20);
    ground1 = new Ground(350,300,200,10);
    ground2 = new Ground(600,200,200,10);

    box1 = new Box(350,280,30,40);
    box2 = new Box2(310,280,30,40);
    box3 = new Box3(407,280,30,40);
    box4 = new Box4(350,280,30,40);
    box5 = new Box5(390,280,30,40);
    box6 = new Box6(290,280,30,40);
    box7 = new Box(395,260,30,40);
    box8 = new Box2(380,260,30,40);
    box9 = new Box3(350,260,30,40);
    box10 = new Box4(310,260,30,40);
    box11 = new Box5(340,240,30,40);
    box12 = new Box6(380,240,30,40);
    box13 = new Box(600,180,30,40);
    box14 = new Box2(580,180,30,40);
    box15 = new Box3(600,180,30,40);
    box16 = new Box4(540,180,30,40);
    box17 = new Box5(620,180,30,40);
    box18 = new Box6(640,180,30,40);
    box19 = new Box(580,160,30,40);
    box20 = new Box2(620,120,30,40);
    box21 = new Box3(588,120,30,40);
    box22 = new Box4(650,120,30,40);
    box23 = new Box5(620,100,30,40);
    box24 = new Box6(590,70,30,40);

    hitter1 = new Hitters(100,200);
    sling1 = new Slings(hitter1.body,{x:100, y:150});
    
}

function draw()
{
    background(0,185,246);
    Engine.update(engine);

    textSize(20);
    textFont("Bembo");
    strokeWeight(0.1);
    stroke("black");
    fill("black");
    text("Press and Drag your Mouse To Release The Polygon",50,50);
    
    ground1.display();
    ground2.display();
   
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box23.display();
    box24.display();
    
    hitter1.display();

    sling1.display();
}

function mouseDragged()
{
    Matter.Body.setPosition(hitter1.body,{x: mouseX, y:mouseY});
}

function mouseReleased()
{
    sling1.fly();
}