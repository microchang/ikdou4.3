angular.module('myApp', []).controller('userCtrl', ['$scope', '$http', function($scope, $http) {
	var url = '/admin/adminListPost';
	
	$http.post(url).success(function(data) {
		console.log(data);
		$scope.data = data.movies;
	});
	
	$scope.add = function(){
		window.location.href='/admin/adminListAdd';
	}
	
	/**
	 *	元素索引
	 */
	var findIndex = function(id){
		var index = -1;
		angular.forEach($scope.data,function(item,key){
			if(item._id===id){
				index = key;
				return;
			}
		});
		
		return index;
	}
	
	/**
	 *	删除某一项
	 */
	$scope.remove = function(id){
		if(!confirm('确实要删除吗?')){  
			return false;  
		}  
		var index = findIndex(id);
		if(index !=-1){
			$.ajax({
				type:'delete',
				url:'/admin/adminListDelete',
				data:{id:id},
				success:function(data){
					if(data.success ===1){
						$scope.data.splice(index,1)
						window.location.href='/admin/adminListGet';
					}
				}
			})
		}
	}
	
}])