canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
//Create a reference for canvas 
greencar_width = 75;
greencar_height = 100;
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_x = 5;
greencar_y = 225;
//Set initial position for a car image.

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;
	background_imgTag = new Image();
	background_imgTag.onload = uploadgreencar;
	background_imgTag.src = greencar_image;
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	ctx.drawImage(background_imgTag,0, 0, canvas.width, canvas.height);
	//Define function ‘uploadBackground’

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag,greencar_x, greencar_y, greencar.width, greencar.height);

	//Define function ‘uploadgreencar’.

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (greencar_y <= 0) {
		greencar_y = greencar_y - 10;
		console.log("When up arrow is pressed, then the value of x is " + greencar_x + "|y = " + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if (greencar_y >= 300) {
		greencar_y = greencar_y + 10;
		console.log("When down arrow is pressed, then the value of x is " + greencar_x + "|y = " + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if (greencar_x < 0) {
		greencar_x = greencar_x - 10;
		console.log("When left arrow is pressed, then the value of x is " + greencar_x + "|y = " + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if (greencar_x < 725) {
		greencar_x = greencar_x + 10;
		console.log("When up arrow is pressed, then the value of x is " + greencar_x + "|y = " + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}
