var div = document.getElementsByTagName('div');
var btnone = document.getElementById('btnone');
var btntwo = document.getElementById('btntwo');
var c;
btnone.onclick = function(){
    c = setInterval(function(){
        start();
    },1000)
}
btntwo.onclick = function(){
    end();
    clearInterval(c);
}
function start(){
    for(var i=0;i<div.length;i++){
        div[i].style.backgroundColor = "#fea600";
    }
    var group = new Array(3);
    var group1 = new Array(3);
    for(var i=0;i<group.length;i++){
        var n = parseInt(Math.random()*9);
        console.log(n);
        if(i==0){
            group[i] =n;
        }else{
            for(var j=0;j<i;j++){
                if(n==group[j]){
                    i--;
                }else{
                    group[i] = n;
                }
            }
        }
    }
    for(var i=0;i<group.length;i++){
        div[group[i]].style.backgroundColor = colors();
    }
    function colors(){
        return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).substr(-6); 
    }
}
function end(){
    for(var i=0;i<div.length;i++){
        div[i].style.backgroundColor = "#fea600";
    }
}