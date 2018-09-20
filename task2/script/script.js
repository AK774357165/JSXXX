function jp_simple(){
    window.location.href="playermatch.html";
}
function back(){
    window.history.back(-1);
}
function get_num(){
    var n = document.getElementById("num").value;
    if(n<=0){
        alert("请输入有效人数");
    }else{
        alert(n);
    }
} 
