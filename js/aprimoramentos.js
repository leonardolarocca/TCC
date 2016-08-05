function getCanvas(){
	var canvas = document.getElementById("MeuCanvas");
	var context = canvas.getContext("2d");
	return context;
}

function getPixels(){
	var context = getCanvas();
	var pixels = context.getImageData(0,0,MeuCanvas.width,MeuCanvas.height);
	// console.log(pixels);
	return pixels;
}

function setPixels(pixels){
	var context = getCanvas();
	context.putImageData(pixels,0,0);
}

function grayScale(){
	var pixels = getPixels();
	var tamanho = ((MeuCanvas.width*MeuCanvas.height)*4);
	console.log(tamanho);
	for (var i = 0; i < tamanho; i += 4){
		var r = pixels.data[i];
		var g = pixels.data[i+1];
		var b = pixels.data[i+2];
	    var v = (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
	    pixels.data[i] = pixels.data[i+1] = pixels.data[i+2] = v;
	}
	console.log(pixels);
	setPixels(pixels);
}






