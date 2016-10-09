//This is used to report timing
var BANNER_WIDTH = 300;
var BANNER_HEIGHT = 250;

var images = {};

var preload,
	stage,
	replayBtn,
	stopWatch,
	cta,
	mask_shape_1,
	mask_shape_2,
	mask_shape_3;

function prepareCanvas(){
	stage = new createjs.Stage("bannerCanvas");

	preload = new createjs.LoadQueue();
	preload.addEventListener("fileload", handleFileLoad);
	preload.addEventListener("complete", handleComplete);

	preload.loadManifest([
		{id:"frame_5", src:"frame_5.jpg"},
		{id:"frame_4", src:"frame_4.jpg"},
		{id:"frame_3", src:"frame_3.jpg"},
		{id:"frame_2", src:"frame_2.jpg"},
		{id:"frame_1", src:"frame_1.jpg"}
	], true, "img/");
   
	createjs.Ticker.setFPS(24);
    createjs.Ticker.addEventListener("tick", handleTick);
}

//Set the initial states of all images here
function handleFileLoad(event){
	images[event.item.id] = new createjs.Bitmap(event.result);
}

//Set the initial states of all images here
function handleComplete(){

	for (var key in images) {
		if (images.hasOwnProperty(key)) {
			stage.addChild(images[key]);
		}
	}

	mainInit();
}

function handleTick(){
	stage.update();
}

function setInitialStates(){
	
	mask_shape_1 = new createjs.Shape();
	mask_shape_1.graphics.beginStroke("#6EAB3C").setStrokeStyle(4).drawPolyStar(BANNER_WIDTH-100, BANNER_HEIGHT, 650, 3, 0, -75).closePath();

	mask_shape_2 = new createjs.Shape();
	mask_shape_2.graphics.beginStroke("#6EAB3C").setStrokeStyle(4).drawPolyStar(BANNER_WIDTH-100, BANNER_HEIGHT, 650, 3, 0, -75).closePath();

	mask_shape_3 = new createjs.Shape();
	mask_shape_3.graphics.beginStroke("#6EAB3C").setStrokeStyle(4).drawPolyStar(BANNER_WIDTH-100, BANNER_HEIGHT, 650, 3, 0, -75).closePath();

	mask_shape_4 = new createjs.Shape();
	mask_shape_4.graphics.beginStroke("#6EAB3C").setStrokeStyle(4).drawPolyStar(BANNER_WIDTH-100, BANNER_HEIGHT, 650, 3, 0, -75).closePath();

	stage.addChild(mask_shape_1);
	stage.addChild(mask_shape_2);
	stage.addChild(mask_shape_3);
	stage.addChild(mask_shape_4);

	// replayBtn.visible = false;
	// replayBtn.alpha = 0.0;
	// replayBtn.htmlElement.style.transformOrigin = "50% 57%";

	// cta.visible = false;
	// cta.alpha = 0.0;

	// ctaText.visible = false;
	// ctaText.alpha = 0.0;

	// ctaCover.visible = false;

	for (var key in images) {
		if (images.hasOwnProperty(key)) {
			images[key].visible = false;
			images[key].alpha = 0.0;
		}
	}

	images["frame_1"].mask = mask_shape_1;
	images["frame_2"].mask = mask_shape_2;
	images["frame_3"].mask = mask_shape_3;
	images["frame_4"].mask = mask_shape_4;

}

//This gets called when the ad is finished loading
function mainInit(){
	setInitialStates();
	// addListeners();
	// show the ad and start animation

	document.getElementsByClassName("container")[0].style.display = "block";
	seq01();
}

// x and y for the main copy
var copyPos = {x: 15, y: 23};

//The first function in our sequence of animations
function seq01(){
	console.log("seq01");
	createjs.Tween.get(images["frame_1"]).to({visible: true});

	stopWatch = new Date().getTime();

	createjs.Tween.get(images["frame_1"]).to({alpha: 1}, 500, createjs.Ease.getPowInOut(1));

	createjs.Tween.get(images["frame_2"])
		.wait(500)
		.to({visible: true, alpha: 1});

	createjs.Tween.get(mask_shape_1)
	  .wait(2000)
	  .to({x: +750}, 800, createjs.Ease.getPowInOut(2))
	  .wait(2000)
	  .call(seq02);
}

function seq02(){
	console.log("seq02");

	createjs.Tween.get(images["frame_3"]).to({visible: true, alpha: 1});

	createjs.Tween.get(mask_shape_2)
	  .to({x: +750}, 800, createjs.Ease.getPowInOut(2))
	  .wait(2000)
	  .call(seq03);
}

function seq03(){
	console.log("seq03");

	createjs.Tween.get(images["frame_4"]).to({visible: true, alpha: 1});

	createjs.Tween.get(mask_shape_3)
	  .to({x: +750}, 800, createjs.Ease.getPowInOut(2))
	  .wait(2000)
	  .call(seq04);
}

function seq04(){
	console.log("seq04");

	createjs.Tween.get(images["frame_5"]).to({visible: true, alpha: 1});

	createjs.Tween.get(mask_shape_4)
	  .wait(2000)
	  .to({x: +750}, 800, createjs.Ease.getPowInOut(2))
	  .wait(2000)
	  .call(doResolve);
}


function doResolve(){
	console.log("doResolve");
}

//This funciton should be called when someone clicks on the unit or any cta
// function clickThrough(){
// 	console.log("clickThrough");
// }

//Replay the ad
// function replay(){
// 	setInitialStates();
// 	seq01();
// }

//This is where we add any rollovers or clicks
// function addListeners(){
// 	document.getElementsByClassName("clickScreen")[0].addEventListener("click", function(){
// 		clickThrough();
// 	});

// 	ctaCover.htmlElement.addEventListener("click", function(){
// 		clickThrough();
// 	});

// 	ctaCover.htmlElement.addEventListener("mouseover", function(){
// 		createjs.Tween.get(cta).to({scaleX:1.1, scaleY:1.1}, 500, createjs.Ease.getPowInOut(2));
// 		createjs.Tween.get(ctaCover).to({scaleX:1.1, scaleY:1.1}, 500, createjs.Ease.getPowInOut(2));
// 	});

// 	ctaCover.htmlElement.addEventListener("mouseout", function(){
// 		createjs.Tween.get(cta).to({scaleX:1, scaleY:1}, 500, createjs.Ease.getPowInOut(2));
// 		createjs.Tween.get(ctaCover).to({scaleX:1, scaleY:1}, 500, createjs.Ease.getPowInOut(2));
// 	});

// 	replayBtn.htmlElement.addEventListener("click", function(){
// 		replay();
// 	});

// 	replayBtn.htmlElement.addEventListener("mouseover", function(){
// 		createjs.Tween.get(replayBtn).to({rotation:-360}, 500, createjs.Ease.getPowInOut(2));
// 	});

// 	replayBtn.htmlElement.addEventListener("mouseout", function(){
// 		createjs.Tween.get(replayBtn).to({rotation:0});
// 	});
// }

//This will echo how many seconds have passed
function returnTimer(){
	stopWatch = ((new Date().getTime())-stopWatch) * 0.001;
	console.log(stopWatch+" seconds");
}