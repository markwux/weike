// JavaScript Document


$(function(){ /*江南理想*/

    document.ontouchmove = function(e){ e.preventDefault(); }; //文档禁止 touchmove事件
	
	$("#orderStateId").click(function(){
		documentsPick_fun();
		
	});
	
});



function  documentsPick_fun(){
	
	var followFunArr = ["身份证", "驾照","军官证","微信","接访"];
	
	$("#orderStateId").picker({
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