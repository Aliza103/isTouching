var fixedRect; 
var movingRect;
var fixedRect1;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "orange";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "orange";

  fixedRect1 = createSprite(200, 100, 50, 50);
  fixedRect1.shapeColor = "orange";
  
}

function draw() {
  background("White");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(fixedRect, movingRect))
  {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  else if(isTouching ( fixedRect1, movingRect)) 
  
  {
    
    fixedRect1.shapeColor = "blue";
    movingRect.shapeColor = "blue";

   }
  
   else 
   
   {
    movingRect.shapeColor = "orange";
    fixedRect1.shapeColor = "orange";
    fixedRect.shapeColor =  "orange";
   }
 

  drawSprites();
}

