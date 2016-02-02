angular.module('ToDoList',["LocalStorageModule"])
.controller("ToDoController",function($scope,localStorageService){
	if(localStorageService.get("angular-todolist")){
		$scope.todo = localStorageService.get("angular-todolist");
	}else{
		$scope.todo = {};
	}
	/*
		{
			descripcion: 'Terminar el curso de angular',
			fecha: '3-03-2015 2:00pm'
		}
	*/
	
	$scope.addActv = function(){
		$scope.todo.push($scope.newActv);
		$scope.addActv ={};
		localStorageService.set("angular-todolist",$scope.todo);
	}
	$scope.clean = function(){
		$scope.todo = {};
		localStorageService.set("angular-todolist",$scope.todo);
	}
});