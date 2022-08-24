// window.onload = () => {
  // const dC = document.getElementById('canvas-demo').getContext('2d');
  // dC.moveTo(10,10);
  // dC.lineTo(110,10);

  // dC.moveTo(10,50);
  // dC.lineTo(180, 50);

  // dC.moveTo(10,100);
  // dC.lineTo(150,100);

  // dC.moveTo(10, 110);
  // dC.lineTo(160, 110);


  // dC.moveTo(10, 300);
  // dC.quadraticCurveTo(110, 255, 210, 300);
  // dC.moveTo(10, 300);
  // dC.quadraticCurveTo(110, 345, 210, 300)

  // dC.moveTo(132.5, 300);
  // dC.arc(110, 300, 22.5,0 ,2*Math.PI, false );

  // dC.stroke();
// }

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let playAnim = false;

let ball = {x:30, y: 30, speed: 0.1, t:0, radius:20};

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width,canvas.height);
}

animate();

canvas.addEventListener("click", () => {
  playAnim = true;
})

//Coefficient calculations for control points Bezier Curve animation movement

// var cx = 3 * (p1.x - p0.x)
// var bx = 3 * (p2.x - p1.x) - cx;
// var ax = p3.x - p0.x - cx -bx;

// var cy = 3 * (p1.y - p0.y)
// var by = 3 * (p2.y - p1.y) - cy;
// var ay = p3.y - p0.y - cy -by;


// t-value represents progress along the curve: 0 -> 1
// higher t-value, the faster the animation will be
// var xt = ax* (t*t*t) + bx*(t*t) + cx*t + p0.x;
// var yt = ay* (t*t*t) + by*(t*t) + cy*t + p0.y;

// var = ball = {x:0, y:0, speed:.01, t:0}
