// JavaScript Document


$(function(){ /*江南理想*/

    document.ontouchmove = function(e){ e.preventDefault(); }; //文档禁止 touchmove事件
	
	//chart_fun()();
	
	$(".totalDataView").hide();
$("#lineChart").hide();
	document.getElementById("houseStatistics").style.borderColor = "#5264cc";
	 document.getElementById("storesStatistics").style.borderColor = "#F5F5F5";
	 
	$("#houseStatistics").click(function(){
			 
		 houseStatistics();
	});
	
	$("#storesStatistics").click(function(){
			 
		storesStatistics();
	});
	
	 //chart_fun();
			
});


function houseStatistics(){
	
	 document.getElementById("houseStatistics").style.color="#5264cc";
	 document.getElementById("houseStatistics").style.borderColor = "#5264cc";
	 
	 document.getElementById("storesStatistics").style.color="#0F0F0F";
	 document.getElementById("storesStatistics").style.borderColor = "#F5F5F5";
	 
	$(".swiper-container").show();
	$(".bottomView").show();
	
	$(".totalDataView").hide();
	$("#lineChart").hide();
}


function storesStatistics(){
	document.getElementById("houseStatistics").style.color="#0F0F0F";
	 document.getElementById("houseStatistics").style.borderColor = "#F5F5F5";
	 document.getElementById("storesStatistics").style.color="#5264cc";
	  document.getElementById("storesStatistics").style.borderColor = "#5264cc";
	$(".swiper-container").hide();
	$(".bottomView").hide();
	$(".totalDataView").show();
	$("#lineChart").show();
	chart_fun();
	pie_fun()
}

function  scroller_fun(){
	         
	//自动滚动
				$("#image_container").swiper({
					loop: true,
					autoplay: 5000
				});
}

function  chart_fun(){
	// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('lineChart'));
		 
        // 指定图表的配置项和数据
        option = {
			backgroundColor: '#FFFFFF',
			
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					lineStyle: {
						color: 'f9f9f9'
					}
				}
			},
			grid: {
				top:'15%',
				bottom:'5%',
				left: '3%',
				right: '4%',
				containLabel: true
			},
		
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				axisLine: {
					lineStyle: {
						color: '#5C5C5C'
					}
				},
				data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
			}],
			yAxis: [{
				type: 'value',
				name: '夜间统计',
				axisTick: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: '#5C5C5C'
					}
				},
				axisLabel: {
					margin: 10,
					textStyle: {
						fontSize: 14
					}
				},
				splitLine: {
					lineStyle: {
						color: '#F5F5F5'
					}
				}
			}],
			series: [{
				name: '',
				type: 'line',
				smooth: true,
				symbol: 'circle',
				symbolSize: 5,
				showSymbol: false,
				lineStyle: {
					normal: {
						width: 1
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgba(245, 253, 247, 0.2)'
						}, {
							offset: 0.8,
							color: 'rgba(245, 253, 247, 0.2)'
						}], false),
						shadowColor: 'rgba(245, 253, 247, 0.2)',
						shadowBlur: 10
					}
				},
				itemStyle: {
					normal: {
						color: 'rgb(176, 220, 178)',
						borderColor: 'rgba(137,189,2,0.27)',
						borderWidth: 12
					}
				},
				data: [320, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
			}, ]
     };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}

function pie_fun(){
	
				var data = [{
				value: 100,
				name: '微信'
			}, {
				value: 530,
				name: '到店'
			}, {
				value: 9938,
				name: '途家网'
			}, {
				value: 17623,
				name: '去哪儿'
			}, {
				value: 3299,
				name: '同城网'
			},{
				value: 3299,
				name: '龙艺网'
			}];
			 var pieChart = echarts.init(document.getElementById('pieChart'));
			option = {
				backgroundColor: '#fff',
			
				title: {
					text: '订单来源分析',
					subtext: '',
					x: '2%',
					y: '2%',
					textStyle: {
						fontWeight: 'normal',
						color:'#5C5C5C',
						fontSize: 12
					}
				},
				tooltip: {
					show: false,
					trigger: 'item',
					formatter: "{b}: {c} ({d}%)"
				},
				legend: {
					orient: 'horizontal',
					bottom: '0%',
					data: ['微信','到店', '途家网', '去哪儿', '同城网', '龙艺网']
				},
				series: [{
					type: 'pie',
					selectedMode: 'single',
					radius: ['25%', '58%'],
					color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67', '#F00C67'],
			
					label: {
						normal: {
							position: 'inner',
							formatter: ' ',
			
							textStyle: {
								color: '#fff',
								fontWeight: 'bold',
								fontSize: 14
							}
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					data: data
				}]
				
			};
       pieChart.setOption(option);
	
}
