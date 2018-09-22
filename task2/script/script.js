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
    var man;
    var kil = document.getElementsByName('kil');
    var doc = document.getElementsByName('doc');
    var sho = document.getElementsByName('sho');
    var pol = document.getElementsByName('pol');
    var men = document.getElementsByName('men');
    var loop = [kil,doc,sho,pol,men];
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
    if(n<9){
        police = 1;
    }else{
        police = killer - 1;    
    }
    man = n - killer - police - 1 - 1;      
    var loop2 = [killer,1,1,police,man];  
    for(var i=0;i<loop.length;i++){
        for(var j=0;j<loop[i].length;j++){
            loop[i][j].value = loop2[i];
        }
    }
}
