angular.module('starter').controller('ocorrenciasController',   function($scope,ocorrenciasService,$state,$rootScope){
const id = $rootScope.detalheRota.id_rota;

$scope.tempo = {id_rota:id};
$scope.info = {id_rota:id};

  var sweetAlert = function(retorno){
    if(retorno == true){
      swal("Bom Trabalho!", "Ocorrencia cadastrada com sucesso!", "success");
    }
  };

  var verifica = function(info){
    for(var i=0; i <= info.length - 1; i++){
      if(id != info[i].id_rota){
        info = info.splice(1,[i]);
      }
    }
    return info;
  }

  $scope.inicioFimLocal = function(){
      let retorno = ocorrenciasService.Tempo($scope.tempo);
      sweetAlert(retorno);
      $state.go('menu.tempoRotas');
  };

  $scope.getTempoRotas = function(){
    var info = ocorrenciasService.getTempoRotas();
    info = verifica(info);
    $scope.info = info;
  }

  $scope.cargaDescarga = function(){
    let retorno = ocorrenciasService.cargaDescarga($scope.info);
    sweetAlert(retorno);
    $state.go('menu.cargaDescarga');
  };

  $scope.getCargaDescarga = function(){
    var info = ocorrenciasService.getCargaDescarga();
    info = verifica(info);
    $scope.info = info;
  }

  $scope.alimentacao = function(){
    let retorno = ocorrenciasService.alimentacao($scope.info);
    sweetAlert(retorno);
    $state.go('menu.alimentacao');
  }

  $scope.getAlimentacao = function(){
    var info = ocorrenciasService.getAlimentacao();
    info = verifica(info);
    $scope.info = info;
  }

  $scope.descansoPernoite = function(){
    let retorno = ocorrenciasService.descansoPernoite($scope.info);
    sweetAlert(retorno);
    $state.go('menu.descansoPernoite');
  }

  $scope.getDescansoPernoite = function(){
    var info = ocorrenciasService.getDescansoPernoite();
    info = verifica(info);
    $scope.info = info;
  }

  $scope.manutencao = function(){
    let retorno = ocorrenciasService.manutencao($scope.info);
    sweetAlert(retorno);
    $state.go('menu.manutencao');
  }

  $scope.getManutencao = function(){
    var info = ocorrenciasService.getManutencao();
    info = verifica(info);
    $scope.info = info;
  }

  $scope.abastecimento = function(){
    let retorno = ocorrenciasService.abastecimento($scope.info);
    sweetAlert(retorno);
    $state.go('menu.abastecimento');
  }

  $scope.getAbastecimento = function(){
    var info = ocorrenciasService.getAbastecimento();
    info = verifica(info);
    $scope.info = info;
  }


  $scope.fiscalizacao = function(){
    let retorno = ocorrenciasService.fiscalizacao($scope.info);
    sweetAlert(retorno);
    $state.go('menu.fiscalizacao');
  }

  $scope.getFiscalizacao = function(){
    var info = ocorrenciasService.getFiscalizacao();
    info = verifica(info);
    $scope.info = info;
  }

  $scope.cliente = function(){
    let retorno = ocorrenciasService.cliente($scope.info);
    sweetAlert(retorno);
    $state.go('menu.cliente');
  }

  $scope.getCliente = function(){
    var info = ocorrenciasService.getCliente();
    info = verifica(info);
    $scope.info = info;
  }

});
