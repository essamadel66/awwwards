var canvas = document.getElementById("c");

var h = window.innerHeight;
var w = window.innerWidth;

canvas.width=w;
canvas.height=h;

var ctx = canvas.getContext("2d");
var circleCont = [];
var maxCircle = 500;

for(var i=0; i<maxCircle;i++)
{
 
    var circle = 
        {
        
            x:Math.random()*w,
            y:Math.random()*h,
            r:Math.random()*5+1
        }
circleCont.push(circle)        
        }

function drawCircle()
{
    ctx.clearRect(0,0,w,h)
    ctx.beginPath();
for(var i=0; i<circleCont.length; i++)
{
var c = circleCont[i];
    ctx.moveTo(c.x,c.y)
    ctx.arc(c.x,c.y,c.r,0,2*Math.PI)
}

ctx.fillStyle="#fff";
ctx.fill();
moveCircle()
}
drawCircle();

function moveCircle()
{
for (var i=0; i<circleCont.length;i++)
{
    var c = circleCont[i];
    c.y +=1;
    c.x +=1;
    if(c.y>h)
    {
        circleCont[i].y=-20;
    }
    if(c.x>w)
    {
          circleCont[i].x=-20;
    }

}
}
setInterval(drawCircle,10)