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

  $urlRouterProvider.otherwise('/login');
});


/* Exemplo de rota Basica
    .state('NOMEROTA',{
      url:'/NOMEURL',
      views:{ (colocar 'view' caso depender do menu)
        templateUrl: 'CAMINHO DO TEMPLATE'
        controller: 'NOME CONTROLLER'
      }
    })
*/
