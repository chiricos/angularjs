var app = angular.module("MyfirstApp",[]);
app.controller('FirstController',["$scope","$http",function(m,h){

    m.nombre = "edward diaz ";
    m.nuevoComentario= {};
    m.comentarios = [
        {
            comentario : "comentario1",
            username : "drawde"
        },
        {
            comentario : "comentario2",
            username : "zaid"
        }
    ];
    m.agregarComentario = function(){
        m.comentarios.push(m.nuevoComentario);
        m.nuevoComentario={};
    }

}]);