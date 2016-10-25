var reader = new FileReader();

//Importar
function upfile(){
   var e = $("#inputfile");
	var file = inputfile.files[0],
        imageType = /image.*/;
    if (!file.type.match(imageType))
        return;
    reader.onload = fileOnload;
    reader.readAsDataURL(file);
    $("body").append("<img style='opacity: 0;'>");

};

var original;


function fileOnload(e) {
    var $img = $('img').attr('src', e.target.result);
    $img.on('load', function() {
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

//Fazer download como PNG / Imprimir
function salvarPNG(){
	var canvas = document.getElementById('MeuCanvas');
	var img = canvas.toDataURL('image/png');
	window.open(
		img, '_blank'
	);
}
