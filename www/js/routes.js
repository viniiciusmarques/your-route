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
  .state('error',{
    url:'/error',
    templateUrl:'templates/error.html'
  })

  .state('menu',{
    url:'menu',
    templateUrl:'templates/menu.html',
    abstract:true
  })

  .state('menu.home',{
    url:'/home',
    views :{
      'Conteudo' : {
        templateUrl: 'templates/home.html'
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
