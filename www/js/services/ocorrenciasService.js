angular.module('starter').service('ocorrenciasService', function(){
  return {
    Tempo: function($tempo){
      var tempo = [];

      if(typeof localStorage.tempo != 'undefined'){
        tempo = JSON.parse(localStorage.tempo);
      }
      tempo.push($tempo);

      var paraString = JSON.stringify(tempo);
      localStorage.setItem('tempo',paraString);
      return true;
    },

    getTempoRotas: function(){
      if(typeof localStorage.tempo == 'undefined')
        return false;
      else{
       return info = JSON.parse(localStorage.tempo);

     }
    },

    cargaDescarga: function($info){
      var cargaDescarga = [];

      if(typeof localStorage.cargaDescarga != 'undefined'){
        cargaDescarga = JSON.parse(localStorage.cargaDescarga);
      }
      cargaDescarga.push($info);

      var paraString = JSON.stringify(cargaDescarga);
      localStorage.setItem('cargaDescarga',paraString);
      return true;
    },

    getCargaDescarga: function(){
      if(typeof localStorage.cargaDescarga == 'undefined')
        return false;
      else
      return JSON.parse(localStorage.cargaDescarga);
    },

    alimentacao: function($info){
      var alimentacao = [];

      if(typeof localStorage.alimentacao != 'undefined'){
        alimentacao = JSON.parse(localStorage.alimentacao);
      }
      alimentacao.push($info);

      var paraString = JSON.stringify(alimentacao);
      localStorage.setItem('alimentacao',paraString);
      return true;
    },

    getAlimentacao: function(){
      if(typeof localStorage.alimentacao == 'undefined')
        return false;
      else
      return JSON.parse(localStorage.alimentacao);
    },

    descansoPernoite: function($info){
      var descansoPernoite = [];

      if(typeof localStorage.descansoPernoite != 'undefined'){
        descansoPernoite = JSON.parse(localStorage.descansoPernoite);
      }
      descansoPernoite.push($info);

      var paraString = JSON.stringify(descansoPernoite);
      localStorage.setItem('descansoPernoite',paraString);
      return true;
    },

    getDescansoPernoite: function(){
      if(typeof localStorage.descansoPernoite == 'undefined')
        return false;
      else
      return JSON.parse(localStorage.descansoPernoite);
    },

    manutencao: function($info){
      var manutencao = [];

      if(typeof localStorage.manutencao != 'undefined'){
        manutencao = JSON.parse(localStorage.manutencao);
      }
      manutencao.push($info);

      var paraString = JSON.stringify(manutencao);
      localStorage.setItem('manutencao',paraString);
      return true;
    },

    getManutencao: function(){
      if(typeof localStorage.manutencao == 'undefined')
        return false;
      else
      return JSON.parse(localStorage.manutencao);
    },

    abastecimento: function($info){
      var abastecimento = [];

      if(typeof localStorage.abastecimento != 'undefined'){
        abastecimento = JSON.parse(localStorage.abastecimento);
      }
      abastecimento.push($info);

      var paraString = JSON.stringify(abastecimento);
      localStorage.setItem('abastecimento',paraString);
      return true;
    },

    getAbastecimento: function(){
      if(typeof localStorage.abastecimento == 'undefined')
        return false;
      else
      return JSON.parse(localStorage.abastecimento);
    },

    fiscalizacao: function($info){
      var fiscalizacao = [];

      if(typeof localStorage.fiscalizacao != 'undefined'){
        fiscalizacao = JSON.parse(localStorage.fiscalizacao);
      }
      fiscalizacao.push($info);

      var paraString = JSON.stringify(fiscalizacao);
      localStorage.setItem('fiscalizacao',paraString);
      return true;
    },

    getFiscalizacao: function(){
      if(typeof localStorage.fiscalizacao == 'undefined')
        return false;
      else
      return JSON.parse(localStorage.fiscalizacao);
    },

    cliente: function($info){
      var cliente = [];

      if(typeof localStorage.cliente != 'undefined'){
        cliente = JSON.parse(localStorage.cliente);
      }
      cliente.push($info);

      var paraString = JSON.stringify(cliente);
      localStorage.setItem('cliente',paraString);
      return true;
    },

    getCliente: function(){
      if(typeof localStorage.cliente == 'undefined')
        return false;
      else
      return JSON.parse(localStorage.cliente);
    },
  }
});
