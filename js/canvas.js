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

function resetCanvas(){
	// MeuCanvas.width = img.width;
	// MeuCanvas.height = img.height;
	angulo = 0;
	setPixels(original);
	// ctx.drawImage(img,0,0);
}

//Sensibilidade do Olho Humano de acordo com cada cor.
var Sensibilidade = function(){
	this.r = 0.299;
	this.g = 0.587;
	this.b = 0.114;
}
