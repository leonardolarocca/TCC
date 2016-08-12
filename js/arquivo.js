//Importar
function upfile(){
   var e = $("#inputfile");
	var file = inputfile.files[0],
        imageType = /image.*/;
    if (!file.type.match(imageType))
        return;
    var reader = new FileReader();
    reader.onload = fileOnload;
    reader.readAsDataURL(file);
    $("body").append("<img  style='opacity: 0;'>");

};

var original;

function fileOnload(e) {
    var $img = $('img').attr('src', e.target.result);
    $img.load(function() {
        var canvas = document.getElementById('MeuCanvas');
        var context = canvas.getContext('2d');
		$('#MeuCanvas').attr({
				width:this.width,
				height:this.height
		});
        context.drawImage(this, 0, 0);
    	$("img").remove();
    	original = context.getImageData(0,0,MeuCanvas.width,MeuCanvas.height);
    });
}	



//Novo Documento
function novo(altura, largura){
	$('#MeuCanvas').attr({
		width:largura,
		height:altura
	});
	var canvas = document.getElementById('MeuCanvas');
	var ctx = canvas.getContext('2d');
	var branco = 'rgba(255,255,255,1)';
	ctx.fillStyle = branco;
	ctx.fillRect(0,0,largura,altura);
}


//Fazer download como PNG / Imprimir
function salvarPNG(){
	var canvas = document.getElementById('MeuCanvas');
	var img = canvas.toDataURL('image/png');
	window.open(
		img, '_blank'
	);
}

//Checa se há algum documento para salvar ou imprimir, 
//caso nao haja retorna uma pagina em branco

