var aeroplane,aeroplane_img;
var bomb1,bomb2,bomb1_img,bomb2_img;
var bg;
var stone,stone_img;
var Bomb1,Bomb2;

function preload(){
   aeroplane_img=loadImage("aeroplane.png");
   bomb1_img = loadImage("bomb1.png");
   bomb2_img = loadImage("bomb2.png");  
    bg = loadImage("bg.png"); 
   stone_img = loadImage("stone.png");
}

function setup() {
  createCanvas(800,400);
  rectMode(CENTER);
  
Bomb1= createSprite(width/2, 200, 10,10);
Bomb1.scale=0.2;
//Bomb1.addImage(bomb1_img);
//Bomb1.visible=false;

aeroplane=createSprite(600, 200, 10,10);
  aeroplane.addImage(aeroplane_img);
  aeroplane.velocityX = -3;


stone = createSprite(width/2,390);
stone.scale=0.2;
stone.addImage(stone_img);

Bomb2 = createSprite(width/2,390);
Bomb2.scale = 0.2;
Bomb2.addImage(bomb2_img);
Bomb2.visible = false;

}

function draw() {
  background(bg);  
if(keyDown(DOWN_ARROW)){
Bomb1.velocityY=2;
Bomb1.addImage(bomb1_img);
Bomb1.visible = true;
}
if(Bomb1.isTouching (stone)){
Bomb2.addImage(bomb2_img);
Bomb1.visible = false;
stone.visible = false;
Bomb2.visible = true;

}


  drawSprites();

}