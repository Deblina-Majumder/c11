var sea,sea1;
var ship,ship1;


function prelode(){
sea1=loadAnimation("sea.png");
ship1=loadAnimation("ship-1.png","ship-1.png");
}

function setup(){

createcanvas(400,400);

//create sea:
sea=createSprite(200,200);
sea=addAnimation("running",sea1);
sea.scale=0.5;
sea.vealocityx=-1;

//create ship:
ship=createSprite(50,200,20,20);
ship=addAnimation("runnig",ship1);
ship.scale=0.25;
edges=createEdgeSprites();

ship.x=90;
ship.y=300;
}

function draw(){

background("blue");

if(keydown("enter")){
   ship.velocityx=5;
}

if(keydown("left")){
   ship.velocityx=-5;
}

if(keydown("space")){
   ship.velocityx=0;
}

if(sea.x<0){
  sea.x=sea.wirth/2;
}

//stop ship from falling down:
ship.collide(edges[3]);

drawSprites();
}





