const dC = document.getElementById('canvas-demo').getContext('2d');

window.onload = () => {

  dC.moveTo(10,10);
  dC.lineTo(110,10);

  dC.moveTo(10,50);
  dC.lineTo(180, 50);

  dC.moveTo(10,100);
  dC.lineTo(150,100);

  dC.moveTo(10, 110);
  dC.lineTo(160, 110);


  dC.moveTo(10, 300);
  dC.quadraticCurveTo(110, 255, 210, 300);
  dC.moveTo(10, 300);
  dC.quadraticCurveTo(110, 345, 210, 300)

  dC.moveTo(132.5, 300);
  dC.arc(110, 300, 22.5,0 ,2*Math.PI, false );

  dC.stroke();
}