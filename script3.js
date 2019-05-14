var canvas  = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

// Rectangle base voiture :
ctx.fillStyle = "rgb(7, 122, 12)";
ctx.fillRect(165,165,250,50);

// Rectangle habitacle voiture :
ctx.fillStyle = "rgb(7, 122, 12)";
ctx.fillRect(200,115,170,50);

// Roue 1 :
ctx.beginPath();
ctx.fillStyle = "rgb(230, 244, 231)";
ctx.strokeStyle = "black";
ctx.linewidth = "2"
ctx.arc(220, 244, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke()

// Roue 2 :
ctx.beginPath();
ctx.fillStyle = "rgb(230, 244, 231)";
ctx.linewidth = "2"
ctx.arc(350, 244, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke()
