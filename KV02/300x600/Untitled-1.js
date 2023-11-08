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



(lib.amildpngcopy = function() {
	this.initialize(img.amildpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.barupngcopy = function() {
	this.initialize(img.barupngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bg1jpgcopy = function() {
	this.initialize(img.bg1jpgcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bg2jpgcopy = function() {
	this.initialize(img.bg2jpgcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bola = function() {
	this.initialize(img.bola);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,773);


(lib.ghwpngcopy = function() {
	this.initialize(img.ghwpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.info = function() {
	this.initialize(img.info);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,1000);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.sp = function() {
	this.initialize(img.sp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);// helper functions:

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
p.nominalBounds = new cjs.Rectangle(-240,-265,300,600);


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
p.nominalBounds = new cjs.Rectangle(-240,-265.1,654.6,1309.1999999999998);


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
	this.instance = new lib.barupngcopy();
	this.instance.setTransform(-240,-265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-265,300,600);


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
p.nominalBounds = new cjs.Rectangle(-240,-265,500,1000);


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
p.nominalBounds = new cjs.Rectangle(-240,-265,300,600);


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
p.nominalBounds = new cjs.Rectangle(-506,-549,1156.2,2312.3);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.amildpngcopy();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


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


(lib.bg2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bg2jpgcopy();
	this.instance.setTransform(-350,-265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg2, new cjs.Rectangle(-350,-265,300,600), null);


// stage content:
(lib._300x600_OK = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ghwpngcopy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(142));

	// Layer_10
	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.setTransform(150,417);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:349.4,alpha:0},32).wait(110));

	// text_png
	this.instance_2 = new lib.Tween10("synched",0);
	this.instance_2.setTransform(240,265);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(52).to({_off:false},0).to({alpha:1},15,cjs.Ease.sineOut).wait(75));

	// Layer_13
	this.instance_3 = new lib.Tween6("synched",0);
	this.instance_3.setTransform(240,265);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(52).to({_off:false},0).to({alpha:1},15,cjs.Ease.sineOut).wait(75));

	// info_png
	this.instance_4 = new lib.Tween7("synched",0);
	this.instance_4.setTransform(165.95,300.1,0.6,0.6,0,0,0,36.6,235.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(52).to({_off:false},0).to({alpha:1},15).wait(75));

	// baru_png
	this.instance_5 = new lib.Tween8("synched",0);
	this.instance_5.setTransform(240,265);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(52).to({_off:false},0).to({x:239.8,y:264.75,alpha:1},15).wait(75));

	// shadow_png
	this.instance_6 = new lib.Tween9("synched",0);
	this.instance_6.setTransform(166.2,290,0.4583,0.4583,0,0,0,122.5,367.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(52).to({_off:false},0).to({alpha:1},6).wait(84));

	// amild_png copy 2
	this.instance_7 = new lib.Symbol1("synched",0);
	this.instance_7.setTransform(134.65,276.5,1.9999,1.9999,0,0,0,4.2,-29.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(40).to({_off:false},0).to({startPosition:0},2).to({regX:4.5,regY:-29.9,scaleX:1.0166,scaleY:1.0166,x:157.85,y:270.7},4).wait(96));

	// amild_png copy
	this.instance_8 = new lib.Symbol1("synched",0);
	this.instance_8.setTransform(134.65,276.5,1.9999,1.9999,0,0,0,4.2,-29.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).to({alpha:1},4).to({_off:true},12).wait(102));

	// amild_png
	this.instance_9 = new lib.Symbol1();
	this.instance_9.setTransform(134.85,276.5,1.9999,1.9999,0,0,0,4.3,-29.8);
	this.instance_9.compositeOperation = "darken";

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(28).to({_off:true},1).wait(113));

	// bola
	this.instance_10 = new lib.bola_1();
	this.instance_10.setTransform(163.4,246.7,0.7016,0.7016,0,0,0,0.1,1.6);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(14).to({_off:false},0).to({alpha:1},14).wait(14).to({regX:0.4,regY:1.8,scaleX:0.3628,scaleY:0.3628,x:163.45,y:256.8},4).wait(96));

	// bg2
	this.instance_11 = new lib.bg2();
	this.instance_11.setTransform(-0.8,602.1,2.0303,2.0303,0,0,0,-200,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:259.2},32).to({alpha:0},8).wait(102));

	// sp_png
	this.instance_12 = new lib.Tween4("synched",0);
	this.instance_12.setTransform(158.1,263.7,0.4352,0.4352,0,0,0,103.3,467.2);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(33).to({_off:false},0).to({regX:103.5,scaleX:0.5056,scaleY:0.5056,x:158.2,alpha:1},7,cjs.Ease.sineIn).to({startPosition:0},2).to({regX:102.9,regY:466.9,scaleX:0.2595,scaleY:0.2595,x:158,y:263.65},4).to({startPosition:0},3,cjs.Ease.sineIn).to({regX:103,scaleX:0.3247,scaleY:0.3247},4,cjs.Ease.sineIn).to({startPosition:0},2,cjs.Ease.sineIn).wait(1).to({regX:72.1,regY:607.1,scaleX:0.3221,scaleY:0.3221,x:148,y:308.8},0).wait(1).to({scaleX:0.3143,scaleY:0.3143,x:148.25,y:307.65},0).wait(1).to({scaleX:0.3013,scaleY:0.3013,x:148.65,y:305.85},0).wait(1).to({scaleX:0.283,scaleY:0.283,x:149.2,y:303.25},0).wait(1).to({regX:102.9,regY:466.9,scaleX:0.2595,scaleY:0.2595,x:158,y:263.65},0).wait(82));

	// bg1_jpg
	this.instance_13 = new lib.bg1jpgcopy();

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(142));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgY/gwbMAx/AAAMAAABg3Mgx/AAAg");
	this.shape.setTransform(150,300);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgY/AwcMAAAhg3MAx/AAAMAAABg3g");
	this.shape_1.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(142));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-155.4,36.1,719.1999999999999,1175.1000000000001);
// library properties:
lib.properties = {
	id: '6DBE9A32A3F6964D9DB04746C495D97A',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/amildpngcopy.png", id:"amildpngcopy"},
		{src:"images/barupngcopy.png", id:"barupngcopy"},
		{src:"images/bg1jpgcopy.jpg", id:"bg1jpgcopy"},
		{src:"images/bg2jpgcopy.jpg", id:"bg2jpgcopy"},
		{src:"images/bola.jpg", id:"bola"},
		{src:"images/ghwpngcopy.png", id:"ghwpngcopy"},
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
an.compositions['6DBE9A32A3F6964D9DB04746C495D97A'] = {
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