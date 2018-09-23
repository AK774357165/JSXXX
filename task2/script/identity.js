function change_id(){
    var element = document.getElementById('id-num');
    var w = element.offsetWidth;
    element.style.fontSize = Number(w) / 2 + 'px';
    element.style.paddingTop = Number(w) / 10 + 'px';
}
window.onresize = function(){
    change_id();
}