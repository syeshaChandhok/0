const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');

ball_y=0;
ball_x=0;
hole_y="400";
halo_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h1.png", function(img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	});
	new_image();
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    Document.getElementById("hd3").innerHTML="You have Hit the Goal!!!";
	Document.getElementById("myCanvas").style.borderColor="red";
	
	

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
		}}
	
	
	function up()
	{
		if(ball_x <=450){
			ball_x = ball_x + block_image_width;
			console.log("block image with = " + ball_y +" ,X = " +ball_x);
			console.log(" When Up arrow is pressed,  Y = " = ball_y +", X = "+ball_x);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function down()
	{
		if(ball_y <=450){
			ball_y = ball_y + block_image_height;
			console.log("block image height = " + ball_x +" ,Y = " +ball_y);
			console.log(" When Down arrow is pressed, X = " = ball_x +", Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
		}
	}
	


