// JavaScript Document

$(function(){ 

    document.ontouchmove = function(e){ e.preventDefault(); }; //文档禁止 touchmove事件
	
	
	
	//$(".personalInformationCell").click(function(){
//		
//		var	url = "UserName.html?nameTitle="+  $(".personalInformationCell .leftLabel").html();//此处拼接内容
//          window.location.href = url;
//	});
	
	$("#modificationPasswordBtnId").click(function(){
		
		var	url = "modificationPassword.html?";//此处拼接内容
          window.location.href = url;
	});
   
});

function name_fun(e){
	
	var	url = "UserName.html?nameTitle=" + e;//此处拼接内容
    window.location.href = url;
	
}





