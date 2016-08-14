function Filtro(ajuste, matrix, divisor, offset) {
  var pixels = getPixels();
  var m = [].concat(matrix[0], matrix[1], matrix[2]); 

  if (!divisor) {
    divisor = m.reduce(function(a, b){return a + b;}) || 1;
  }
  var largura = pixels.width;
  var tamanho = pixels.data.length;
  var multiplicador  = [];

  while (ajuste > 0) {
	  for(var i = 0; i < tamanho; i++){
	  	if((i+1) % 4 === 0){
	  		pixels.data[i] = pixels.data[i];
	  		continue;
	  	}
			multiplicador = [
				pixels.data[i - largura * 4 - 4] || pixels.data[i],
				pixels.data[i - largura * 4]     || pixels.data[i],
				pixels.data[i - largura * 4 + 4] || pixels.data[i],
				pixels.data[i - 4]               || pixels.data[i],
				pixels.data[i],
				pixels.data[i + 4]               || pixels.data[i],
				pixels.data[i + largura * 4 - 4] || pixels.data[i],
				pixels.data[i + largura * 4]     || pixels.data[i],
				pixels.data[i + largura * 4 + 4] || pixels.data[i]
			];

		  var resultado = 0;

		  for(var j = 0; j < 9; j++){
		  	resultado += multiplicador[j] * m[j]; 
		  }
		  
		  resultado /= divisor;

		  if(offset){
		  	resultado += offset;
		  }

		  pixels.data[i] = resultado;
	  	}
	  	ajuste--;
	}
  setPixels(pixels);
};


var matrizes = [
	{
		name: "mean removal - sharpen",
		data:[[-1, -1, -1,],
			  [-1, 9, -1,],
			  [-1, -1, -1,]]
	},

	{
		name: 'sharpen',
		data:
		 [[ 0, -1,  0],
		  [-1, 11, -1],
		  [ 0, -1,  0]]
  	},

  	{
	    name: 'blur',
	    data:
	     [[ 1,  2,  1],
	      [ 2,  4,  2],
	      [ 1,  2,  1]]
  	},

  	{
	    name: 'emboss',
	    data:
	     [[ 2,  0,  0],
	      [ 0, -1,  0],
	      [ 0,  0, -1]],
	    offset: 127,
  	},

  	{
	    name: 'emboss subtle',
	    data:
	     [[ 1,  1, -1],
	      [ 1,  3, -1],
	      [ 1, -1, -1]]
  	},

  	{
	    name: 'edge detect',
	    data:
	     [[ 1,  1,  1],
	      [ 1, -7,  1],
	      [ 1,  1,  1]]
  	},

  	{
	    name: 'edge detect 2',
	    data:
	     [[-5,  0,  0],
	      [ 0,  0,  0],
	      [ 0,  0,  5]]
  	},
	{
		name: "contrast",
		data:[[-1, 0, -1],
			  [1, 0, 0],
			  [0, -1, 1]
		]
	}
];

