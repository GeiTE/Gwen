$(function(){
	var indexedDB = window.indexedDB;
	var request,database;
	var ly_request,ly_database;
	$("#submit").click(function(){
		if ($("#name").val()!="" && $("#phone").val()!="" && $("#emile").val()!="" && $("#lxgj").val()!="") {
			var data=[{
				name:$("#name").val(),
				phone:$("#phone").val(),
				emile:$("#emile").val(),
				lxgj:$("#lxgj").val()
			}]
			request = indexedDB.open('text1',1);
			request.onerror = function(){
				console.log('error');
			};
			request.onsuccess = function(e){
				database = e.target.result;
				console.log('创造或打开数据库成功');
			};
			request.onupgradeneeded = function(e){
				database = e.target.result;
				//创建数据库成功
				if (!database.objectStoreNames.contains("user")) {
					var store = database.createObjectStore("user",{autoIncrement:true});
				//添加数据
					for(var i = 0;i < data.length;i++){
						request = store.add(data[i]);
						request.onerror = function(){
							console.log("数据库中已有该数据");
						};
						request.onsuccess =function(){
							console.log('数据已存入数据库');
						}
					}
				}
			}
		}
		else{
			alert("请输入完整信息，重试提交！");
		}
	});
	$("#ly_submit").click(function(){
		if ($("#ly_name").val() != "" && $("#ly_text").val() != "") {
			$.ajax({
		      	type:"GET",
		      	url:"index.php",
		      		data:{ly_name:$("#ly_name").val(),ly_text:$("#ly_text").val()},
		      		dataType:"json",
		      		success:function(data,textStatus){
		      			$(".ly_box").append("<blockquote><p>留言内容："+data.ly_text+"</p><footer>用户名："+data.ly_name+"</footer></blockquote>");
		      		}
		      });
		}
	});
	
})