//Chama o input escondido através do link
$(function(){
	$("#importar").on('click', function(e){
	    e.preventDefault();
	    $("#input:hidden").trigger('click');
	});
	$("#input").on('change', function(e){
		var file = e.target.files[0],
            imageType = /image.*/;

        if (!file.type.match(imageType))
            return;

        var reader = new FileReader();
        reader.onload = fileOnload;
        reader.readAsDataURL(file);
	});


	function fileOnload(e) {
        var $img = $('<img>', { src: e.target.result });
        $img.load(function() {
            var canvas = document.getElementById('MeuCanvas');
            var context = canvas.getContext('2d');
			$('#MeuCanvas').attr({
					width:this.width,
					height:this.height
			});
            context.drawImage(this, 0, 0);
        });
    }	
});

//Importar


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
var largura = $('MeuCanvas').attr('width');
var altura = $('MeuCanvas').attr('height');
if(altura == undefined || largura == undefined){
	$('#MeuCanvas').attr({
		width:0,
		height:0
	});
}
