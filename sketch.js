const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
const Body=Matter.Body;

var engine, world;
var ground1;
var polygon;
var pos;
var backgroundImg;
var score=0;

function preload(){

 
 polygon_img=loadImage("sprites/rock.png");
 
  
 getBackgroundImg();



}



function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;

     ground1= new Ground(308,350,220,20);
     ground2= new Ground(590,150,180,20);
     block1=new Box(225,349);
     block2=new Box(280,349);
     block3=new Box(335,349);
     block4=new Box(390,349);
     block5=new Box(250,314);

     block6=new Box(305,314);
     block7=new Box(360,314);
     block8=new Box(305,270);


     block9=new Box(530,120);

     block10=new Box(585,120);
     block11=new Box(640,120);
     block12=new Box(560,85);

     block13=new Box(615,85);

     /*block14=new Box(540,120);
     block15=new Box(570,120);
     block16=new Box(600,120);
     block17=new Box(630,120);
     block18=new Box(660,120);

     block19=new Box(570,85);
     block20=new Box(600,85);
     block21=new Box(630,85);
     
     block22=new Box(600,50);*/

     polygon= Bodies.circle(50,200,20);
     World.add(world,polygon);

     slingShot=new Slingshot(this.polygon,{x:100,y:200});

     pos=this.polygon.position;

}

     
function draw() {
  if(backgroundImg)
    background(backgroundImg);
  // background(150);
  Engine.update(engine);
 // rectMode(CENTER);

 text("score: "+score,750,48);

  ground1.display();
  ground2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();
  block12.display();

  block13.display();

  block1.score();
  block2.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();


  /*block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  block19.display();
  block20.display();
  block21.display();

  block22.display();*/

 slingShot.display();
 
 imageMode(CENTER);
 image(polygon_img,pos.x,pos.y,40,40); 
  drawSprites();
}



function mouseDragged(){
 Body.setPosition(polygon,{x:mouseX,y:mouseY});
}


function mouseReleased(){
  slingShot.fly();
}


function keyPressed(){
  if(keyCode===32){
      slingShot.attach(this.polygon);
  }
  
  
  }

  async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON=await response.json();
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13);
     
    if(hour>=06 && hour<=18){
    
        bg="sprites/bg.png";
    
    }
    
    else{
    
        bg="sprites/bg2.jpg";
    }
    
    backgroundImg=loadImage(bg);
    
    }
