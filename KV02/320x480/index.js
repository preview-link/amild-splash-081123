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



(lib.amild = function() {
	this.initialize(img.amild);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.baru = function() {
	this.initialize(img.baru);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,530);


(lib.bola = function() {
	this.initialize(img.bola);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,773);


(lib.ghw = function() {
	this.initialize(img.ghw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.info = function() {
	this.initialize(img.info);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.sp = function() {
	this.initialize(img.sp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);// helper functions:

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


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.text();
	this.instance.setTransform(-240,-265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-265,320,480);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shadow();
	this.instance.setTransform(-240,-265.1,2.1818,2.1819);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-265.1,698.2,1047.3000000000002);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.baru();
	this.instance.setTransform(-240,-265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-265,320,480);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.info();
	this.instance.setTransform(-240,-265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-265,320,480);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.text();
	this.instance.setTransform(-240,-265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-265,320,480);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.amild();
	this.instance.setTransform(-496.35,-548.05,2.0681,2.0681);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-496.3,-548,661.8,992.7);


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
	this.instance = new lib.sp();
	this.instance.setTransform(-506,-549,3.8538,3.8538);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-506,-549,1233.2,1849.8);


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
	this.instance = new lib.shadow();
	this.instance.setTransform(-240,-265.1,2.1818,2.1819);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-265.1,698.2,1047.3000000000002);


(lib.bola_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0_ai (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgDXA2uQgsAAhKgGQhVgIghgBQhMgDhlgRIiughQgkgGhGgWQhHgWgjgHQhKgOiLg5QiJg4hLgOQgRgDgRgTQgTgWgMgGQkfiHj8jAQlukXkSlyQklmNimnwQgPgvgKgEQgLgFguATIgSAIQgQAJgGABQgNACgKgLQgQgSAIgSQAKgdAfgCQA+gFAIgKQAHgLgSg6QgDgQgDgIQgGgNgPAGQgcAJgIAFQgSAMAFATQAGAXgNAVIgXAkQgEAHgGAEQgHAEgHgFQgNgIgUgCIgigFQg5gQAFgqQAEgbAQgPQARgRAbABQA1ADAigXQAigXATgyQAKgbgFgZQhElVAClkQAAgYgCgPQgEgVgKgRQgMgUAGgaQADgPANgcQAjhIgOhIQgFgaAIgYQAPguAMhcQANhfANgrQAKgfAYhqQAShVAWgzQA3h+AhhhQAQgwgKgwQgLgwgigeQgRgOAFgTIAOgdQAGgPAOAAQANAAANALQAUASAJgFQAJgEABgbQAEhfA0g8QAYgdgsgUQgSgJgegLIgwgUQgwgTAVghQALgSASADQAMACAUANICZBoQARAMANgEQAMgDALgRQAlhAAUggQAhg3AjghQANgNAAgNQACgtAlgkQAugmAVgUQAfgeBihsQCNiYCSh9QAnghgCgPQgCgOgtgUQg0gXgMg4QgMg6AugVQATgJAlglQAkgcAmAZQAEADAGgBQAFgCACgFQACgFgDgHIgGgLQgSg0gzgTQgRgGhPgKQgfgEgOgIQgSgLgEgbQgCgSgOgNQgIgHgUgMQglgWgRgWQgKgOAAgMQAAgNAMgOQAXgXAaASQAtAeATAfQANAXAPAJQASAMAagEQAWgEAdASQAQAKAeAWQAbAOAcgWQAIgGAJAIQAIAIAEALQAKAcAfAhQApAsAIAMQAJAPAZADIArAEQBeAWBCgoQBCgoAZheQAEgNARgXQARgVADgQQAPhLgehGQgTgrAMgdQAJgXALgMQAOgQAUgCQASgDAOANQAHAHAOAVIALARQAgApAAAdQgBAfgnAeQgbAUgGAdQgCAIgDAtIgDAnQAAAXANAHQAMAHAQgOQAZgVAFgCQAQgHARgPQAegZACgXQACgWgYgeQgTgZgEgSQgGgZATgWQAQgTATAGQAJADAFAHQAGAHgBAJQgBAOAHAnQAGAigFAVQgIAjAOALQAPALAjgOQFJiCElgsQE+gwEnAFQBsABCDAOQBgAKCQAVQBqAPCWAqID8BJIAMAEQAIABAHgFQgjgdAMgPQAHgIAmgNQAUgFALgQQAKgOAFgXQAFgnAFgTQAIghAbgPQgIgPgBgFQgDgMAKgHQATgQAKgeQAJgjAGgSQAPAHABANQAAADgDATIgIAjQgDAUAJAQQAHAMgQAGQgRAGABAJQAQABAIAEQALAGACAOQABANgIAJQgIAHgLAEQgUAFgHANQgHANAGARQANAmgTApQgLAYgcAtIBWAgQAxARAoAIQAbAFAcAOQAUAKAgAUQByBJE5C/QASALAKAEQAQAGAQgEQATgEATAOIAeAaQApAkAUAEQAVADAwgZQAkgTAeABQARABAKAEQANAGADAPQAJAgghARQgRAHgIAFQgOAHABAOQABAQAQAHQAKADATAEQBzAgAtBNQAcAtAKAjQAOAugLAuQgFAVAXAZIAoApQAFAGAPANQAOALAFAIQANAVATAGQANAEAggCQAmgCA2gMIBagVQAggFAOARQAOARgMAgQgNAlAfAeQAPAOATACQATACAOgNQAPgQAfgCQAjgCAMgGQAKgGAGAJQAEAGAEAOQAHAXAFAHQALAPAZAFQgyAHgjAZQgeAWgZAoIBWgtQADgBABgOQABgJALAFQALAFgBAMIgEAWQgHASARALIAHAEQADgGAMgFQADgBAOAQQAKAMAJgZIAGAEQADABABACQAFAPAAAHQABANgKAGQgSAMgIACQgQADgMgRQgRgDgFABQgJACAPASQAKAMAVAVQAQAUgDAZQgBAMAOAIQAPAJARgOQAJgGBEgpQAvgdAYgdQAXgeAtATQAPAHAFAMQADAJgCARQgDAVgMAMQgLALgWAGQhHARgWAJQg0ASghAeQgJAIgPAJIgbANQghARgfgeQggghAWgeQARgZgKgRQgHgMgbgPQgQgIgWgCIgogCQgagCgIAgQgJAeASAaQAEAGAMANQALALAFAIQAYApgDANQgEAOgoAZQgUAOgCALQgCANATAPQAVARAKAmQAGAXAXASQAHAGAmAVQAcAQAHAPQAKAUgWAbQgLAMgCAXIACAjQACAZAAAzQACAuAKAgQBbEOAbDxQAEAiATAaQAZAgAKAmQAJAlAaAUQAbATAkgDQAigDAEASQADANAJAaQAHAYgKAR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");
	mask.setTransform(2.9929,-13.2047);

	// Layer_1
	this.instance = new lib.bola();
	this.instance.setTransform(-351,-386,1.0029,1.0029);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bola_1, new cjs.Rectangle(-341.5,-363.5,689,700.6), null);


(lib.bg2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bg2();
	this.instance.setTransform(-350,-265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(-350,-265,700,530), null);


// stage content:
(lib._320x480 = function(mode,startPosition,loop,reversed) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(146));

	// Layer_10
	this.instance_1 = new lib.shadow();
	this.instance_1.setTransform(0,0,2.1818,2.1819);

	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.setTransform(240,265.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},34).to({state:[{t:this.instance_2}]},11).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).to({alpha:0},11).wait(101));

	// Layer_11
	this.instance_3 = new lib.bg2_1();
	this.instance_3.setTransform(130,265);
	this.instance_3.compositeOperation = "darken";

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:130.1132},0).wait(1).to({x:130.4548},0).wait(1).to({x:131.0279},0).wait(1).to({x:131.8355},0).wait(1).to({x:132.8806},0).wait(1).to({x:134.166},0).wait(1).to({x:135.6944},0).wait(1).to({x:137.4683},0).wait(1).to({x:139.4902},0).wait(1).to({x:141.7621},0).wait(1).to({x:144.2861},0).wait(1).to({x:147.0637},0).wait(1).to({x:150.0962},0).wait(1).to({x:153.3845},0).wait(1).to({x:156.9291},0).wait(1).to({x:160.73},0).wait(1).to({x:164.7865},0).wait(1).to({x:169.0975},0).wait(1).to({x:173.6608},0).wait(1).to({x:178.4738},0).wait(1).to({x:183.5327},0).wait(1).to({x:188.8328},0).wait(1).to({x:194.3682},0).wait(1).to({x:200.132},0).wait(1).to({x:206.1154},0).wait(1).to({x:212.3087},0).wait(1).to({x:218.7002},0).wait(1).to({x:225.2763},0).wait(1).to({x:232.0218},0).wait(1).to({x:238.9193},0).wait(1).to({x:245.949},0).wait(1).to({x:253.0891},0).wait(1).to({x:260.3151},0).wait(1).to({x:267.6},0).wait(1).to({x:275.7639,alpha:0.9009},0).wait(1).to({x:283.9247,alpha:0.8019},0).wait(1).to({x:292.0437,alpha:0.7034},0).wait(1).to({x:300.0793,alpha:0.6058},0).wait(1).to({x:307.9873,alpha:0.5099},0).wait(1).to({x:315.7207,alpha:0.416},0).wait(1).to({x:323.2307,alpha:0.3249},0).wait(1).to({x:330.4663,alpha:0.2371},0).wait(1).to({x:337.3753,alpha:0.1532},0).wait(1).to({x:343.9044,alpha:0.074},0).wait(1).to({x:350,alpha:0},0).wait(101));

	// text_png
	this.instance_4 = new lib.Tween10("synched",0);
	this.instance_4.setTransform(240,265);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(64).to({_off:false},0).to({alpha:1},15,cjs.Ease.sineOut).wait(67));

	// Layer_13
	this.instance_5 = new lib.Tween6("synched",0);
	this.instance_5.setTransform(240,265);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(64).to({_off:false},0).to({alpha:1},15,cjs.Ease.sineOut).wait(67));

	// info_png
	this.instance_6 = new lib.Tween7("synched",0);
	this.instance_6.setTransform(240,265);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(64).to({_off:false},0).to({alpha:1},15,cjs.Ease.sineOut).wait(67));

	// baru_png
	this.instance_7 = new lib.Tween8("synched",0);
	this.instance_7.setTransform(241,265);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(64).to({_off:false},0).to({alpha:1},15,cjs.Ease.sineOut).wait(67));

	// shadow_png
	this.instance_8 = new lib.Tween9("synched",0);
	this.instance_8.setTransform(110.05,121.6,0.4583,0.4583,0,0,0,0.1,0.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(64).to({_off:false},0).to({alpha:1},6,cjs.Ease.sineOut).wait(76));

	// amild_png
	this.instance_9 = new lib.Tween5("synched",0);
	this.instance_9.setTransform(128.05,188.3,1.1765,1.1764,0,0,0,-163.1,-90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(45).to({startPosition:0},0).wait(1).to({regX:-165.4,regY:-51.7,scaleX:1.1674,scaleY:1.1673,x:125.75,y:233.95},0).wait(1).to({scaleX:1.1402,scaleY:1.1401,x:127,y:234.1},0).wait(1).to({scaleX:1.0947,scaleY:1.0946,x:129.15,y:234.35},0).wait(1).to({scaleX:1.0309,scaleY:1.0308,x:132.15,y:234.7},0).wait(1).to({scaleX:0.9485,scaleY:0.9484,x:135.95,y:235.1},0).wait(1).to({scaleX:0.8475,scaleY:0.8474,x:140.7,y:235.7},0).wait(1).to({scaleX:0.7278,scaleY:0.7277,x:146.3,y:236.35},0).wait(1).to({scaleX:0.5892,scaleY:0.5892,x:152.75,y:237.1},0).wait(1).to({regX:-163.1,regY:-90.7,scaleX:0.4318,scaleY:0.4318,x:161.1,y:221.15},0).wait(1).to({regX:-165.4,regY:-51.7,scaleX:0.4563,scaleY:0.4563,x:159.95,y:238.9},0).wait(1).to({regX:-163.2,regY:-90.7,scaleX:0.4835,scaleY:0.4835,x:161.1,y:221.15},0).wait(90));

	// Layer_12
	this.instance_10 = new lib.bola_1();
	this.instance_10.setTransform(135.4,198.85,0.7087,0.7086,0,0,0,1,2.4);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(41).to({_off:false},0).to({alpha:1},4).to({regX:0.6,regY:2.2,scaleX:0.2476,scaleY:0.2476,x:165.15,y:217.6},9,cjs.Ease.sineIn).to({regY:2.1,scaleX:0.262,scaleY:0.262},2,cjs.Ease.quintIn).wait(90));

	// sp_png
	this.instance_11 = new lib.Tween4("synched",0);
	this.instance_11.setTransform(181.4,218.65,0.2684,0.2684,0,0,0,159.3,260.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(41).to({_off:false},0).to({scaleX:0.7546,scaleY:0.7546,alpha:1},4).to({scaleX:0.2897,scaleY:0.2897},9,cjs.Ease.sineIn).to({regX:159.6,regY:260.4,scaleX:0.4652,scaleY:0.4652,x:181.5,y:218.75},2,cjs.Ease.quintIn).wait(1).to({regX:110.6,regY:375.9,scaleX:0.463,scaleY:0.463,x:158.8,y:272.2},0).wait(1).to({scaleX:0.4599,scaleY:0.4599,x:158.9,y:271.85},0).wait(1).to({scaleX:0.4553,scaleY:0.4553,x:159.15,y:271.3},0).wait(1).to({scaleX:0.4477,scaleY:0.4477,x:159.5,y:270.4},0).wait(1).to({scaleX:0.4342,scaleY:0.4342,x:160.15,y:268.85},0).wait(1).to({scaleX:0.4076,scaleY:0.4076,x:161.5,y:265.75},0).wait(1).to({scaleX:0.3494,scaleY:0.3494,x:164.3,y:259.05},0).wait(1).to({regX:159.3,regY:260,scaleX:0.2263,scaleY:0.2263,x:181.4,y:218.65},0).to({regY:260.1,scaleX:0.2595,scaleY:0.2595,x:172.65,y:209.95},3).wait(79));

	// bg1_jpg
	this.instance_12 = new lib.bg1();

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(146));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgajgnDMA1HAAAMAAABOHMg1HAAAg");
	this.shape.setTransform(160,240);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgajAnEMAAAhOHMA1HAAAMAAABOHg");
	this.shape_1.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(146));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-160.6,-151.9,860.6,1199.2);
// library properties:
lib.properties = {
	id: 'DCDDFFDED0B44B4FB597AF075060A882',
	width: 320,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/amild.png", id:"amild"},
		{src:"images/baru.png", id:"baru"},
		{src:"images/bg1.jpg", id:"bg1"},
		{src:"images/bg2.jpg", id:"bg2"},
		{src:"images/bola.jpg", id:"bola"},
		{src:"images/ghw.png", id:"ghw"},
		{src:"images/info.png", id:"info"},
		{src:"images/shadow.png", id:"shadow"},
		{src:"images/sp.png", id:"sp"},
		{src:"images/text.png", id:"text"}
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
an.compositions['DCDDFFDED0B44B4FB597AF075060A882'] = {
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