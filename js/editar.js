var img = new Image();
var ctx = getCanvas();
var angulo = 0;

function Rotacionar(angulo){
	img.src = reader.result;
	ctx.clearRect(0,0,MeuCanvas.width,MeuCanvas.height);
    ctx.save();
    if(angulo == 90 || angulo == 270){
    	ctx.translate(MeuCanvas.height/2,MeuCanvas.width/2);
    }else{
		ctx.translate(MeuCanvas.width/2,MeuCanvas.height/2);
    }
    ctx.rotate(angulo*Math.PI/180);
    ctx.drawImage(img,-img.width/2,-img.width/2);
    ctx.restore();

}

function Rotate90CW(){
	angulo += 90;
	Rotacionar(angulo);
		
}

function Rotate90CCW(){
	angulo -= 90;
	Rotacionar(angulo);
}

function Rotate180(){
	angulo += 180;
	Rotacionar(angulo);
}

