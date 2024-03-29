/*
     Name: Tara Thorne
     Date: June 5, 2014
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/



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

window.onload = function(){
	
	var theCanvas = document.getElementById("Part1");
	if (theCanvas && theCanvas.getContext) {
		var ctx = theCanvas.getContext("2d");
		
		if(ctx){
				//Draw a filled and stroked rectangle
				
				ctx.strokeStyle = "black";
				ctx.fillStyle = "blue";
				ctx.lineWidth = 5;
				
				//Draw the rectangle
				ctx.fillRect(0, 0, 50, 100);
				ctx.strokeRect(0, 0, 50, 100);	
			}		
		
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
	
	var theCanvas = document.getElementById("Part2");
	if (theCanvas && theCanvas.getContext) {
		var ctx = theCanvas.getContext("2d");
		
		if(ctx){
			ctx.strokeStyle= "black";
			ctx.fillStyle = "rgba(255,0,0,0.5)";
			ctx.lineWidth = 5;

			
			
			//Full Circle
			var degrees = 360;
			var radians = (degrees/180)*Math.PI;
			
			ctx.beginPath();
			ctx.arc(50, 50, 20, 0, radians);
			ctx.fill();
			ctx.stroke();
			
			}		
		
		}

/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here

	var theCanvas = document.getElementById("Part3");
	if (theCanvas && theCanvas.getContext) {
		var ctx = theCanvas.getContext("2d");
	
		if(ctx){
				ctx.strokeStyle = "black";
				ctx.fillStyle = "gold";
				star(ctx, 100, 100, 100, 5, 0.5);
			function star(c, x, y, r, p, m)
			{
				ctx.save();
				ctx.beginPath();
				ctx.translate(x, y);
				ctx.moveTo(0,0-r);
			for (var i = 0; i < p; i++)
			{
				ctx.rotate(Math.PI / p);
				ctx.lineTo(0, 0 - (r*m));
				ctx.rotate(Math.PI / p);
				ctx.lineTo(0, 0 - r);
			}
				ctx.stroke();
				ctx.fill();
				ctx.restore();
		}
		
		
		}		
	
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
	var theCanvas = document.getElementById("Part4");
	if (theCanvas && theCanvas.getContext) {
		var ctx = theCanvas.getContext("2d");
	
	if(ctx){
	  // Umbrells Top
	  ctx.strokeStyle = "black";
	  ctx.lineWidth = 2;
	  ctx.beginPath();
	  ctx.arc(300,200,200,0*Math.PI,1*Math.PI,true);
	  ctx.moveTo(100, 190);
	  ctx.bezierCurveTo(110, 146, 163, 146, 174, 186);
	  ctx.moveTo(173, 188);
	  ctx.bezierCurveTo(228, 156, 263, 150, 264, 204);
	  ctx.stroke();
		
		}		
	
	}
	


/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

var theCanvas = document.getElementById("Part5");
if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");

if(ctx){
	var theString = "Cupcake ipsum dolor sit amet danish candy tootsie roll wafer.";		
	
	//Style the font
	ctx.font = "12pt Arial Black";
	ctx.fillStyle = "blue";
	ctx.fillText(theString, 10, 20);			
	
	}		

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

	var theCanvas = document.getElementById("Part6");
	if (theCanvas && theCanvas.getContext) {
		var ctx = theCanvas.getContext("2d");

		if(ctx){
			//Create a variable to hold our image
			var  srcImg = document.getElementById("img1");
	
			//Draw an image directly onto the canvas
			//ctx.drawImage(srcImg, 0,0);

			//Draw a scaled down image
			//drawImage(srcImg, dx, dy, dw, dh)
			ctx.drawImage(srcImg, 0, 1088, 1650, 544);
	
			//Draw a slice image
			//drawImage(srcImg, sx, sy, sw, sh, dx, dy, dw, dh)
			ctx.drawImage(srcImg, 250, 595, 390, 485,50, 50,190, 280 );
	
	}		

}



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
	var theCanvas = document.getElementById("Part7");
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");

	if(ctx){	
		  
		  //Sun
		  ctx.strokeStyle = "black";
		  ctx.fillStyle = "yellow";
		  ctx.lineWidth = 4;
		  ctx.beginPath();
		  ctx.arc(170,90,80,0*Math.PI,2*Math.PI,true);
		  ctx.closePath();
		  ctx.stroke();
		  ctx.fill();
		  
		  // begin custom shape
	      ctx.beginPath();
	      ctx.moveTo(170, 80);
	      ctx.bezierCurveTo(130, 100, 130, 150, 230, 150);
	      ctx.bezierCurveTo(250, 180, 320, 180, 340, 150);
	      ctx.bezierCurveTo(420, 150, 420, 120, 390, 100);
	      ctx.bezierCurveTo(430, 40, 370, 30, 340, 50);
	      ctx.bezierCurveTo(320, 5, 250, 20, 250, 50);
	      ctx.bezierCurveTo(200, 5, 150, 20, 170, 80);
		  
  		var theString = "Cupcake ipsum dolor sit amet danish candy tootsie roll wafer.";		
	
  		//Style the font
  		ctx.font = "12pt Arial Black";
  		ctx.fillStyle = "blue";
  		ctx.fillText(theString, 100, 200);

	      // complete custom shape
	      ctx.closePath();
	      ctx.lineWidth = 5;
	      ctx.strokeStyle = "black";
		  ctx.fillStyle = "white";
	      ctx.stroke();
		  ctx.fill();
		  
		  // The Face
		  ctx.strokeStyle = "black";
		  ctx.fillStyle = "yellow";
		  ctx.lineWidth = 4;
		  ctx.beginPath();
		  ctx.arc(500,400,50,0*Math.PI,2*Math.PI,true);
		  ctx.closePath();
		  ctx.stroke();
		  ctx.fill();
 
		  // The Smile
		  ctx.strokeStyle = "black";
		  ctx.lineWidth = 2;
		  ctx.beginPath();
		  ctx.arc(500,400,40,0.2*Math.PI,0.8*Math.PI,false);
		  ctx.stroke();
 
		   // The Left eye
		   ctx.strokeStyle = '#000000';
		   ctx.fillStyle = '#000000';
		   ctx.beginPath();
	       ctx.arc(485,390,10,0*Math.PI,2*Math.PI,false);
           ctx.closePath();
	       ctx.stroke();
	       ctx.fill();
 
	       // The Right Eye
	       ctx.strokeStyle = '#000000';
	       ctx.fillStyle = '#000000';
	       ctx.beginPath();
	       ctx.arc(515,390,10,0*Math.PI,2*Math.PI,false);
	       ctx.closePath();
	       ctx.stroke();
	       ctx.fill();
	
	}		

}
}


