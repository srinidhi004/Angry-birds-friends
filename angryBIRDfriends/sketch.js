const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var box1, friend1,friend2, friend3, friend4, friend5, friend6;
var backgroundimg, platform;
var bird, sling, ground;

var gameState= "onSling";
var score= 0;

function preload(){
    
    backgroundimg = loadImage("images/night background.jpg");
}

function setup(){
    var canvas = createCanvas(1800,400);
    engine = Engine.create();
    world = engine.world;

    friend1 = new Friend (810,320);
    friend2= new Friend2(810,220);
    friend3 = new Friend3( 600,200);
    friend4= new Friend4(720,360);
    friend5= new Friend5(900,380);
    friend6= new Friend6(1020,200);
    ground= new Ground (600, height, 1200, 20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(600,320,70,70);
    box2 = new Box(1020,320,70,70);
    log1 = new Log(810,260,600, PI/2);
   // console.log(log3.x);
  
    box3 = new Box(600,250,70,70);
    box4 = new Box(1020,240,70,70);
    box6= new Box(800,240,70,70);
    
    log3 =  new Log(810,240,600, PI/2);

    box5 = new Box(800,360,70,70);
    log4 = new Log(790,120,150, PI/6);
    log5 = new Log(900,120,150, -PI/6);

    bird = new Bird(200,50);
    sling = new Sling(bird.body,{x:200, y:50});
}
  


function draw(){
    //background("white");
    background(backgroundimg);
    Engine.update(engine);
   
    textSize(35);
    fill("white");
    text("score "+ score,width-300,50);

    Engine.update(engine);
     box1.display();
     box2.display();
    ground.display();
    friend1.display();
    friend2.display();
    friend3.display();

    friend4.display();
    friend5.display();
    friend6.display();
    log1.display();

    box3.display();
    box4.display();
    box5.display();
  
    log3.display();
    friend1.score();
    friend2.score();

   box6.display();
   log4.display();
    log5.display();
    
    bird.display();
    platform.display();
    
   sling.display();    
   
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    sling.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(bird.body);
    }
}

