//This is used to report timing
var BANNER_WIDTH = 300;
var BANNER_HEIGHT = 250;


var imageURLs = [	
	"img/frame_1.jpg",
	"img/frame_2.jpg",
	"img/frame_3.jpg",
	"img/frame_4.jpg",
	"img/frame_5.jpg" ];

var imagesOK=0;
var imgs=[];

var canvas,
    ctx,
    hooker_el,
    cover_image;

// var preload,
// 	stage,
// 	replayBtn,
// 	stopWatch,
// 	cta,
// 	mask_shape_1,
// 	mask_shape_2,
// 	mask_shape_3;


function loadAllImages(){
    for (var i = 0; i < imageURLs.length; i++) {
      var img = new Image();
      imgs.push(img);
      img.onload = function(){ imagesOK++; imagesAllLoaded(); };
      img.src = imageURLs[i];
    }
}

var imagesAllLoaded = function() {
  if (imagesOK==imageURLs.length ) {
     // all images are fully loaded an ready to use
     truck=imgs[0];
     logo=imgs[1];
     overlay=imgs[2];
     mainInit();
  }
};

function prepareCanvas(){
    canvas=document.getElementById("bannerCanvas");
    canvas.width = BANNER_WIDTH;
    canvas.height = BANNER_HEIGHT;
    ctx = canvas.getContext("2d");
    ctx.strokeStyle ="#6EAB3C";
    ctx.lineWidth = "8";
    loadAllImages();
}


function setInitialStates(){

}


function run_clipping(obj, cover_image) {
    x = parseInt(obj.left);

    ctx.save();

    ctx.beginPath();
    ctx.moveTo(x+BANNER_WIDTH,0);
    ctx.lineTo(x,BANNER_HEIGHT+100);
    ctx.lineTo(x,0);
    ctx.closePath();

    ctx.clip();

    ctx.drawImage(cover_image, 0, 0);

    ctx.beginPath();
    ctx.moveTo(x+BANNER_WIDTH,0);
    ctx.lineTo(x,BANNER_HEIGHT+100);
    ctx.stroke();

    ctx.restore();
}

//This gets called when the ad is finished loading
function mainInit(){
	setInitialStates();
	// addListeners();
	// show the ad and start animation

	document.getElementsByClassName("container")[0].style.display = "block";
    hooker_el = document.getElementById("cover_hooker");
	seq01();
}

function applyValue(he){
    console.log(he[0].style.left);
}

//The first function in our sequence of animations
function seq01(){
    stopWatch = new Date().getTime(); 

    ctx.drawImage(imgs[0], 0, 0);

    TweenMax.set(hooker_el, {left:-300});
    
    console.log("seq01");
    
    var twnDelay = 0;

    TweenMax.to(hooker_el, 1, {left:300, onUpdate:run_clipping, onUpdateParams:[hooker_el.style, imgs[1]], ease:Power1.easeInOut, delay:twnDelay, onComplete:(function(){
        TweenMax.set(hooker_el, {left:-300});
    })});

    twnDelay += 1.5;
    TweenLite.delayedCall(twnDelay, seq02);
}

function seq02(){
    console.log("seq02");
    var twnDelay = 1;

    ctx.drawImage(imgs[1], 0, 0);

    TweenMax.to(hooker_el, 1, {left:300, onUpdate:run_clipping, onUpdateParams:[hooker_el.style, imgs[2]], ease:Power1.easeInOut, delay:twnDelay,onComplete:(function(){
        TweenMax.set(hooker_el, {left:-300});
    })});
    twnDelay += 1.5;
    TweenLite.delayedCall(twnDelay, seq03);
}

function seq03(){
    console.log("seq03");
    var twnDelay = 1;

    ctx.drawImage(imgs[2], 0, 0);

    TweenMax.to(hooker_el, 1, {left:300, onUpdate:run_clipping, onUpdateParams:[hooker_el.style, imgs[3]], ease:Power1.easeInOut, delay:twnDelay, onComplete:(function(){
        TweenMax.set(hooker_el, {left:-300});
    })});
    twnDelay += 1.5;
    TweenLite.delayedCall(twnDelay, seq04);
}

function seq04(){
    console.log("seq04");
    var twnDelay = 1;

    ctx.drawImage(imgs[3], 0, 0);

    TweenMax.to(hooker_el, 1, {left:300, onUpdate:run_clipping, onUpdateParams:[hooker_el.style, imgs[4]], ease:Power1.easeInOut, delay:twnDelay, onComplete:(function(){
        TweenMax.set(hooker_el, {left:-300});
    })});
    twnDelay += 1.5;
    TweenLite.delayedCall(twnDelay, doResolve);
}


function doResolve(){
	console.log("doResolve");
// 	images["image2"].visible = true;

// 	createjs.Tween.get(images["copy1"]).to({x:BANNER_WIDTH+20, y:23}, 1000, createjs.Ease.getPowInOut(2)).to({visible: false});
	
// 	createjs.Tween.get(images["image2"]).to({alpha: 1}, 500, createjs.Ease.getPowInOut(2));

// 	createjs.Tween.get(images["image1"]).wait(500).to({visible: false});

// 	createjs.Tween.get(images["resolveCopy0"])
// 		.to({x:-BANNER_WIDTH, y:23, visible:true, alpha:1})
// 		.wait(500)
// 		.to({x:15}, 1000, createjs.Ease.getPowInOut(2));

// 	createjs.Tween.get(images["resolveCopy1"])
// 		.to({x:-BANNER_WIDTH, y:52, visible:true, alpha:1})
// 		.wait(1500)
// 		.to({x:15}, 1000, createjs.Ease.getPowInOut(2));

// 	createjs.Tween.get(replayBtn)
// 		.to({visible:true})
// 		.wait(2500)
// 		.to({alpha:1}, 1000, createjs.Ease.getPowInOut(2));

// 	createjs.Tween.get(cta)
// 		.to({visible:true})
// 		.wait(2500)
// 		.to({alpha:1}, 1000, createjs.Ease.getPowInOut(2));

// 	createjs.Tween.get(ctaText)
// 		.to({visible:true , x:38 , y:181})
// 		.wait(2500)
// 		.to({alpha:1}, 1000, createjs.Ease.getPowInOut(2));

// 	createjs.Tween.get(ctaCover)
// 		.wait(2500)
// 		.to({visible:true});
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