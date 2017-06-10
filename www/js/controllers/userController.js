angular.module('starter').controller('userController', function($scope,$state){

  function data(){

  }
  $scope.logar = function(){
    /*logica de login */
    $state.go('menu.home');

    /*
      var data = new Date();
      var dia = data.getDate();
      var mes = data.getMonth() + 1;
      var ano = data.getFullYear();
      var dataFinal =  [dia, mes, ano].join('/');

    console.log(dataFinal);*/
  }



  $scope.cadastrar = function(){
    /* cadastro de usuario */
    swal("Bom Trabalho!", "Você já está cadastrado!", "success");
    $state.go('login');
  }
});
