// JavaScript Document

$(function(){ /*江南理想*/

    document.ontouchmove = function(e){ e.preventDefault(); }; //文档禁止 touchmove事件
	
	$("#addAccountsId").click(function(){
		
		var	url = "AccountsShowAndEdit.html?";//此处拼接内容
          window.location.href = url;
	})
	
	
	$("#documentsChoseId").click(function(){
		documentsPick_fun();
		
	})
	
})


 
function  documentsPick_fun(){
	
	var followFunArr = ["身份证", "驾照","军官证","微信","接访"];
	
	$("#documentsChoseId").picker({
					  title: "请选择",
					  cols: [
						{
						  textAlign: 'center',
						  values: followFunArr
						}
					  ],
					   onChange: function(d) {
						   
						   followType =   d.value[0];
						  
					},
	          }); 
	
}