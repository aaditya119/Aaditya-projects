var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
fixedRect=  createSprite(400, 200, 50, 50);
fixedRect.shapeColor= "blue"
 movingRect= createSprite(600,200,50,50);
 movingRect.shapeColor= "green"
}

function draw() {
  background(255,255,255);  
 movingRect.x=World.mouseX;
 movingRect.y=World.mouseY;
 if(isTouching(fixedRect,movingRect)){
    movingRect.shapeColor= "red"
    fixedRect.shapeColor= "red"
  }
  else{
    movingRect.shapeColor="blue"
    fixedRect.shapeColor="green"
  }
  drawSprites();
}