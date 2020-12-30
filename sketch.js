
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	front = loadImage("front.png");
	right = loadImage("right.png");
	left = loadImage("left.png");
	back = loadImage("back.png");
	left_running = loadAnimation("leftwalk1.png","leftwalk2.png");
	right_running = loadAnimation("rightwalk1.png","rightwalk2.png");
	front_running = loadAnimation("frontwalk1.png","frontwalk2.png");
	back_running = loadAnimation("backwalk1.png","backwalk2.png");
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	player = createSprite(300,300);
	player.addAnimation("front",front);
	player.addAnimation("right",right);
	player.addAnimation("left",left);
	player.addAnimation("back",back);
	player.addAnimation("left_running",left_running);
	player.addAnimation("back_running",back_running);
	player.addAnimation("front_running",front_running);
	player.addAnimation("right_running",right_running);
	player.scale = 0.3
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  if(keyDown("RIGHT_ARROW")){
	player.x = player.x + 10;
  }
  if(keyWentDown("RIGHT_ARROW")){
	player.changeAnimation("right_running",right_running);
}
if(keyWentUp("RIGHT_ARROW")){
	player.changeAnimation("right",right);
}
  if(keyDown("DOWN_ARROW")){
	player.y = player.y + 10;
  }
  if(keyWentDown("DOWN_ARROW")){
	player.changeAnimation("front_running",front_running);
}
if(keyWentUp("DOWN_ARROW")){
	player.changeAnimation("front",front);
}
  if(keyDown("LEFT_ARROW")){
	player.x = player.x - 10;
  }
  if(keyWentDown("LEFT_ARROW")){
	player.changeAnimation("left_running",left_running);
}
if(keyWentUp("LEFT_ARROW")){
	player.changeAnimation("left",left);
}
  if(keyDown("UP_ARROW")){
	player.y = player.y - 10;
  }
  if(keyWentDown("UP_ARROW")){
	player.changeAnimation("back_running",back_running);
}
if(keyWentUp("UP_ARROW")){
	player.changeAnimation("back",back);
}

//camera.x = player.x
//camera.y = player.y
  drawSprites();

}



