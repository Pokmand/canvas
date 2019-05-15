var canvas  = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

// tête :
ctx.beginPath();
ctx.fillStyle = "rgb(222, 152, 70)";
ctx.arc(200, 100, 40, 0, 2 * Math.PI);
ctx.fill()
ctx.closePath();

// Oeil gauche:
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(188, 90, 5, 0, 2 * Math.PI);
ctx.fill()
ctx.closePath();

// Oeil droit:
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(213, 90, 5, 0, 2 * Math.PI);
ctx.fill()
ctx.closePath();

// sourcil gauche :
ctx.beginPath();
ctx.fillStyle="white"
ctx.moveTo(175,80);
ctx.quadraticCurveTo(190,75,200,80);
ctx.fill();
ctx.closePath();

// sourcil droit :
ctx.beginPath();
ctx.fillStyle="white"
ctx.moveTo(200,80);
ctx.quadraticCurveTo(215,75,225,80);
ctx.fill();
ctx.closePath();

// tête :
ctx.beginPath();
ctx.fillStyle = "rgb(222, 152, 70)";
ctx.arc(200,180, 40, 0, 2 * Math.PI);
ctx.fill()
ctx.closePath();

// Base Soucoupe :
ctx.beginPath();
ctx.fillStyle="grey";
ctx.moveTo(100,200);
ctx.quadraticCurveTo(200,300,300,200);
ctx.fill();
ctx.closePath();

// Rectangle habitacle voiture :
ctx.beginPath();
ctx.fillStyle = "rgb(7, 122, 12)";
ctx.fillRect(220,150,120,20);
ctx.fillRect(50,150,120,20);
ctx.fill();
ctx.closePath();

// Roue  :
ctx.beginPath();
ctx.fillStyle = "rgb(230, 244, 231)";
ctx.strokeStyle = "black";
ctx.linewidth = "2"
ctx.arc(240, 244, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke()

// Roue  :
ctx.beginPath();
ctx.fillStyle = "rgb(230, 244, 231)";
ctx.strokeStyle = "black";
ctx.linewidth = "2"
ctx.arc(150, 244, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke()

//
// // Base Soucoupe :
// ctx.beginPath();
// ctx.fillStyle="grey";
// ctx.moveTo(100,200);
// ctx.quadraticCurveTo(200,100,300,200);
// ctx.moveTo(100,200);
// ctx.quadraticCurveTo(200,300,300,200);
// ctx.fill();
// ctx.closePath();
