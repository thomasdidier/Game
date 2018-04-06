///////////////////////////////////////////////////////////////////////////////////////////////////////////
/**** varriable cercle ****/

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var dx = 2;
var dy = -2;
var x = canvas.width/2;
var y = canvas.height-30;
var ballRadius = 10;

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/**** varriable paddle ****/

var paddleHeight = 10;
var paddleWidth = 75; 
var paddleX = (canvas.width-paddleWidth)/2;

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/**** variable mouvement user ****/
var rightPressed = false;
var leftPressed = false;

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/**** fonction paddle et cercle plus proprieter ****/

function drawPaddle(){
    ctx.beginPath();
    ctx.rect (paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight)
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBall(){

	ctx.beginPath();
	ctx.clearRect(0,0, canvas.width, canvas.height);
	ctx.arc(x,y,ballRadius,0, Math.PI*2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

function draw(){

	ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
	drawBall();
	drawPaddle();

	x += dx;
    y += dy;

    if( y + dy > canvas.height-ballRadius || y +dy < ballRadius){
	dy = -dy;
}

if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
}

	if(rightPressed && paddleX < canvas.width-paddleWidth){
		paddleX += 7;
	}

	else if(leftPressed && paddleX < 0){
		paddleX -= 7;
	}

}




///////////////////////////////////////////////////////////////////////////////////////////////////////////
/**** mouvement paddle User ****/
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}




























setInterval(draw, 10)