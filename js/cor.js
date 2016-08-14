function grayScale(){
	var pixels = getPixels();
	var Olho = new Sensibilidade();
	for (var i = 0; i < pixels.data.length; i += 4){
	    var v = (Olho.r * pixels.data[i]) + (Olho.g * pixels.data[i+1]) + (Olho.b * pixels.data[i+2]);
	    pixels.data[i] = pixels.data[i+1] = pixels.data[i+2] = v;
	}
	setPixels(pixels);
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