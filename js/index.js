/**
 * Created by lenovo-pc on 2017/4/25.
 */
var app = angular.module('app',['ui.router'])
    .directive('inputFile',function () {
        return {
            template:'<div class="input-file">'+
            '<label for="{{inputId}}"></label>'+
            '<input type="file" id="{{inputId}}">'+
            '</div>',
            restrict:'E',
            scope:{},
            controller:function ($scope) {
                $scope.inputId = 'inputFile'+$scope.$id
            },
            link:function (scope,ele) {
                var inputFile = ele.find('div');
                var input = $(inputFile).find('input');
                input.on('change',function () {
                    var reader = new FileReader();
                    reader.readAsDataURL(this.files[0]);
                    reader.onload = function () {
                        console.log($(inputFile).find('label'));
                        $(inputFile).find('label')[0].style.background = 'url('+this.result+') no-repeat center center'
                    }
                })
            }
        }
    });
//≈‰÷√¬∑”…
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/index')
    $urlRouterProvider.when('/index',"/index/community")
    $urlRouterProvider.when("/index/community","/index/community/introduce")
    $urlRouterProvider.when("/index/community/examine","/index/community/examine/list")
    $stateProvider.state('index',{
        url: '/index',
        templateUrl:"html/index.html"
    })
    .state('index.home',{
        url: '/home',
        templateUrl:"html/home.html"
    })
    .state('index.community',{
        url: '/community',
        templateUrl:"html/community.html"
    })
    .state('index.organization',{
        url: '/organization',
        templateUrl:"html/organization.html"
    })
    .state('index.autonomy',{
        url: '/autonomy',
        templateUrl:"html/autonomy.html"
    })
    .state('index.community.introduce',{
        url: '/introduce',
        templateUrl:"html/introduce.html"
    })
    .state('index.community.examine',{
        url: '/examine',
        templateUrl:"html/examine.html"
    })
    .state('index.community.summary',{
        url: '/summary',
        templateUrl:"html/summary.html"
    })
    .state('index.community.examine.list',{
        url: '/list',
        templateUrl:"html/list.html"
    })
    .state('index.community.examine.message',{
        url: '/message',
        templateUrl:"html/message.html"
    })
})