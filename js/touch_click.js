/**
 * Created by dream on 2017/9/20.
 */

var  startX = 0;
var  startY = 0;

function clickOnFunc(e){
    var ps = e.getElementsByTagName("P");
    if(e.style.backgroundColor =="white" || e.style.backgroundColor ==""){
        e.style.backgroundColor="#8c9eff";
        for(var i = 0;i<ps.length;i++){
            ps[i].style.color = "white";
        }
    }else{
        e.style.backgroundColor="white";
        for(var i = 0;i<ps.length;i++){
            ps[i].style.color = "#8c9eff";
        }
    }
}


function touchSatrtFunc(e) {
    //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
    var touch = e.touches[0]; //获取第一个触点
    var x = Number(touch.pageX); //页面触点X坐标
    var y = Number(touch.pageY); //页面触点Y坐标
    //记录触点初始位置
    startX = x;
    startY = y;

}

//touchmove事件
function touchMoveFunc(e) {
    //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
    var touch = e.touches[0]; //获取第一个触点
    var x = Number(touch.pageX); //页面触点X坐标
    var y = Number(touch.pageY); //页面触点Y坐标
    var text = 'TouchMove事件触发：（' + x + ', ' + y + '）';

    //判断滑动方向

    if (x - startX != 0) {
        //左右滑动
        if(e.style.backgroundColor="white"){
            e.style.backgroundColor="#8c9eff";
            e.innerHTML='<p class="p_day_sel">1</p><p class="p_price_sel">￥388</p> <p class="p_num_sel">2</p>';
        }else{
            e.style.backgroundColor="white";
            e.innerHTML='<p class="p_day">1</p><p class="p_price">￥388</p> <p class="p_num">2</p>'
        }
    }



}