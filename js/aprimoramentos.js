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


//implementar essa funcao para um ajuste de control z
function history(pixels){
}

function grayScale(){
	var pixels = getPixels();
	for (var i = 0; i < pixels.data.length; i += 4){
		var r = pixels.data[i];
		var g = pixels.data[i+1];
		var b = pixels.data[i+2];
	    var v = (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
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
	var pixels = getPixels();
	const Pr = 0.299;
	const Pg = 0.587;
	const Pb = 0.114;
	for(var i = 0; i < pixels.data.length; i += 4){
		var r = pixels.data[i];
		var g = pixels.data[i+1];
		var b = pixels.data[i+2];
		var p = Math.sqrt((r^2)*Pr + (g^2)*Pg + (b^2)*Pb);
		pixels.data[i] = p + (r-p) * ajuste;
		pixels.data[i+1] = p + (g-p) * ajuste;
		pixels.data[i+2] = p + (b-p) * ajuste;
	}
	setPixels(pixels);
}






