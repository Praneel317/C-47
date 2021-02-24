var PLAY=1;
var END=0;
var SERVE;
gameState=SERVE;
var submarine, submarineImg;
var alien, aliensGroup, alienImg;
var background, backgroundImg;
var virus, virusImg, virusGroup;
var potion, potionImg, potionGroup
var gameOver,gameOverImg;
var getReady,getReadyImg;
var edges;

function preload(){
  submarineImg = loadImage("submarine.png");
  alienImg = loadImage("alien.png");
  virusImg = loadImage("virus.png");
  potionImg = loadImage("potion.png");
  backgroundImg = loadImage("underwater background.jpg");
  gameOverImg = loadImage("game over.png");
  getReadyImg = loadImage("get ready.png");
}



function setup() {
  createCanvas(1200,400);
  background = createSprite(0,0,1200,400);
  background.addImage(backgroundImg);
  background.scale = 1;
  submarine = createSprite(100, 200, 50, 50);
  submarine.addImage("submarine",submarineImg);
  submarine.scale = 0.2;
  gameOver = createSprite(500,200);
  gameOver.addImage(gameOverImg);
  gameOverImg.visible=false;
  getReady = createSprite(500,200);
  getReady.addImage(getReadyImg);
  getReadyImg.visible = false;
  submarine.visible = false;
  edges = createEdgeSprites();

  
  virusGroup = new Group();
  alienGroup = new Group();
  potionGroup = new Group();
  


  


}

function draw() {
//background(backgroundImg)
if(gameState === SERVE){
  getReadyImg.visible = true;
  gameOverImg.visible = false;

  if(keyDown("space")){
    gameState = PLAY;
    submarine.visible = true;
    gameOver.visible = false;
    getReady.visible = false;
  }
}

  if(gameState === PLAY){
    background.velocityX=-3;
    

    if(background.x < 0){
      background.x = background.width/2;
    }

gameOverImg.visible = false;

  if(keyDown(UP_ARROW)){
    submarine.y = submarine.y - 3;
  }
  if(keyDown(DOWN_ARROW)){
    submarine.y = submarine.y + 3;
  }
  if(keyDown(LEFT_ARROW)){
    submarine.x = submarine.x - 3;
  }
  if(keyDown(RIGHT_ARROW)){
    submarine.x = submarine.x + 3;
  }
  spawnvirus();
  spawnalien();
  spawnpotion();
}


else if(gameState === END){
  background.velocityX = 0;
  gameOver.visible = true;
  getReady.visible = false;
  submarine.visible = false;
  virusGroup.destroyEach();
  alienGroup.destroyEach();
  potionGroup.destroyEach();
  virusGroup.setLifetimeEach(0);
  alienGroup.setLifetimeEach(0);
  potionGroup.setLifetimeEach(0);
}
   submarine.collide(edges);
  drawSprites();
}
function spawnvirus(){
if(frameCount % 120 === 0){
  var virus = createSprite(1200,120,20,20);

  virus.velocityX = -5;
virus.y = Math.round(random(10,240));
  virus.addImage(virusImg);
virus.scale = 0.15;
virus.lifetime = 300;
virusGroup.add(virus);


}

}
function spawnalien(){
  if(frameCount % 30 === 0){
    var alien = createSprite(0,120,20,20);

    alien.velocityY = 5;
    alien.x = Math.round(random(10,1100));
    alien.y = Math.round(random(10,240));
    alien.addImage(alienImg);
    alien.scale = 0.20;
    alien.lifetime = 300;
    alienGroup.add(alien);
    
  }
}
function spawnpotion(){
  if(frameCount % 60 === 0){
    var potion = createSprite(0,50,20,20);
    potion.x = Math.round(random(10,1100));
    potion.addImage(potion.png);
    potion.scale = 0.15;
    potion.lifetime = 300;
    potionGroup.add(potion);
  }
}
