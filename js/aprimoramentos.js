
function getCanvas(){
	var canvas = document.getElementById("MeuCanvas");
	var context = canvas.getContext("2d");
	return context;
}


function getPixels(){
	var context = getCanvas();
	var pixels = context.getImageData(0,0,MeuCanvas.width,MeuCanvas.height);
	return pixels;
}

function setPixels(pixels){
	var context = getCanvas();
	context.putImageData(pixels,0,0);
}

function Reset(){
	setPixels(original);
}

//Sensibilidade do Olho Humano de acordo com cada cor.
var Sensibilidade = function(){
	this.r = 0.299;
	this.g = 0.587;
	this.b = 0.114;
}


function grayScale(){
	var pixels = getPixels();
	var Olho = new Sensibilidade();
	for (var i = 0; i < pixels.data.length; i += 4){
	    var v = (Olho.r * pixels.data[i]) + (Olho.g * pixels.data[i+1]) + (Olho.b * pixels.data[i+2]);
	    pixels.data[i] = pixels.data[i+1] = pixels.data[i+2] = v;
	}
	setPixels(pixels);
}

function brightness(ajuste){
	var pixels = getPixels();
	for(var i = 0; i < pixels.data.length; i += 4){
		pixels.data[i] += ajuste;
		pixels.data[i+1] += ajuste;
		pixels.data[i+2] += ajuste;
	}
	setPixels(pixels);
}

function saturation(ajuste){
	if(ajuste <= 0){
		grayScale();
	}else{
		var pixels = getPixels();
		var Olho = new Sensibilidade();
		for(var i = 0; i < pixels.data.length; i += 4){
			var p = Math.sqrt( ((pixels.data[i]^2) * Olho.r) + ((pixels.data[i+1]^2) * Olho.g) + ((pixels.data[i+2]^2) * Olho.b));
			pixels.data[i] = p + (pixels.data[i]-p) * ajuste;
			pixels.data[i+1] = p + (pixels.data[i+1]-p) * ajuste;
			pixels.data[i+2] = p + (pixels.data[i+2]-p) * ajuste;
		}
		setPixels(pixels);
	}
}

function sepia(){
	var pixels = getPixels();
	var Olho = new Sensibilidade();
	for (var i = 0; i < pixels.data.length; i += 4){
	    var v = (Olho.r * pixels.data[i]) + (Olho.g * pixels.data[i+1]) + (Olho.b * pixels.data[i+2]);
	    pixels.data[i] = v + 100;
	    pixels.data[i+1] = v + 50;
	    pixels.data[i+2] = v + 0;

	}
	setPixels(pixels);
}

function negative(){
	var pixels = getPixels();
	for(var i = 0; i < pixels.data.length; i += 4){
		pixels.data[i] = 255 - pixels.data[i];
		pixels.data[i+1] = 255 - pixels.data[i+1];
		pixels.data[i+2] = 255 - pixels.data[i+2];
	}
	setPixels(pixels);
}

function RGB_Levels(r,g,b){
	var pixels = getPixels();
	var Olho = new Sensibilidade();
	for (var i = 0; i < pixels.data.length; i += 4){
	    pixels.data[i] += r ;
	    pixels.data[i+1] += g;
	    pixels.data[i+2] += b;
	}
	setPixels(pixels);
}

function noise(ajuste){
	var pixels = getPixels();
	for(var i = 0; i < pixels.data.length; i += 4){
		var num = (0.5 - Math.random()) * ajuste;
		pixels.data[i] = (pixels.data[i] + num);
		pixels.data[i+1] = (pixels.data[i+1] + num);
		pixels.data[i+2] = (pixels.data[i+2] + num);
	}
	setPixels(pixels);
}

function sharpen(ajuste){
	var pixels = getPixels();
	
	for(var i = 0; i < pixels.data.length; i += 4){

	}
	setPixels(pixels);
}





