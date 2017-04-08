var clockWidthHeight;//width and height of the clock
var clockDiv;
var secondHand;
var minuteHand;
var hourHand;
var imgsLoaded = 0;
var secondHandSpeed;
var smoothRotation = false;
var useSecondHand = true;
var imagesToLoad = 4;
var callInterval = 1000;
var retina = false;

html5Clock = function(config){
	clockDiv = $("#" + config.divId);
	clockWidthHeight = config.clockWidthAndHeight;
	secondHandSpeed = config.secondHandSpeed;
	if(config.useSecondHand == "false"){
		useSecondHand = false;
		imagesToLoad = 3;
	}	
	if(config.smoothRotation == "true" && useSecondHand){
		smoothRotation = true;
		callInterval = 50;
	}
	//set clock holder css
	clockDiv.css({"height":clockWidthHeight + "px", "width":clockWidthHeight + "px", "position":"relative"});
	//add graphical elements 
	retina = window.devicePixelRatio > 1;//check if retina
	if(retina){
		clockDiv.append("<img id='bg' src=" + config.clockFaceHighResImg + " height="+clockWidthHeight+" width="+clockWidthHeight+" />");
		clockDiv.append("<img id='hourHand' src=" + config.hourHandHighResImg + " />");
		clockDiv.append("<img id='minuteHand' src=" + config.minuteHandHighResImg + " />");
		if(useSecondHand)clockDiv.append("<img id='secondHand' src=" + config.secondHandHighResImg + " />");
	}else{
		clockDiv.append("<img id='bg' src=" + config.clockFaceImg + " /><img id='hourHand' src=" + config.hourHandImg + " /><img id='minuteHand' src=" + config.minuteHandImg + " />");
		if(useSecondHand)clockDiv.append("<img id='secondHand' src=" + config.secondHandImg + " />");
	}
	//define elements
	if(useSecondHand)secondHand = $("#secondHand");
	minuteHand = $("#minuteHand");
	hourHand = $("#hourHand");
	//check to see if the images are loaded
	$('#bg').load(function() {   checkIfImagesLoaded();  });
	if(useSecondHand)secondHand.load(function() {   checkIfImagesLoaded();  });
	minuteHand.load(function() {   checkIfImagesLoaded();  });
	hourHand.load(function() {   checkIfImagesLoaded();  });
	//set clock css
	var handIds = $("#" + config.divId + " #bg, #hourHand, #minuteHand, #secondHand");
	handIds.css({"position":"absolute", "display":"none"});
	//handIds.css({"position":"absolute"});
};

function checkIfImagesLoaded(){
	imgsLoaded++;
	if(imgsLoaded == imagesToLoad){//once all the images are loaded
		if(retina){
			if(useSecondHand)secondHand.css( { "height":secondHand.height()/2, "width":secondHand.width()/2 } );
			minuteHand.css( { "height":minuteHand.height()/2, "width":minuteHand.width()/2 } );
			hourHand.css( { "height":hourHand.height()/2, "width":hourHand.width()/2 } );
		}
		if(useSecondHand)secondHand.css( { "left": (clockWidthHeight - secondHand.width())/2 + "px", "top": (clockWidthHeight - secondHand.height())/2 + "px" });//set x and y pos
		minuteHand.css( { "left": (clockWidthHeight - minuteHand.width())/2 + "px", "top": (clockWidthHeight - minuteHand.height())/2 + "px" });//set x and y pos
		hourHand.css( { "left": (clockWidthHeight - hourHand.width())/2 + "px", "top": (clockWidthHeight - hourHand.height())/2 + "px" });//set x and y pos		
		if(useSecondHand)setSecondStart();
		//clockDiv.fadeIn();//fade it in
		clockDiv.find('img').fadeIn();
		//minuteHand.css({"display":"none"});
		//call rotatehands function
		setInterval(function(){
			rotateHands();
		}, callInterval);//1000 = 1 second
		rotateHands();//make sure they start in the right position
	}
}

function setSecondStart(){
	var now = new Date();
	var secondAngle = 6 * now.getSeconds();//turn the time into angle
	secondHand.rotate(secondAngle, 'abs');//set the hand angle
}

function rotateHands(){
	//get current time/date from local computer
	var now = new Date();
	//set the second hand
	var secondAngle = 6 * now.getSeconds();//turn the time into angle
	if(useSecondHand){
		if(smoothRotation){
			var smoothSecondAngle = now.getMilliseconds()/1000 * 6 + secondAngle;
			secondHand.rotate(smoothSecondAngle, 'abs');//set the hand angle
		}else{
			if(secondAngle == 0){
				secondHand.rotate(-6, 'abs');//set the hand angle
			}
			secondHand.rotate({ animateTo:secondAngle, duration:secondHandSpeed}, 'abs');
		}
	}
	//set the minute hand
	var minuteAngle = 6 * now.getMinutes() + secondAngle/60;//turn the time into angle
	minuteHand.rotate(minuteAngle, 'abs');//set the hand angle
	//set the hour hand
	var hourAngle = 360/12 * now.getHours();//turn the time into angle
	hourHand.rotate((hourAngle + minuteAngle/12)%360, 'abs');//set the hand angle
}