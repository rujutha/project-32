/*class Box {
    constructor(x, y, width, height) {
      var options = {
        'restitution':1.0,
        'friction':1.0,
        'density':0.01
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
     /* rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(pos.x,pos.y, this.width, this.height);*/

     /* if(this.body.speed<100){
        this.body.display();
      }
 /* else{
  World .remove(world,this.body);
  }
 /* push ();
  this.visiblity=this.visiblity-5;
  tint (255,this.visiblity);
  image(this.image,this.body.position.x,this.body.position.y,50,50);
  pop ();
  }
  
  



    
    }
  };*/

  class Box extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("sprites/box.png");
  this.body.scale=0.5;
      this.visiblity=255;
    }
    display(){
  
      if(this.body.speed<3){
        super.display();
      }
  else{
  World .remove(world,this.body);
  push ();
  this.visiblity=this.visiblity-5;
  tint (255,this.visiblity);
  image(this.image,this.body.position.x,this.body.position.y,50,50);
  pop ();
  }
  
  
    }

    score(){
      if(this.visiblity<0 && this.visiblity>-105){
        score++;
      }
    }
  
  };
  