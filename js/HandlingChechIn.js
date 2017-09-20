// JavaScript Document

$(function(){ /*江南理想*/

    document.ontouchmove = function(e){ e.preventDefault(); }; //文档禁止 touchmove事件
	
	
	 /* var mapUrl = "OrderList.html";
	  
       $("#imageCell1Id").attr("href",mapUrl);
	*/
	
	  
	
	$("#addAccountsId").click(function(){
		
		var	url = "AccountsShowAndEdit.html?";//此处拼接内容
          window.location.href = url;
	});
	
	$("#showAccountsId").click(function(){
		
		var	url = "AccountsShowAndEdit.html?";//此处拼接内容
          window.location.href = url;
	})
	
			
});