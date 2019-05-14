var canvas  = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

// Fenetre 1 de la maison :
ctx.fillStyle = "rgb(225, 246, 244)";
ctx.fillRect(165,165,25,25);

// Fenetre 2 de la maison :
ctx.fillStyle = "rgb(225, 246, 244)";
ctx.fillRect(210,165,25,25);

// Porte de la maison :
ctx.fillStyle = "rgb(225, 246, 244)";
ctx.fillRect(190,210,25,40);

// Mur de la maison
ctx.beginPath();
ctx.fillStyle = "lightblue";
ctx.strokeStyle = "sienna";
ctx.globalCompositeOperation = "destination-over";
ctx.moveTo(147,251);
ctx.lineTo(147,147);
ctx.lineTo(251,147);
ctx.lineTo(251,251);
ctx.closePath(147,251);
ctx.fill();

// Toit de la maison :
ctx.fillStyle = "peru";
ctx.rotate(45 * Math.PI / 180);
ctx.fillRect(210,-73,75,75);
ctx.fill();
