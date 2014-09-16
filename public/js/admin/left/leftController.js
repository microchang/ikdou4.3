//angular.module('myApp2', []).controller('leftCtrl', [ '$scope', '$http', function($scope,$http) {
//    var data = {
//        user:{
//            name:"随心、飞狐、疯兄",
//            img:"http://119.4.99.166/AppCofco/img/top.png"
//        }
//    };
//	$scope.leftListData = data;
//    console.log($scope.leftListData);
//}]);

function leftCtrl($scope){
    var data = {
        user:{
            name:"随心、飞狐、疯兄",
            img:"http://119.4.99.166/AppCofco/img/top.png"
        },
        list:[
            {
                link:"/home/indexIndexGet",
                title:"系统首页",
                icon:"fa fa-lg fa-home"
            },
            {
                link:"/admin/adminListGet",
                title:"电影列表管理",
                icon:"fa fa-lg fa-film",
                message:"14"
            },
            {
                link:"/admin/musicListGet",
                title:"音乐列表管理",
                icon:"fa fa-lg fa-music",
                list:[
                    {
                        link:"javascript:;",
                        title:"动感音乐",
                        icon:"fa fa-lg fa-fw fa-bar-chart-o"
                    },
                    {
                        link:"javascript:;",
                        title:"安静音乐",
                        icon:"fa fa-lg fa-fw fa-bar-chart-o"
                    },
                    {
                        link:"javascript:;",
                        title:"开车音乐",
                        new:"1",
                        icon:"fa fa-lg fa-fw fa-bar-chart-o"
                    }
                ]
            }
        ]
    };
    $scope.leftListData = data;
    console.log($scope.leftListData);
}