USE sakila;

-- 1. Utilizando a tabela sakila.payment, monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id.
DELIMITER $$
CREATE FUNCTION RetornaTotalDePagamentoDeUmCliente(id INT)
RETURNS DECIMAL READS SQL DATA
BEGIN
	DECLARE total DECIMAL;
    SELECT COUNT(*)
    FROM payment
    WHERE customer_id = id
    INTO total;
    RETURN total;
END $$
DELIMITER ;
SELECT RetornaTotalDePagamentoDeUmCliente(1);

-- 2. Crie uma function que, dado o parâmetro de entrada inventory_id, retorna o nome do filme vinculado ao registro de inventário com esse id.
DELIMITER $$
CREATE FUNCTION RetornaFilmePeloIdDoInventario(inventory_id INT)
RETURNS VARCHAR(500) READS SQL DATA
BEGIN
	DECLARE filme VARCHAR(500);
    SELECT f.title
    FROM film AS f
    INNER JOIN inventory AS i
    ON f.film_id = i.film_id
    WHERE i.inventory_id = inventory_id
    INTO filme;
    RETURN filme;
END $$
DELIMITER ;
SELECT RetornaFilmePeloIdDoInventario(1);

-- 3. Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action', 'Horror') e retorna a quantidade total de filmes registrados nessa categoria.
DELIMITER $$
CREATE FUNCTION CalculaQuantidadeDeFilmesPorCategoria(categoria VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE quantidade INT;
    SELECT COUNT(*)
    FROM category AS c
    INNER JOIN film_category AS fc
    ON c.category_id = fc.category_id
    WHERE c.name = categoria
	INTO quantidade;
    RETURN quantidade;
END $$
DELIMITER ;
SELECT CalculaQuantidadeDeFilmesPorCategoria('Action');
