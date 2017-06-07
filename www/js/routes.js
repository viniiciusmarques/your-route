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
