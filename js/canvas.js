function getCanvas(){
	var context = document.getElementById("MeuCanvas").getContext("2d");
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

// function normalize(pixels){
// 	var min, max, normalized, avg, total;
// 	min = Math.min.apply(null, pixels);
// 	max = Math.max.apply(null, pixels);
// 	for(i = 0; i < pixels.length; i++){
// 		total += pixels[i];
// 	}
// 	avg = total/pixels.length;
// 	normalized = (255 / (max - min)) * (avg - min)
// 	var valor = [normalized,normalized,normalized,1]
// 	return valor;
// }
