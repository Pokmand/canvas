var canvas  = document.getElementById('canvas');
var ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.fillStyle="blue";
ctx.fillRect (0,0,400,400);
ctx.fill();
ctx.closePath();

// cockpit soucoupe :
ctx.beginPath();
ctx.fillStyle="white"
ctx.moveTo(150,175);
ctx.quadraticCurveTo(200,50, 250,175);
ctx.fill();
ctx.closePath();

// Base Soucoupe :
ctx.beginPath();
ctx.fillStyle="grey";
ctx.moveTo(100,200);
ctx.quadraticCurveTo(200,100,300,200);
ctx.moveTo(100,200);
ctx.quadraticCurveTo(200,300,300,200);
ctx.fill();
ctx.closePath();
