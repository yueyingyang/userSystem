	var $table = $('#tb_user'),
		$remove = $('#remove');

	$table.bootstrapTable({
		// ajax: function (request) {
		// 	$.ajax({
		// 		type: "GET",
		// 		url:"",
		// 		contentType: "application/json;charset=utf-8",
		// 		dataType: "jsonp",
		// 		data: '',
		// 		jsonp: 'callback',
		// 		success: function(msg) {
		// 			request.success({
		// 				row: msg
		// 			});
		// 			$table.bootstrapTable('load',msg);
		// 		},
		// 		error: function(){
		// 			alert("请求失败");
		// 		}
		// 	});
		// },
		// url:'data1.json',
		cache: false,  //设置为false，禁用ajax数据缓存，默认为true
		method: 'get',
		striped: true,  //表格显示条纹
		pagination: true,  //启动分页
		sidePagination: 'server',  //服务器端分页
		sortable: false,  //设置为false，禁用所有列的排序
		sortOrder: 'desc',  //排序方式
		pageSize: 10,  //每页显示的记录数
		pageNumber: 1,  //当前显示第几页
		pageList: [5, 10, 15, 20, 25],  //记录数可选列表
		queryParamsType:'',  //默认为空时传递：sortOrder,pageSize,pageNumber
		search: false,  //是否启用搜索框
		strictsearch: true,  //模糊或严格搜索
		showColumns: true,  //是否显示所有的列（选择显示的列）
		showRefresh: true,  //是否显示刷新按钮
		minimumCountColumns: 2,  //最少允许的列数
		clickToSelect: true,  //是否启用点击选中行
		height: 500,  //行高，如果没有设置height属性，表格自动根据记录条数决定高度
		// idField: 'id',
		idField: 'user_name',  //指定主键列
		uniqleId: 'user_id',  //每行的唯一标识，一般为主键列

		columns: [
			{
				field: 'state',
				checkbox: true,
				align: 'center',
			}, {
				title: '用户名',
				field: 'user_name',
				align: 'center',
				valign: 'middle',
			}, {
				title: '性别',
				field: 'user_sex',
				align: 'center',
				valign: 'middle',
			}, {
				title: '年级',
				field: 'user_grade',
				align: 'center',
				valign: 'middle',
			}, {
				title: '学部',
				field: 'user_xuebu',
				align: 'center',
				valign: 'middle',
			}, {
				title: '学院',
				field: 'user_xueyuan',
				align: 'center',
				valign: 'middle',
			}, {
				title: '专业',
				field: 'user_profession',
				align: 'center',
				valign: 'middle',
			}, {
				title: '操作',
				field: 'user_edit',
				align: 'center',
				valign: 'middle',
				formatter: operateFormatter
				// events: operateEvents
			}, 
		],
		data: [
			{
				"user_name": 0,
				"user_sex": "男",
				"user_grade": "大一",
				"user_xuebu": "理工学部",
				"user_xueyuan": "计算机学院",
				"user_profession": "什么都学"
			}, {
				"user_name": 0,
				"user_sex": "男",
				"user_grade": "大一",
				"user_xuebu": "理工学部",
				"user_xueyuan": "计算机学院",
				"user_profession": "什么都学"
			}, {
				"user_name": 0,
				"user_sex": "男",
				"user_grade": "大一",
				"user_xuebu": "理工学部",
				"user_xueyuan": "计算机学院",
				"user_profession": "什么都学"
			}, {
				"user_name": 0,
				"user_sex": "男",
				"user_grade": "大一",
				"user_xuebu": "理工学部",
				"user_xueyuan": "计算机学院",
				"user_profession": "什么都学"
			}, {
				"user_name": 0,
				"user_sex": "男",
				"user_grade": "大一",
				"user_xuebu": "理工学部",
				"user_xueyuan": "计算机学院",
				"user_profession": "什么都学"
			}, {
				"user_name": 0,
				"user_sex": "男",
				"user_grade": "大一",
				"user_xuebu": "理工学部",
				"user_xueyuan": "计算机学院",
				"user_profession": "什么都学"
			}, {
				"user_name": 0,
				"user_sex": "男",
				"user_grade": "大一",
				"user_xuebu": "理工学部",
				"user_xueyuan": "计算机学院",
				"user_profession": "什么都学"
			}, {
				"user_name": 0,
				"user_sex": "男",
				"user_grade": "大一",
				"user_xuebu": "理工学部",
				"user_xueyuan": "计算机学院",
				"user_profession": "什么都学"
			}, {
				"user_name": 0,
				"user_sex": "男",
				"user_grade": "大一",
				"user_xuebu": "理工学部",
				"user_xueyuan": "计算机学院",
				"user_profession": "什么都学"
			}
		],
		onLoadSuccess: function(){
			console.info("加载成功");
		},
		onLoadError: function(){
			console.info("加载数据失败");
		},
		onDbClickRow: function(row, $element) {
			var id = row.ID;
			EditViewById(id, 'view');
		}
	});
	
	//操作栏的格式化

	function operateFormatter(value, row, index) {
		var id = value;
		var result = "";
		result += "<a href='javascript:;' class='btn btn-xs' onclick=\"EditViewById('" + id + "', view='view')\" title='编辑'><i class='glyphicon glyphicon-pencil'></i></a>";
		result += "<a href='javascript:;' class='btn btn-xs' onclick=\"DeleteByIds('" + id + "', view='view')\" title='删除'><i class='glyphicon glyphicon-remove'></i></a>";

		return result;
	}
	/*function operateFormatter(index, row) {
		return [
			'<a href="javascript:void(0)" class="edit" title="Edit">',
				'<i class="glyphicon glyphicon-pencil"></i>',
			'</a>',
			'<a href="javascript:void(0)" class="remove" title="Remove">',
				'<i class="glyphicon glyphicon-remove"></i>',
			'</a>'
		].join('');
	}*/

	window.operateEvents = {
		'click .remove': function (e, value, row, index) {
			// $table.bootstrapTable('remove', {
			// 	field: 'user_name',
			// 	values: [row.user_name]
			// });
			$.ajax({
				type: "POST",
				url: "",
				data: {
					user_id: row['user_id']
				},
				dataType: 'JSON',
				success: function (data) {
					if ( data.result != 0 ) {
						toastr.info("info", data.message);
						return;
					}
					toastr.success("success", '删除成功');
					$table.bootstrapTable('remove', {
						field: 'user_id',
						values: [row['user_id']]
					});
				}
			});
			return false;
		},
	};

	// 删除
	function deleteUser(ids) {
		var msg = "您真的确定要删除吗？";
		if (confirm(msg) == true) {
			$.ajax ({
				url: "",  //删除数据的api
				type: "POST",
				data: {
					ids: ids
				},
				success: function (data) {
					alert(data.msg);

					//重新加载数据
					$table.bootstrapTable('refresh',{url: ''});  //加载数据的api
				}
			});
		}
	}
	// 批量删除
	function deleteUserList() {
		var rows = $table.bootstrapTable('getSelections');
		if( rows.length == 0 ) {
			alert("请先选择要删除的记录！");
			return;
		}
		var ids = '';
		for (var i = 0; i < rows.length; i++) {
			ids += rows[i].user_id + ",";
		}
		ids = ids.substring(0, ids.length-1);
		deleteUser(ids);
	}
	// //获取表格记录
	// var rows = $table.bootstrapTable('getSelections');
	// if (rows.length > 0) {
	// 	user_id = rows[0].user_id;
	// }

	// //多条记录删除
	// function Delete() {
	// 	var ids = "";  //得到用户选择的数据的ID
	// 	var rows = $table.bootstrapTable('getSelections');
	// 	for (var i = 0; i < rows.length; i++) {
	// 		ids += rows[i].user_id + ',';
	// 	}
	// 	ids = ids.substring(0, ids.length-1);

	// 	DeleteByIds(ids);
	// }
	
	
