angular.module('starter').controller('userController', function($scope,$state){

  $scope.logar = function(){
    /*logica de login */
    $state.go('menu.home');
  }

  $scope.cadastrar = function(){
    /* cadastro de usuario */
    $state.go('login');
  }
});
