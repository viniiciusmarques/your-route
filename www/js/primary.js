// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova','ionic-modal-select'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('login',{
    url:'/login',
    templateUrl:'templates/login.html',
    controller:'userController'
  })

  .state('cadUsuario',{
    url:'/cadUsuario',
    templateUrl:'templates/cadUsuario.html',
    controller:'userController'
  })
  .state('errorLogin',{
    url:'/errorLogin',
    templateUrl:'templates/errorLogin.html'
  })
  .state('errorCad',{
    url:'/errorCad',
    templateUrl:'templates/errorCad.html'
  })

  .state('menu',{
    url:'menu',
    templateUrl:'templates/menu.html',
    controller:'generalController',
    abstract:true
  })

  .state('menu.home',{
    url:'/home',
    views :{
      'Conteudo' : {
        templateUrl: 'templates/home.html',
        controller:'generalController'
      }
    }
  })

  .state('menu.route',{
    url:'/route',
    views:{
      'Conteudo': {
        templateUrl:'templates/route.html',
        controller:'apiMaps'
      }
    }
  })

  .state('menu.listRoute',{
    url:'/listRoute',
     views:{
       'Conteudo': {
        templateUrl:'templates/listRoute.html',
        controller:'generalController'
       }
     }
  })

  .state('menu.detalheRota',{
    url:'/detalheRota',
    views:{
      'Conteudo':{
        templateUrl:'templates/detalheRota.html',
        controller:'generalController'
      }
    }
  })

  .state('menu.myRoutes',{
    url:'/myRoutes',
    views:{
      'Conteudo':{
        templateUrl:'templates/myRoute.html',
        controller:'generalController'
      }
    }
  })


  .state('menu.ocorrencias',{
    url:'/ocorrencias',
    views:{
      'Conteudo':{
        templateUrl:'templates/ocorrencias.html',
        controller:'generalController'
      }
    }
  })

//ocorrencias
  .state('menu.tempoRotas',{
    url:'/tempoRotas',
    views:{
      'Conteudo':{
        templateUrl:'templates/ocorrencias/tempoRotas.html'//,
        //controller:''
      }
    }
  })

  .state('menu.cargaDescarga',{
    url:'/cargaDescarga',
    views:{
      'Conteudo':{
        templateUrl:'templates/ocorrencias/cargaDescarga.html'//,
        //controller:''
      }
    }
  })

  .state('menu.alimentacao',{
    url:'/alimentacao',
    views:{
      'Conteudo':{
        templateUrl:'templates/ocorrencias/alimentacao.html'//,
        //controller:''
      }
    }
  })

  .state('menu.descansoPernoite',{
    url:'/descansoPernoite',
    views:{
      'Conteudo':{
        templateUrl:'templates/ocorrencias/descansoPernoite.html'//,
        //controller:''
      }
    }
  })

  .state('menu.manutencao',{
    url:'/manutencao',
    views:{
      'Conteudo':{
        templateUrl:'templates/ocorrencias/manutencao.html'//,
        //controller:''
      }
    }
  })

  .state('menu.abastecimento',{
    url:'/abastecimento',
    views:{
      'Conteudo':{
        templateUrl:'templates/ocorrencias/abastecimento.html'//,
        //controller:''
      }
    }
  })

  .state('menu.fiscalizacao',{
    url:'/fiscalizacao',
    views:{
      'Conteudo':{
        templateUrl:'templates/ocorrencias/fiscalizacao.html'//,
        //controller:''
      }
    }
  })

  .state('menu.cliente',{
    url:'/cliente',
    views:{
      'Conteudo':{
        templateUrl:'templates/ocorrencias/cliente.html'//,
        //controller:''
      }
    }
  })

//cadastros
.state('menu.cadTempoRota',{
  url:'/cadTempoRota',
  views:{
    'Conteudo':{
      templateUrl:'templates/ocorrencias/registro/tempoRotas.html'//,
      //controller:''
    }
  }
})

.state('menu.cadCargaDescarga',{
  url:'/cadCargaDescarga',
  views:{
    'Conteudo':{
      templateUrl:'templates/ocorrencias/registro/cargaDescarga.html'//,
      //controller:''
    }
  }
})

.state('menu.cadAlimentacao',{
  url:'/cadAlimentacao',
  views:{
    'Conteudo':{
      templateUrl:'templates/ocorrencias/registro/alimentacao.html'//,
      //controller:''
    }
  }
})

.state('menu.cadDescansoPernoite',{
  url:'/cadDescansoPernoite',
  views:{
    'Conteudo':{
      templateUrl:'templates/ocorrencias/registro/descansoPernoite.html'//,
      //controller:''
    }
  }
})

.state('menu.cadManutencao',{
  url:'/cadManutencao',
  views:{
    'Conteudo':{
      templateUrl:'templates/ocorrencias/registro/manutencao.html'//,
      //controller:''
    }
  }
})

.state('menu.cadAbastecimento',{
  url:'/cadAbastecimento',
  views:{
    'Conteudo':{
      templateUrl:'templates/ocorrencias/registro/abastecimento.html'//,
      //controller:''
    }
  }
})

.state('menu.cadFiscalizacao',{
  url:'/cadFiscalizacao',
  views:{
    'Conteudo':{
      templateUrl:'templates/ocorrencias/registro/fiscalizacao.html'//,
      //controller:''
    }
  }
})

.state('menu.cadCliente',{
  url:'/cadCliente',
  views:{
    'Conteudo':{
      templateUrl:'templates/ocorrencias/registro/cliente.html'//,
      //controller:''
    }
  }
})

  $urlRouterProvider.otherwise('/login');
});

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
