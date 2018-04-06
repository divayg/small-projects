window.onload=function () {
    
    var canvas=document.getElementById("sky");
    var ctx=canvas.getContext("2d");

    var w= window.innerWidth;
    var h= window.innerHeight;
    canvas.height=h;
    canvas.width=w;

    var mf=150;//maximum flakes
    var flakes=[];

    for(var i=0;i<mf;i++){
        flakes.push({
            x:Math.random()*w,
            y:Math.random()*h,
            r:Math.random()*3+2,
            d:Math.random()*2+0.5
        })
    }

    function drawFlakes(){
        ctx.clearRect(0,0,w,h);
        ctx.fillStyle="white";
        ctx.beginPath();

        for(var i=0;i<mf;i++){
            var f=flakes[i];
            ctx.moveTo(f.x,f.y);
            ctx.arc(f.x,f.y,f.r,0,Math.PI*2,true);
        }
        ctx.fill();
        moveFlakes();
    }

    var angle=0;
    function moveFlakes(){
        angle+=0.01;

        for(var i=0;i<mf;i++){
            var f=flakes[i];
            f.x+=Math.sin(angle/2)*2;
            f.y+=Math.pow(f.d,2)+1;

            if(f.y>h){
                flakes[i]={x:Math.random()*w,y:0,r:f.r,d:f.d};
            }
        }

    }

    setInterval(drawFlakes,25);
    
}
