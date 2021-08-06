const canvas = document.querySelector('#board');
const ctx = canvas.getContext('2d');

canvas.width =window.innerWidth;
canvas.height=window.innerHeight;

ctx.strokeStyle='#BADA55';
ctx.linejoin='round';
ctx.linecap='round';
ctx.lineWidth=2;

let drawBoard=false;
let lastX = 0;
let lastY = 0;
let hue =0;

function draw(e){
    if(!drawBoard){
        return;
    }
    console.log(e);
    ctx.strokeStyle=`hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    lastX= e.offsetX;
    lastY= e.offsetY;
    hue++;

}

canvas.addEventListener('mousedown',(e) =>{ 
drawBoard = true;
lastX= e.offsetX;
lastY= e.offsetY;
});
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',() => drawBoard = false);
canvas.addEventListener('mouseout',() => drawBoard = false);
