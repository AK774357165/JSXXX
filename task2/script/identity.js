//根据屏幕宽度动态改变标签字体大小
function change_id(){
    var element = document.getElementById('id-num');
    var w = element.offsetWidth;
    element.style.fontSize = Number(w) / 2 + 'px';
    element.style.paddingTop = Number(w) / 10 + 'px';
}
window.onresize = function(){
    change_id();
}
//读取分配结果
var players = JSON.parse(sessionStorage.getItem('arr'));
var i = 0;          //初始化i的值
var displayNum = 1;           //初始化标记的值
var idNum = document.getElementById('id-num');          //取得需要改变数值的节点
var btnNum = document.getElementById('btn-id-num');
//翻牌
function show_id(){
    var pic = document.getElementById('card');
    if(pic.getAttribute('src') == './img/identity-1.jpg'){
        pic.setAttribute('src','./img/identity-2.jpg');
    }else{
        pic.setAttribute('src','./img/identity-1.jpg');
    }
}
//显示角色函数
function praseBtn1(){
    var chapter = document.getElementById('chapter');
    var reminder = document.getElementById('reminder');
    var c;
    show_id();
    reminder.style.display = "block";
    switch(Number(players[i]))
    {
        case 1:
            c='角色：杀手';
        break;
        case 2:
            c='角色：医生';
        break;
        case 3:
            c='角色：狙击手';
        break;
        case 4:
            c='角色：警察';
        break;
        case 5:
            c='角色：水民';
        break;
    }
    chapter.innerHTML = c;
    chapter.style.display = 'block';
    i++;
    displayNum++;
    btnNum.innerHTML = "隐藏并传递给" + displayNum + "号";//显示下一位
}
//隐藏角色函数
function praseBtn2(){
    idNum.innerHTML = displayNum;
    show_id();
    btnNum.innerHTML = "查看" + displayNum + "号身份";
    reminder.style.display = 'none';
    chapter.style.display = 'none';
}
//按钮函数
var flag = true;                //设一个标识符
function praseBtn(){
    if(flag){
        praseBtn1();
        flag = false;
    }else{
        praseBtn2();
        flag = true;
    }
}