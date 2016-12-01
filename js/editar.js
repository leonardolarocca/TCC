// var img = new Image();
// var ctx = getCanvas();
// var angulo = 0;
//
// function Rotacionar(angulo){
//   if(angulo == 90 || angulo == 270){
//     MeuCanvas.width = img.height;
//     MeuCanvas.height = img.width;
//   }
//   ctx.clearRect(0,0,MeuCanvas.width,MeuCanvas.height);
//   ctx.save();
//   ctx.translate((MeuCanvas.width/2),(MeuCanvas.height/2));
//   ctx.rotate(angulo * Math.PI / 180);
//   //ctx.translate(MeuCanvas.width,MeuCanvas.height);
//   ctx.drawImage(img,-MeuCanvas.width/2,-MeuCanvas.height/2);
//   ctx.restore();
// }
//
//
// function Rotate90CW(){
// 	angulo += 90;
// 	Rotacionar(angulo);
//
// }
//
// function Rotate90CCW(){
// 	angulo += 270;
// 	Rotacionar(angulo);
// }
//
// function Rotate180(){
// 	angulo += 180;
// 	Rotacionar(angulo);
// }
