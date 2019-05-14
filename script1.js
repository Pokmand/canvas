var canvas  = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
// Mur de la maison
ctx.beginPath();
ctx.moveTo(150,250);
ctx.lineTo(150,150);
ctx.lineTo(250,150);
ctx.lineTo(250,250);
ctx.closePath(150,250);
ctx.fillStyle = "lightblue";
ctx.strokeStyle = "sienna";
ctx.fill();

// Toit de la maison :
ctx.beginPath();
ctx.moveTo(150,150);
ctx.lineTo(200,100);
ctx.lineTo(250,150);
ctx.closePath(150,150);
ctx.fillStyle = "peru";
ctx.strokeStyle = "sienna";
ctx.fill();

// Fenetre 1 de la maison :
ctx.fillStyle = "rgb(225, 246, 244)";
ctx.fillRect(165,165,25,25);

// Fenetre 2 de la maison :
ctx.fillStyle = "rgb(225, 246, 244)";
ctx.fillRect(210,165,25,25);

// Porte de la maison :
ctx.fillStyle = "rgb(225, 246, 244)";
ctx.fillRect(190,210,25,40);
