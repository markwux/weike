// JavaScript Document

$(function(){ 

    document.ontouchmove = function(e){ e.preventDefault(); }; //文档禁止 touchmove事件
	
	
	
	$(".personalInformationCell").click(function(){
		
		var	url = "UserName.html?";//此处拼接内容
          window.location.href = url;
	});
	
	$("#modificationPasswordBtnId").click(function(){
		
		var	url = "modificationPassword.html?";//此处拼接内容
          window.location.href = url;
	});
	
		  
});