// JavaScript Document


var refundableAll = true;

$(function(){ /*江南理想*/

    document.ontouchmove = function(e){ e.preventDefault(); }; //文档禁止 touchmove事件
	
	$(".refundablePath").hide();
	
	$("#refundableBtnId").click(function(){
		
		refundableAll = !refundableAll;
		if(refundableAll){
			document.getElementById("refundableBtnId").src="../images/alert_check_20x20_@3x.png";
			
			$(".refundablePath").hide();
			
		}else{
			$(".refundablePath").show();
			document.getElementById("refundableBtnId").src="../images/alert_checkNone_18x18_@3x.png";
			
		}
		
	});
	
		
});



