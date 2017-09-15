// JavaScript Document

var projectId = "";


$(function(){ /*江南理想*/

    document.ontouchmove = function(e){ e.preventDefault(); }; //文档禁止 touchmove事件
	
	$(".amountCellView ul li:eq(1)").click(function(){
		documentsPick_fun();
		
	});
	
	$(".amountCellView ul li:eq(3)").click(function(){
		sixPicker_fun();
		
	});
	<!--城市 -->
	$("#address").cityPicker({
          title: "请选择"
    });
	
	
	$("#birthdayPicker").calendar();
			
});

 
function  documentsPick_fun(){
	
	var followFunArr = ["身份证", "驾照","军官证","微信","接访"];
	
	$("#documentsPicker").picker({
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
 <!-- 证件  -->
function  sixPicker_fun(){
	
	var followFunArr = ["女","男"];
	
	$("#sixPicker").picker({
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

