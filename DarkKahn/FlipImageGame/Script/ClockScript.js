function drawClock() {
    var canvas = document.getElementById("curves-canvas"),
		ctx = canvas.getContext("2d");
    
    initialClock(ctx);
    drawSand(ctx, 63, 140, 98, 200, 98, 200, 98, 200, 98, 200, 102, 200, 102, 200, 102, 200, 102, 200, 138, 140);
    // drawSand(ctx, 68, 150, 98, 200, 98, 270, 57, 270, 50, 280, 150, 280, 144, 270, 102, 270, 102, 200, 133, 150);
    // drawSand(ctx, 74, 160, 98, 200, 98, 260, 63, 260, 50, 280, 150, 280, 138, 260, 102, 260, 102, 200, 126, 160);
    // drawSand(ctx, 81, 170, 98, 200, 98, 250, 69, 250, 50, 280, 150, 280, 132, 250, 102, 250, 102, 200, 119, 170);
    // drawSand(ctx, 87, 180, 98, 200, 98, 240, 75, 240, 50, 280, 150, 280, 126, 240, 102, 240, 102, 200, 113, 180);
    // drawSand(ctx, 93, 190, 98, 200, 98, 230, 81, 230, 50, 280, 150, 280, 120, 230, 102, 230, 102, 200, 107, 190);
    // drawSand(ctx, 98, 220, 98, 220, 98, 220, 87, 220, 50, 280, 150, 280, 114, 220, 102, 220, 102, 220, 101, 220);    
}

function initialClock(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(185, 122, 97)";
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.lineWidth = 1;
    ctx.moveTo(50, 100);
    ctx.fillRect(50, 100, 100, 20);
    ctx.strokeRect(50, 100, 100, 20);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(50, 120);
    ctx.lineTo(98, 200);
    ctx.lineTo(50, 280);
    ctx.lineTo(150, 280);
    ctx.lineTo(102, 200);
    ctx.lineTo(150, 120);
    ctx.fillStyle = "rgb(200, 200, 200)";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "rgb(185, 122, 97)";
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.lineWidth = 1;
    ctx.moveTo(50, 280);
    ctx.fillRect(50, 280, 100, 20);
    ctx.strokeRect(50, 280, 100, 20);
    ctx.stroke();
}

function drawSand(ctx, coord1, coord2, coord3, coord4, coord5, coord6, coord7, coord8, coord9, coord10, 
                     coord11, coord12, coord13, coord14, coord15, coord16, coord17, coord18, coord19, coord20) {
    ctx.beginPath();
    ctx.moveTo(coord1, coord2);
    ctx.lineTo(coord3, coord4);
    ctx.lineTo(coord5, coord6);
    ctx.lineTo(coord7, coord8);
    ctx.lineTo(coord9, coord10);
    ctx.lineTo(coord11, coord12);
    ctx.lineTo(coord13, coord14);
    ctx.lineTo(coord15, coord16);
    ctx.lineTo(coord17, coord18);
    ctx.lineTo(coord19, coord20);
    ctx.lineTo(coord1, coord2);
    ctx.fillStyle = "rgb(30, 30, 30)";
    ctx.fill();
    ctx.stroke();   
}

drawClock();