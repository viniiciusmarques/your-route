var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var core_use = require('cors');
var pg = require('pg');
var md5 = require('md5');

app.use(core_use());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var config = {
  user: 'postgres', //env var: PGUSER
  database: 'bd_yourroute', //env var: PGDATABASE
  password: 'root', //env var: PGPASSWORD
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};
var pool = new pg.Pool(config);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////REQUISIÇÕES DE BUSCA//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/consultaRotas', function (req, res) {

	// to run a query we can acquire a client from the pool,
	// run a query on the client, and then return the client to the pool
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('SELECT * FROM tb_rotas',
      function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  return console.error('error running query', err);
		}
		res.setHeader('Access-Control-Allow-Origin','*');
    res.json(result.rows); // servidor retorna a consulta em formato json
		});
	});
});
/*
app.get('/login', function (req, res) {

	// to run a query we can acquire a client from the pool,
	// run a query on the client, and then return the client to the pool
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('SELECT * FROM tb_usuarios WHERE nomeusuario = \'' + req.body.username + '\' AND senha = \'' + md5(req.body.senha) + '\' AND fg_ativo = 1',
      function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  return console.error('error running query', err);
		}
		res.setHeader('Access-Control-Allow-Origin','*');
    res.json(result.rows); // servidor retorna a consulta em formato json
		});
	});
});

app.get('/buscaDisciplina/:id', function (req, res) {
  var id = req.params.id;
	// to run a query we can acquire a client from the pool,
	// run a query on the client, and then return the client to the pool
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('SELECT * FROM tb_disciplinas WHERE id_materia = ' + id,
      function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  return console.error('error running query', err);
		}
		res.setHeader('Access-Control-Allow-Origin','*');
    res.json(result.rows); // servidor retorna a consulta em formato json
		});
	});
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////REQUISIÇÕES DE INSERÇÃO////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*app.post('/insertDisciplina', function (req, res) {

	// to run a query we can acquire a client from the pool,
	// run a query on the client, and then return the client to the pool
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('INSERT INTO tb_disciplinas (id_usuario,nome_disciplina,nome_professor,fg_ativo) '+
                 'VALUES(1,\''+ req.body.nome_disciplina + '\',\'' + req.body.nome_professor +'\',1)',
      function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  return console.error('error running query', err);
		}
		res.setHeader('Access-Control-Allow-Origin','*');
    res.json(result.rows); // servidor retorna a consulta em formato json
		});
	});
});

app.post('/insertUsuario', function (req, res) {

	// to run a query we can acquire a client from the pool,
	// run a query on the client, and then return the client to the pool
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('INSERT INTO tb_usuarios (nome,curso,nomeusuario,senha,fg_ativo) '+
                 'VALUES(\''+ req.body.nome + '\',\'' + req.body.curso +'\',\'' + req.body.nomeusuario + '\',\'' + md5(req.body.senha) + '\',1)',
      function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  return console.error('error running query', err);
		}
		res.setHeader('Access-Control-Allow-Origin','*');
    res.json(result.rows); // servidor retorna a consulta em formato json
		});
	});
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////REQUISIÇÕES DE DELETE/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.put('/deleteDisciplina/:id', function (req, res) {
  var id = req.params.id;
	// to run a query we can acquire a client from the pool,
	// run a query on the client, and then return the client to the pool
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('UPDATE tb_disciplinas SET fg_ativo = 0 WHERE id_materia = ' + id,
      function(err, result) {
		//call `done()` to release the client back to the pool
		done();
		if(err) {
		  return console.error('error running query', err);
		}
		res.setHeader('Access-Control-Allow-Origin','*');
    res.json(result.rows); // servidor retorna a consulta em formato json
		});
	});
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////REQUISIÇÕES DE UPDATE//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.put('/updateDisciplina', function (req, res) {

	// to run a query we can acquire a client from the pool,
	// run a query on the client, and then return the client to the pool
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('UPDATE tb_disciplinas SET nome_disciplina = \'' + req.body.nome_disciplina + '\', nome_professor = \'' + req.body.nome_professor + '\' WHERE id_materia = '+ req.body.id_materia,
      function(err, result) {
		//call `done()` to release the client back to the pool
		done();
		if(err) {
		  return console.error('error running query', err);
		}
		res.setHeader('Access-Control-Allow-Origin','*');
    res.json(result.rows); // servidor retorna a consulta em formato json
		});
	});
});
*/
app.listen(2000);
