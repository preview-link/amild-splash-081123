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
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.endsp = function() {
	this.initialize(img.endsp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,240);


(lib.ghw = function() {
	this.initialize(img.ghw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.riak = function() {
	this.initialize(img.riak);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


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
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


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

	// Layer_1
	this.instance = new lib.endsp();
	this.instance.setTransform(-159,-240,1.995,1.995);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-240,319.2,478.8);


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
	this.instance.setTransform(-404,-266,2.4206,2.4203);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-404,-266,484.1,534.9);


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

}).prototype = getMCSymbolPrototype(lib.riak_1, new cjs.Rectangle(-250,-273,341.3,511.9), null);


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
(lib.KV3320x480 = function(mode,startPosition,loop,reversed) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(152));

	// Layer_5
	this.instance_1 = new lib.Tween13("synched",0);
	this.instance_1.setTransform(160,240);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({_off:false},0).to({alpha:1},24,cjs.Ease.sineIn).wait(59));

	// Layer_18
	this.instance_2 = new lib.gabung();
	this.instance_2.setTransform(58.55,1055.4,0.7581,0.7578,0,0,0,240.8,265.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(57).to({_off:false},0).to({x:80.55,y:205.2},13,cjs.Ease.quintOut).wait(82));

	// Layer_17 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_35 = new cjs.Graphics().p("EgAGAjzQoBgCnFhoQmnhhlLiuQhog2hSg4Ig9gsUgAMgAKgF3g5GIgDggIglliMBLAAEiMgD9A9QQkJBWkBBCQqtCxp2AiQiRAIiNAAIgeAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(35).to({graphics:mask_graphics_35,x:150.05,y:125.08}).wait(117));

	// Layer_15
	this.instance_3 = new lib.gabung();
	this.instance_3.setTransform(77.25,-519.15,1.1111,1.1111,0,0,0,273.9,301.4);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({_off:false},0).to({y:-210.05},9,cjs.Ease.quintIn).wait(1).to({regX:347.5,regY:331.6,x:159,y:-93.45,alpha:0.9653},0).wait(1).to({y:-9.4,alpha:0.9303},0).wait(1).to({y:74.65,alpha:0.8952},0).wait(1).to({y:157.6,alpha:0.8606},0).wait(1).to({y:238.1,alpha:0.8269},0).wait(1).to({y:314.8,alpha:0.7949},0).wait(1).to({y:386.05,alpha:0.7652},0).wait(1).to({regX:273.9,regY:301.4,x:77.25,y:416.9,alpha:0.7383},0).to({y:598.95,alpha:0},4).wait(96));

	// Layer_1
	this.instance_4 = new lib.riak_1();
	this.instance_4.setTransform(234,1164.1);
	this.instance_4.alpha = 0;
	this.instance_4.compositeOperation = "hard-light";
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(57).to({_off:false},0).to({x:240,y:265.3,alpha:0.3984},13,cjs.Ease.quintOut).wait(7).to({alpha:0},10).wait(65));

	// Layer_2
	this.instance_5 = new lib.Tween12("synched",0);
	this.instance_5.setTransform(160,240,0.794,0.794);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(66).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.sineOut).wait(80));

	// spawal2_png
	this.instance_6 = new lib.Tween2("synched",0);
	this.instance_6.setTransform(308.15,438.85,0.5318,0.0615,0,0,0,126.2,188.7);
	this.instance_6.alpha = 0.5195;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(51).to({_off:false},0).to({regX:126.1,regY:188.2,scaleX:1,scaleY:2.7049,x:352.1,y:329.4,alpha:1},6).to({regX:126,regY:188.1,scaleY:3.0676,x:366,y:-537.85},13,cjs.Ease.quintOut).wait(82));

	// spawal1_png
	this.instance_7 = new lib.Tween11("synched",0);
	this.instance_7.setTransform(322.1,405.1,0.637,0.1416,0,0,0,82.1,182.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(49).to({_off:false},0).to({regX:82,regY:182.1,scaleX:1,scaleY:1,x:322,y:399.1},2).to({y:333.1},6).to({y:-505.05},13,cjs.Ease.quintOut).wait(82));

	// a
	this.instance_8 = new lib.gabung();
	this.instance_8.setTransform(40.45,162.45,1.1111,1.1111,0,0,0,240.8,264.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({y:119.4},8,cjs.Ease.quintIn).wait(1).to({regX:347.5,regY:331.6,x:159,y:172.6,alpha:0.9655},0).wait(1).to({y:143.05,alpha:0.9171},0).wait(1).to({y:100.35,alpha:0.847},0).wait(1).to({y:36.5,alpha:0.7421},0).wait(1).to({y:-61.5,alpha:0.5811},0).wait(1).to({y:-210.2,alpha:0.337},0).wait(1).to({regX:240.8,regY:264.9,x:40.45,y:-489.6,alpha:0},0).wait(125));

	// surface_png
	this.instance_9 = new lib.Tween1("synched",0);
	this.instance_9.setTransform(332.85,214.9);
	this.instance_9.alpha = 0.2813;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(17).to({_off:false},0).to({x:80,y:219.1,alpha:1},35,cjs.Ease.sineOut).to({_off:true},1).wait(99));

	// bg_jpg
	this.instance_10 = new lib.Tween4("synched",0);
	this.instance_10.setTransform(160,701.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(57).to({startPosition:0},0).to({y:-171.5},13,cjs.Ease.quintOut).wait(82));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgajgnDMA1HAAAMAAABOHMg1HAAAg");
	this.shape.setTransform(160,240);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgajAnEMAAAhOHMA1HAAAMAAABOHg");
	this.shape_1.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(152));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-1706.5,576.9,3109.5);
// library properties:
lib.properties = {
	id: 'A5973BB2CC7C1F48B3E654842E8563ED',
	width: 320,
	height: 480,
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