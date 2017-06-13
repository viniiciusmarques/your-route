/* Banco */
CREATE DATABASE bd_yourroute
TEMPLATE template0
ENCODING = 'utf8'
CONNECTION LIMIT -1

/* Tabela de rotas */ 
CREATE TABLE tb_rotas(
id_rota		SERIAL,
DataPartida	DATE,
DataEntrega	DATE,
partida		VARCHAR,
destino		VARCHAR,
CONSTRAINT pk_id_rota PRIMARY KEY (id_rota)
);