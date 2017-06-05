angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('login',{
    url:'/login',
    templateUrl:'templates/login.html',
    //controller:
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
