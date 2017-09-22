/**
 * Created by dream on 2017/9/20.
 */

var  startX = 0;
var  startY = 0;
var ind = 0;

function clickOnFunc(e){
    var ps = e.getElementsByTagName("P");
    var img = e.getElementsByTagName("img");
    if(e.style.backgroundColor =="white" || e.style.backgroundColor ==""){
        ind ++;
        $("#change_div").show();
        $("#statues_div").hide();
        e.style.backgroundColor="#8c9eff";
        for(var i = 0;i<ps.length;i++){
            ps[i].style.color = "white";
        }
        img[0].style.display = "inline";
    }else{
        ind --;
        if(ind <= 0){
            $("#change_div").hide();
            $("#statues_div").show();
        }
        e.style.backgroundColor="white";
        for(var i = 0;i<ps.length;i++){
            ps[i].style.color = "#8c9eff";
        }
        img[0].style.display = "none";
    }


   /* if(e.className == "td_useless"){

    }else{

    }*/
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
//删除床型
function  delete_bedtype(e){
    var div = e.parentNode;
    var Pdiv = div.parentNode;
    Pdiv.removeChild(div);
}


//添加新床型点击列表单项
function clickitem(e){
    var divs = e.getElementsByTagName("DIV");
    var spans = e.getElementsByTagName("span");

    var img_sel = document.createElement('img');
    img_sel.src="../images/changed_icon_11x9_@2x.png";
    img_sel.className="img_bed_selected";

    var ula  = e.parentNode;
    var lis = ula.getElementsByTagName("li");
    //去除其它勾选图案
    for(var i = 0;i<lis.length;i++){
        var imgs = lis[i].getElementsByTagName("img");
        var divv = lis[i].getElementsByTagName("div");
        if(imgs != null &&imgs.length!=0){
            divv[0].removeChild(imgs[0]);
        }
    }
    if(ula.id == "type_cont"){
        divs[0].appendChild(img_sel);

        $("#bedtype").text(spans[0].innerHTML);
        $("#type_cont").hide();
        $("#bedtype").css("border","0px");
        $("#size_cont").show();
        $("#bedsize").show();

    }else if(ula.id == "size_cont"){
        divs[0].appendChild(img_sel);
        $("#bedsize").text(spans[0].innerHTML);
        $("#size_cont").hide();
        $("#bedsize").css("border","0px");
        $("#num_cont").show();
        $("#bednum").show();

    }else if(ula.id == "num_cont"){

        divs[0].appendChild(img_sel);
        $("#bednum").text(spans[0].innerHTML);
        $("#num_cont").hide();
        $("#bednum").css("border","0px");
        var diva = document.createElement("div");
        var spana = document.createElement("span");
        var imga = document.createElement("img");
        imga.src="../images/guest_error_gray_14x14_@2x.png";
        imga.className="delete_bedtype";
        imga.onclick = function  (){
            var div = imga.parentNode;
            var Pdiv = div.parentNode;
            Pdiv.removeChild(div);
        };
        spana.className="color_black text_bigSize";
        spana.innerHTML = $("#bedtype").text()+"&nbsp"+$("#bedsize").text()+"&nbsp"+$("#bednum").text();
        diva.className = "div_item";
        diva.appendChild(spana);
        diva.appendChild(imga);
        var bedtypelis = document.getElementById("bedtypeli");
        bedtypelis.appendChild(diva);
        $.closePopup();
    }

}

//选择新床型时 修改已选好的项目
function click_title(e){
    if(e.id == "bedtype"){
        //去除尺寸勾选图标
        var ul = document.getElementById("size_cont");
        var lis = ul.getElementsByTagName("li");
        //去除其它勾选图案
        for(var i = 0;i<lis.length;i++){
            var imgs = lis[i].getElementsByTagName("img");
            var divv = lis[i].getElementsByTagName("div");
            if(imgs != null &&imgs.length!=0){
                divv[0].removeChild(imgs[0]);
            }
        }

        $("#bedsize").text("请选择");
        $("#bedsize").css("border-bottom","2px solid #8c9eff")
        $("#bedsize").hide();
        $("#size_cont").hide();
        $("#bednum").text("请选择");
        $("#bednum").hide();
        $("#num_cont").hide();
        $("#type_cont").show();
    }else if(e.id == "bedsize"){
        $("#bednum").text("请选择");
        $("#bednum").hide();
        $("#num_cont").hide();
        $("#size_cont").show();
    }else if(e.id == "bednum"){
    }
}


