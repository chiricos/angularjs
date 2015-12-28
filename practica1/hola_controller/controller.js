var app = angular.module("MyfirstApp",[]);
app.controller('FirstController',function($scope){

    $scope.nombre = "edward diaz ";
    $scope.nuevoComentario= {};
    $scope.comentarios = [
        {
            comentario : "comentario1",
            username : "drawde"
        },
        {
            comentario : "comentario2",
            username : "zaid"
        }
    ];
    $scope.agregarComentario = function(){
        $scope.comentarios.push($scope.nuevoComentario);
        $scope.nuevoComentario={};
    }

});