//THE VARIABLES FOR OUR GAME
var hypnoticBall,database;
var position;
//THE SETUP OF THE GAME
function setup(){
    database = firebase.database();
    createCanvas(500,500);
    hypnoticBall = createSprite(250,250,10,10);
    hypnoticBall.shapeColor = "red";
    hypnoticBallPosition = database.ref('ball/position');
    hypnoticBallPosition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    //THE CONTROLS TO THE GAME
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
//THE POSITION OF THE BALL ACCORDING TO THE CONTROLS
function writePosition(x,y){
  database.ref('ball/position').set({
      'x':position.x + x,
      'y':position.y + y

  }) 
   
}
function readPosition(data)
//THE POSITION OF THE BALL WHEN NOT CONTROLLING
{
    position = data.val();
    console.log(position);
    hypnoticBall.x = position.x;
    hypnoticBall.y = position.y;
}
function showError()
//TO SHOW BUGS IN THE CODE
{
    console.log("ERROR!!!!!")
}