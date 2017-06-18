angular.module('starter').controller('generalController',function($scope, $state, $cordovaGeolocation, $http, $rootScope, HttpService){

  var options = {timeout: 10000, enableHighAccuracy: true};

//função de dados "cidade, dia semana, dia, mes e ano"
 $scope.dadosLocalizacao = function(){
  /* funcao de data */
  meses = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");
	semana = new Array("Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado");
	hoje = new Date();
	dia = hoje.getDate();
	dias = hoje.getDay();
	mes = hoje.getMonth();
	ano = hoje.getFullYear();
  var registro = ', ' + semana[dias] + ', dia ' + dia + ' de ' + meses[mes] + '  de ' + ano;
  $scope.dados = registro;
/* funcao de cidade do maps */
   $cordovaGeolocation.getCurrentPosition(options).then(function(position){
     var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
     var lat = latLng.lat();
     var long = latLng.lng();
     $http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+long+'&key=AIzaSyA9FlzaMej0KZu58pWT0DXa0BLL4dZVzc8')
     .then(function(response){
       $scope.dados = response.data.results[0].address_components[3].long_name + $scope.dados;
     });
   });
 }

/* Filtro */
 $scope.filtros = [
     'DataPartida','DataEntrega', 'Distancia', 'destino', 'partida'
   ];

  $scope.buscaRotas = function (){
    HttpService.getRotas()
      .then(function(rotas){
        $scope.bancoRotas = rotas;
      });
  }

  $scope.buscaRotasLocal = function (){
    $scope.localRotas =  HttpService.getRotasLocal();
    $scope.$broadcast('scroll.refreshComplete');
  }

$scope.visualizarRota = function($rota){

  $state.go('menu.route');

  //Instanciar o DistanceMatrixService
  var service = new google.maps.DistanceMatrixService();
  //executar o DistanceMatrixService
    service.getDistanceMatrix(
    {
        //Origem
        origins: [$rota.partida],
        //Destino
        destinations: [$rota.destino],
        //Modo (DRIVING | WALKING | BICYCLING)
        travelMode: google.maps.TravelMode.DRIVING,
        //Sistema de medida (METRIC | IMPERIAL)
        unitSystem: google.maps.UnitSystem.METRIC
        //Vai chamar o callback
    }, callback);
    //Tratar o retorno do DistanceMatrixService
    function callback(response, status) {
        if (status == google.maps.DistanceMatrixStatus.OK)
            $("#map").attr("src", "https://maps.google.com/maps?saddr=" + response.originAddresses + "&daddr=" + response.destinationAddresses + "&output=embed");
        };


};

 $scope.localRota = function($rota){
   HttpService.localRota($rota);
   swal("Salvo!", "Rota sincronizada com sucesso.", "success");
   $state.go('menu.listRoute');
 }

 $scope.verificaRota = function($rota) {
   let rotasLocal = HttpService.getRotasLocal();
   let qtd = Object.keys(rotasLocal).length;

    if(rotasLocal == false){
      $rota['chave'] = false;
    }else{
      for(var i = 0; i <= qtd - 1; i++){
        if($rota.id_rota == rotasLocal[i].id_rota){
          $rota['chave'] = true;
          break;
        }else{
          $rota['chave'] = false;
        }
      };
    }
    $rootScope.detalheRota = $rota;
    $state.go('menu.detalheRota');
 };

 $scope.removeLocalRota = function($rota){
  swal({
    title: "Têm certeza que deseja remover essa rota da sua lista?",
    text: "Essa ação não podera ser revertida",
    type: "warning",
    showCancelButton: true,
    cancelButtonText:"Cancelar",
    confirmButtonColor: "blue",
    confirmButtonText: "Sim, tenho certeza",
    closeOnConfirm: false
    },
    function(){
      var retorno = HttpService.removeLocalRota($rota);
      if(retorno == true)
        swal("Removido!", "Sua rota acaba de ser excluida com sucesso.", "success");
      });
    };
});
