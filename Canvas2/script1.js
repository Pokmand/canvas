var canvas  = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

// Cornet :
ctx.beginPath();
ctx.moveTo(150,150);
ctx.lineTo(180,200);
ctx.lineTo(210,150);
ctx.closePath(150,150);
ctx.fillStyle = "peru";
ctx.strokeStyle = "sienna";
ctx.fill();
ctx.stroke ();

// Glace :
ctx.beginPath();
ctx.strokeStyle='red';
ctx.fillStyle = "rgb(189, 5, 5)";
ctx.lineWidth=2;
ctx.moveTo(150,150);
ctx.quadraticCurveTo(200,80, 210, 150);
ctx.stroke();
ctx.fill();
