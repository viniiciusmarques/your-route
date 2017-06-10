angular.module('starter').controller('generalController',function($scope, $state, $cordovaGeolocation, $http, $rootScope){

//GOOGLE MAPS
//Exibição de mapa
  var options = {timeout: 10000, enableHighAccuracy: true};
//FIM GOOGLE MAPS

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




});
