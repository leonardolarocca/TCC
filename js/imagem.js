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

function brightness(ajuste){
	var pixels = getPixels();
	for(var i = 0; i < pixels.data.length; i += 4){
		pixels.data[i] += ajuste;
		pixels.data[i+1] += ajuste;
		pixels.data[i+2] += ajuste;
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

// As funções de Nitidez e Desfoque estão dentro de filtro.js 'cada um tem sua matriz correspondente'








