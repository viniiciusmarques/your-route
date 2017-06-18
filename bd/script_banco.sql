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

/* Insert teste */

INSERT INTO tb_rotas(DataPartida,DataEntrega,partida,destino)
VALUES
  ('10/06/2017','12/06/2017' ,'São Paulo','Franca'),
  ('15/06/2017','16/06/2017' ,'Rio de Janeiro','Goiania'),
  ('12/06/2017','14/06/2017' ,'Aramina','Cristais Paulista')