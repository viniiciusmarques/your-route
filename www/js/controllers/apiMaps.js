angular.module('starter').controller('apiMaps',function($scope, $state, $cordovaGeolocation, $http, $rootScope){

//GOOGLE MAPS
//Exibição de mapa
  var options = {timeout: 10000, enableHighAccuracy: true};

  $cordovaGeolocation.getCurrentPosition(options).then(function(position){

    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

//Função de markup
    google.maps.event.addListenerOnce($scope.map, 'idle', function(){

     var marker = new google.maps.Marker({
         map: $scope.map,
         animation: google.maps.Animation.DROP,
         position: latLng
     });

     var infoWindow = new google.maps.InfoWindow({
         content: "Here I am!"
     });

     google.maps.event.addListener(marker, 'click', function () {
         infoWindow.open($scope.map, marker);
     });

   });
  });
//FIM GOOGLE MAPS
});
