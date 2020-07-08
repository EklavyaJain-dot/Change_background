var movingRect, line1, line2, line3;

function setup(){
createCanvas(1200,800); 
movingRect = createSprite(400,700,50,50);
line1 = createSprite(600,400,10,800);
line1.visible = false;

line2 = createSprite(100,400,10,1200);
line2.visible = false;

line3 = createSprite(300,400,10,1200);
line3.visible = false;
}

function draw(){
background("black");

movingRect.shapeColor = "blue";
movingRect.y = World.mouseY;
movingRect.x = World.mouseX;

if(movingRect.isTouching(line1)){
background("lightGreen");
}

if(movingRect.isTouching(line2)){
  background("orange");
}

if(movingRect.isTouching(line3)){
  background("purple");
}

drawSprites();
}