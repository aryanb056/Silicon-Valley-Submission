var pc;
var npc,npc1,npc2,npc3;
var ground;
var pcWalking;
var backgroundIMG;
var background1;
var person = prompt("Please enter your name");
var option = prompt("Why do you think the sky is getting dark? Input POLLUTION OR CLOUDY as the answer.");
let bg;
let y = 0;

function preload(){
pcWalking = loadImage("pcWalk.png");
npc = loadImage("NPC.png");
//backgroundIMG = loadImage("sky.png");


}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  bg = loadImage('sky.png');
  pc = createSprite(200, 700, 50, 50);
  pc.addImage("pcWalking",pcWalking);
  npc1 = createSprite(1000,700,50,50);
  npc1.addImage("npc",npc);
  /*npc2 = createSprite(600,700,50,50);
  npc2.addImage("npc",npc);
  npc3 = createSprite(800,700,50,50);
  npc3.addImage("npc",npc);*/
  if (person != null) {
    text("Hello " + person + "! Let's Start!",500,500);

 if (option == "pollution" || option == "Pollution"){
    text("Correct Answer!",500,500);
  }
else if (option == "Cloudy" || option == "cloudy"){
  text("Wrong Answer",500,500);
}
else {
  text("Please Input your answer",500,500);
}


  

  
}
}


function draw() {
  background(bg);
 

  if(keyDown(LEFT_ARROW)){
    changePosition(-3,0);
}
else if(keyDown(RIGHT_ARROW)){
    changePosition(3,0);
}
else if(keyDown(UP_ARROW)){
    changePosition(0,-3);
}
else if(keyDown(DOWN_ARROW)){
  changePosition(0,3);
}
  
  drawSprites();
}
function changePosition(x,y){
  pc.x = pc.x + x;
  pc.y = pc.y + y;
}
