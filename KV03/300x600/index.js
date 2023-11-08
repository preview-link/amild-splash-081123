(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,1403);


(lib.bolabola = function() {
	this.initialize(img.bolabola);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.endsc = function() {
	this.initialize(img.endsc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.endsp = function() {
	this.initialize(img.endsp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,300);


(lib.ghw = function() {
	this.initialize(img.ghw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.riak = function() {
	this.initialize(img.riak);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.spawal1 = function() {
	this.initialize(img.spawal1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,221);


(lib.spawal2 = function() {
	this.initialize(img.spawal2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,353);


(lib.surface = function() {
	this.initialize(img.surface);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,243);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.endsc();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.endsp();
	this.instance.setTransform(-156,-242,2.1046,2.1046);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156,-242,315.7,631.4);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.spawal1();
	this.instance.setTransform(-371,-228,2.1906,2.1904);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-371,-228,438.1,484.1);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bg();
	this.instance.setTransform(-240,-701.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-701.5,480,1403);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.spawal2();
	this.instance.setTransform(-385,-271,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-385,-271,480,529.5);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.surface();
	this.instance.setTransform(-240,-265.1,2.1818,2.1819);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-265.1,480,530.2);


(lib.riak_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.riak();
	this.instance.setTransform(-250,-273,1.0665,1.0665);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.riak_1, new cjs.Rectangle(-250,-273,320,639.9), null);


(lib.bola = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.bolabola();
	this.instance.setTransform(-407,-468,2.4587,2.4587);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bola, new cjs.Rectangle(-407,-468,786.8,1180.2), null);


(lib.gabung = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bola
	this.instance = new lib.bola();
	this.instance.setTransform(352.55,287.3,0.3679,0.3679,0,0,0,0,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gabung, new cjs.Rectangle(202.8,114.5,289.5,434.20000000000005), null);


// stage content:
(lib.KV3300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ghw_png
	this.instance = new lib.ghw();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));

	// Layer_6
	this.instance_1 = new lib.Tween13("synched",0);
	this.instance_1.setTransform(150,300);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(67).to({_off:false},0).to({alpha:1},24).wait(59));

	// Layer_18
	this.instance_2 = new lib.gabung();
	this.instance_2.setTransform(57.35,986.45,0.9648,0.9645,0,0,0,240.8,265.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(57).to({_off:false},0).to({x:53.6,y:236.25},11,cjs.Ease.quintOut).wait(82));

	// Layer_17 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_35 = new cjs.Graphics().p("EgAGAjzQoBgCnFhoQlAhKkMh1IgDgCQhUglhPgpQhog2hSg4Ig9gsUgAMgAKgF3g5GIgDggIglliMBLAAEiMgD9A9QQjCA/i9A0IiLAlIhBARQqLChpXAhQiRAIiNAAIgeAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(35).to({graphics:mask_graphics_35,x:150.05,y:125.08}).wait(115));

	// Layer_15
	this.instance_3 = new lib.gabung();
	this.instance_3.setTransform(77.25,-519.15,1.1111,1.1111,0,0,0,273.9,301.4);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({_off:false},0).to({scaleX:1.0225,scaleY:1.0224,x:76.05,y:-236.8},9,cjs.Ease.quintIn).wait(1).to({regX:347.5,regY:331.6,x:151.3,y:-122.85,alpha:0.9653},0).wait(1).to({y:-38.8,alpha:0.9303},0).wait(1).to({y:45.3,alpha:0.8952},0).wait(1).to({y:128.25,alpha:0.8606},0).wait(1).to({y:208.75,alpha:0.8269},0).wait(1).to({y:285.4,alpha:0.7949},0).wait(1).to({y:356.7,alpha:0.7652},0).wait(1).to({regX:273.9,regY:301.4,x:76.05,y:390.15,alpha:0.7383},0).to({regX:297.6,regY:327.6,x:100.3,y:598.95,alpha:0},4).wait(94));

	// Layer_1
	this.instance_4 = new lib.riak_1();
	this.instance_4.setTransform(237.15,1036.1);
	this.instance_4.alpha = 0;
	this.instance_4.compositeOperation = "hard-light";
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(57).to({_off:false},0).to({x:240,y:265.3,alpha:0.3008},10,cjs.Ease.quintOut).to({alpha:0.3516},6).to({alpha:0},8).wait(69));

	// Layer_2
	this.instance_5 = new lib.Tween12("synched",0);
	this.instance_5.setTransform(150,225,0.7121,0.7121);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(63).to({_off:false},0).to({scaleX:0.9375,scaleY:0.9375,alpha:1},7,cjs.Ease.sineOut).wait(80));

	// spawal2_png
	this.instance_6 = new lib.Tween2("synched",0);
	this.instance_6.setTransform(308.15,438.85,0.5318,0.0615,0,0,0,126.2,188.7);
	this.instance_6.alpha = 0.5195;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(51).to({_off:false},0).to({regX:126.1,regY:188.2,scaleX:1,scaleY:2.7049,x:352.1,y:329.4,alpha:1},6).to({regX:126,regY:188.1,scaleY:3.0676,x:366,y:-537.85},11,cjs.Ease.quintOut).wait(82));

	// spawal1_png
	this.instance_7 = new lib.Tween11("synched",0);
	this.instance_7.setTransform(274.1,390.1,0.637,0.1416,0,0,0,82.1,182.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50).to({_off:false},0).to({regX:82,regY:182.1,scaleX:1,scaleY:1,x:322,y:399.1},2).to({y:333.1},5).to({y:-505.05},11,cjs.Ease.quintOut).wait(82));

	// a
	this.instance_8 = new lib.gabung();
	this.instance_8.setTransform(42.25,225.65,1.0247,1.0247,0,0,0,240.8,265.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({y:121.65},8,cjs.Ease.quintIn).wait(1).to({regX:347.5,regY:331.6,x:151.6,y:168.4,alpha:0.9655},0).wait(1).to({y:138.35,alpha:0.9171},0).wait(1).to({y:94.8,alpha:0.847},0).wait(1).to({y:29.7,alpha:0.7421},0).wait(1).to({y:-70.25,alpha:0.5811},0).wait(1).to({y:-221.85,alpha:0.337},0).wait(1).to({regX:240.8,regY:265.1,x:42.25,y:-499.25,alpha:0},0).wait(123));

	// surface_png
	this.instance_9 = new lib.Tween1("synched",0);
	this.instance_9.setTransform(329.85,315.85);
	this.instance_9.alpha = 0.2813;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(17).to({_off:false},0).to({x:60,y:315.05,alpha:1},35,cjs.Ease.sineOut).to({_off:true},1).wait(97));

	// bg_jpg
	this.instance_10 = new lib.Tween4("synched",0);
	this.instance_10.setTransform(149,701.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(57).to({startPosition:0},0).to({x:150,y:-171.5},11,cjs.Ease.quintOut).wait(82));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgY/gwbMAx/AAAMAAABg3Mgx/AAAg");
	this.shape.setTransform(150,300);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgY/AwcMAAAhg3MAx/AAAMAAABg3g");
	this.shape_1.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(150));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-1646.5,599.9,3049.5);
// library properties:
lib.properties = {
	id: 'A5973BB2CC7C1F48B3E654842E8563ED',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/bolabola.png", id:"bolabola"},
		{src:"images/endsc.png", id:"endsc"},
		{src:"images/endsp.png", id:"endsp"},
		{src:"images/ghw.png", id:"ghw"},
		{src:"images/riak.jpg", id:"riak"},
		{src:"images/spawal1.png", id:"spawal1"},
		{src:"images/spawal2.png", id:"spawal2"},
		{src:"images/surface.png", id:"surface"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A5973BB2CC7C1F48B3E654842E8563ED'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;