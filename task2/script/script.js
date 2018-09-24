//跳转到游戏界面
function jp_simple(){
    window.location.href = "playermatch.html";
}
//返回函数
function back(){
    window.history.back(-1);
}
//返回主界面
function back_index(){
    window.location.href = "index.html";
}
//跳转到身份卡页面
function jp_identity(){
    var check = document.getElementById('num').value;
    if(check == 0){
        alert("请先输入人数！");
        return false;
    }
    player_random();
    window.location.href = "identity.html";
}
//获取并判断游戏人数是否合格
function get_num(){
    var n = document.getElementById('num').value;
    var regx = /^\d{1,2}$/;
    if(!regx.test(n)||n<5||n>18){
        alert("请输入5-18间任意整数");
        return 0;
    }else{
        march(n);
    }
}
//计算相应游戏人数时的各个角色数量
function march(n){
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
    for(var i=0;i<loop.length;i++){ //循环赋值各个角色数量
        for(var j=0;j<loop[i].length;j++){
            loop[i][j].value = loop2[i];
            loop[i][j].setAttribute('readOnly',false);
        }
    }
}
//点击设置按钮可修改角色数量
function set_able(){
    var elements  = document.getElementsByClassName('number');
    for(var i=0;i<elements.length;i++){
        elements[i].removeAttribute('readOnly',true);
    }
}
//自动修改游戏总人数
function total(element){   
    var old_num = document.getElementById('num').value;
    var new_num = Number(old_num) + Number(element.value);
    document.getElementById('num').value = new_num;
}
//分配角色
function allot(){
    var kil = document.getElementsByName('kil')[0].value;   //获取各个角色的数量
    var pol = document.getElementsByName('pol')[0].value;
    var men = document.getElementsByName('men')[0].value;
    var num = Number(kil) + Number(pol) + Number(men) + 2;
    var player = [];//定义与参加游戏人数相同大小的数组
    while(kil){
        player.push('1');       //按各角色数量循环赋值给数组
        kil--;                  //1：杀手，2：医生，3：狙击手，4：警察，4：水民
    }
    player.push('2');
    player.push('3');
    while(pol){
        player.push('4');
        pol--;
    }
    while(men){
        player.push('5');
        men--;
    }
    return player;
}
//打乱角色顺序，利用数组下标表示玩家编号
function player_random(){
    var player = allot();
    var m = player.length;
    while(m){
        i = Math.floor(Math.random() * m--);//打乱数组
        t = player[i];
        player[i] = player[m];
        player[m] = t;
    }   
    sessionStorage.setItem('arr',JSON.stringify(player));//上传分配结果
}
