function jp_simple(){
    window.location.href="playermatch.html";
}
function back(){
    window.history.back(-1);
}
function get_num(){
    var n = document.getElementById("num").value;
    if(n<5){
        alert("请输入有效人数");
        return 0;
    }else{
        return n;
    }
}
function march(){
    var n = get_num();
    var killer;
    var police;
    var shooter = 1;
    var doctor = 1;
    var man;
    if(n<5){
        return 0;
    }else if(n<9){
        killer = 1;
    }else if(n<12){
        killer = Math.ceil(n/6);
    }else if(n<15){
        killer = Math.ceil(n/5);
    }else{
        killer = Math.ceil(n/4);
    }
    alert(killer);
    if(n<9){
        police = 1;
    }else{
        police = killer - 1;
    }
    alert(police);
    man = n - killer - police -shooter - doctor;
    alert(man);
}
