var box1, box2;


function setup()
{
  createCanvas(600,400);
  box1 = createSprite(200,200,50,50);
  box2 = createSprite(300,300,50,50);
}

function draw()
{
  background("yellow");

  if(keyIsDown(RIGHT_ARROW))
  {
    box1.position.x += 4;

  }

  if(keyIsDown(LEFT_ARROW))
  {
    box1.position.x -= 4;
  }

  if(keyIsDown(UP_ARROW))
  {
    box2.position.y -= 4;

  }

  if(keyIsDown(DOWN_ARROW))
  {
    box2.position.y += 4;
    
  }
  drawSprites();
}

