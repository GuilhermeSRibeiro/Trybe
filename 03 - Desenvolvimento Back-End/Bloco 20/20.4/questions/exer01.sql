USE sakila;

-- 1. Insira um novo funcionário na tabela sakila.staff.
-- Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa explorada!
INSERT INTO staff (first_name, last_name, address_id, store_id, active, username)
VALUES ('Guilherme','Ribeiro',1,1,1,'Guilherme');

-- 2. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
INSERT INTO staff (first_name, last_name, address_id, store_id, active, username) VALUES
('Getúlio','Santos',1,1,1,'Getúlio'),
('Maria','Ribeiro',1,1,1,'Maria');

-- 3. Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
INSERT INTO actor (first_name, last_name)
SELECT first_name, last_name FROM customer
ORDER BY customer_id
LIMIT 5;

-- 4. Cadastre três categorias de uma vez só na tabela sakila.category.
INSERT INTO category (name) VALUES
('Adventure'),
('Cult'),
('Espionage');

-- 5. Cadastre uma nova loja na tabela sakila.store.

