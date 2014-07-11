/*
     Name: Zachary Lincoln
     Date: 7/10/14
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */

window.onload = function(){
/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/
	if(Modernizr.canvas){
		var cPart1 = document.getElementById('part1'),
				xPart1 = cPart1.getContext('2d');
		var cPart2 = document.getElementById('part2'),
				xPart2 = cPart2.getContext('2d');
		var cPart3 = document.getElementById('part3'),
				xPart3 = cPart3.getContext('2d');
		var cPart4 = document.getElementById('part4'),
				xPart4 = cPart4.getContext('2d');
		var cPart5 = document.getElementById('part5'),
				xPart5 = cPart5.getContext('2d');
		var cPart6 = document.getElementById('part6'),
				xPart6 = cPart6.getContext('2d');
		var cPart7 = document.getElementById('part7'),
				xPart7 = cPart7.getContext('2d');
/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

		if(cPart1 && xPart1){
			xPart1.fillStyle = 'blue';
			xPart1.strokeStyle = 'black';
			
			xPart1.fillRect(0, 0, 50, 100);
			xPart1.strokeRect(0, 0, 50, 100);
		}


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here

		if(cPart2 && xPart2){
			xPart2.fillStyle = 'rgba(255, 64, 62, .5)';
			xPart2.strokeStyle = 'black';

			xPart2.beginPath();
			xPart2.arc(50, 50, 20, 0, 2*Math.PI, false);
			xPart2.fill();

			xPart2.beginPath();
			xPart2.arc(50, 50, 30, 0, 2*Math.PI, false);
			xPart2.stroke();
		}


/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here

		if(cPart3 && xPart3){
			//help from http://www.websanova.com/extensions/websanova/wextensions/html5/star
			var x = 100,
					y = 100,
					width = 25,
					height = 25;
			xPart3.fillStyle = 'yellow';

			xPart3.beginPath();
	    xPart3.moveTo(x + width*0.5, y);
	    xPart3.lineTo(x + width*0.375, y + height*0.4);
	    xPart3.lineTo(x, y + height*0.4);
	    xPart3.lineTo(x + width*0.3, y + height*0.625);
	    xPart3.lineTo(x + width*0.2, y + height);
	    xPart3.lineTo(x + width*0.5, y + height*0.725);
	    xPart3.lineTo(x + width*0.8, y + height);
	    xPart3.lineTo(x + width*0.7, y + height*0.625);
	    xPart3.lineTo(x + width, y + height*0.4);
	    xPart3.lineTo(x + width*0.625, y + height*0.4);
	    xPart3.lineTo(x + width*0.5, y);
	    xPart3.closePath(); 
			xPart3.fill();
		}


/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
		if(cPart4 && xPart4){
			xPart4.beginPath();
			xPart4.arc(20, 20, 20, 0, 1*Math.PI, true);
			xPart4.stroke();

			xPart4.beginPath();
			xPart4.moveTo(0, 20);
			xPart4.lineTo(0, 25);
			xPart4.bezierCurveTo(0, 20, 10, 20, 10, 25);
			xPart4.bezierCurveTo(10, 20, 20, 20, 20, 25);
			xPart4.bezierCurveTo(20, 20, 30, 20, 30, 25);
			xPart4.bezierCurveTo(30, 20, 40, 20, 40, 25);
			xPart4.lineTo(40, 20);
			xPart4.stroke();
		}

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
			if(cPart5 && xPart5){
				var string = 'Hello World!';

				xPart5.font = '25pt Georgia';
				xPart5.fillStyle = 'blue';
				xPart5.fillText(string, 20, 60);
			}

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here
			if(cPart6 && xPart6){
				cPart6.height = 2035;
				cPart6.width = 2000;
				// var imgPath = 'image/logo.png';
				var imgPath = document.getElementById('image');
				xPart6.drawImage(imgPath, 0, 0);
				xPart6.drawImage(imgPath, 0, 1088, 1650, 544);
				xPart6.drawImage(imgPath, 279, 595, 354, 403, 0, 1632, 354, 403);
			}


/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

		if(cPart7 && xPart7){
			var bgPath = document.getElementById('sunny'),
					coolString = 'Yayyyy, Summer!';
			cPart7.width = 640;
			cPart7.height = 480;
			xPart7.fillStyle = 'black';
			xPart7.strokeStyle = 'black';
			xPart7.save();

			xPart7.drawImage(bgPath, 0, 0);

			xPart7.beginPath();
			xPart7.arc(320, 240, 80, 0, 2*Math.PI, false);
			xPart7.fillStyle = 'yellow';
			xPart7.fill();

			//left eye
				//left 240 + 40
				//top 160 + 60
			//right eye
				//left 240 + 120
				//top 160 + 60

			xPart7.restore();

			//left eye
			xPart7.beginPath();
			xPart7.arc(280, 220, 5, 0, 2*Math.PI, false);
			xPart7.fill();

			//right eye
			xPart7.beginPath();
			xPart7.arc(360, 220, 5, 0, 2*Math.PI, false);
			xPart7.fill();

			//smile
			xPart7.beginPath();
			xPart7.moveTo(280, 260);
			xPart7.bezierCurveTo(280, 300, 360, 300, 360, 260);
			xPart7.stroke();

			xPart7.font = '25pt Helvetica';
			xPart7.fillStyle = 'white';
			xPart7.fillText(coolString, 20, 400);
		}

	}else{
		//no canvas
	}
}