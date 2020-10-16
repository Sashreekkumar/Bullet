var bullet, wall;
var speed, weight;
var thickness;  

function setup() {
  createCanvas(1600,400);

 thickness= random(22,80); 
 speed= random(223, 321);
 weight= random(30, 52);
 
 bullet = createSprite(50, 200, 50, 20);
 bullet.shapeColor= "white";
 wall = createSprite(1350, 200, thickness, 400/2);
 wall.shapeColor= color(80, 80, 80); 
}

function draw() {
  background("black");  

  bullet.velocityX= speed; 

  if(collide(bullet, wall)){
    bullet.velocityX=0;
    var damage= 0.5 * weight * speed * speed/ (thickness * thickness * thickness);

    if (damage> 10){
      wall.shapeColor=  color(255, 0, 0);
    }

    if (damage<10){
      wall.shapeColor= color(0, 255,0);
    }
  }
  

drawSprites();
}

function collide(bullet, wall){

bulletRightEdge= bullet.x+ bullet.width;
wallLeftEdge= wall.x;

if (bulletRightEdge>=wallLeftEdge){
  return true; 
}

else {
  return false;
}
}


