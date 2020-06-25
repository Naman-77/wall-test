var bullet, wall, thickness;
var speed, wieght;

function setup() {
  createCanvas(1600,400);

  speed = random (50,90);
  wieght = random (400, 1500);
  thickness = random(22, 83);

  bullet=createSprite(50, 200, 45, 10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall=createSprite(1400, 200, thickness, height/2);

  
  
}

function draw() {
  background(0);  

  if(wall.width > 22 && wall.width < 42  && bullet.isTouching(wall)){
    wall.shapeColor = "green";
    bullet.velocityX = 0;
  }
  

  if(wall.width > 42 && wall.width < 62  && bullet.isTouching(wall)){
    wall.shapeColor = "yellow";
    bullet.velocityX = 0;
  }
  

  if(wall.width > 62 && wall.width < 83 && bullet.isTouching(wall)){
    wall.shapeColor = "red";
    bullet.velocityX = 0;
  }
  

  drawSprites();

}
