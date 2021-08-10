USE sakila;
-- 1. Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
DELIMITER $$
CREATE PROCEDURE ExibeOsDezAtoresMaisPopulares()
BEGIN
	SELECT
		CONCAT(a.first_name,' ',a.last_name) AS `Nome completo`,
        COUNT(*) AS `Quantidade de filmes`
	FROM
		actor AS a
	INNER JOIN
		film_actor AS fa
	ON
		a.actor_id = fa.actor_id
	INNER JOIN
		film AS f
	ON
		fa.film_id = f.film_id
	GROUP BY `Nome completo`
    ORDER BY `Quantidade de filmes` DESC
    LIMIT 10;
END $$
DELIMITER ;
CALL ExibeOsDezAtoresMaisPopulares();

DROP PROCEDURE ExibeOsDezAtoresMaisPopulares;

-- 2. Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme, seu titulo, o id de sua categoria e o nome da categoria selecionada. Use as tabelas film, film_category e category para montar essa procedure.
DELIMITER $$
CREATE PROCEDURE ExibeOsFilmesDaCategoria(IN categoria VARCHAR(100))
BEGIN
	SELECT
		f.film_id AS 'Id do filme',
		f.title AS 'Título',
		fc.category_id AS 'Id da categoria',
		c.name AS 'Categoria'
    FROM
		film AS f
    INNER JOIN
		film_category AS fc
    ON
		f.film_id = fc.film_id
    INNER JOIN
		category AS c
    ON
		c.category_id = fc.category_id
    WHERE
		c.name = categoria;
END $$
DELIMITER ;
CALL ExibeOsFilmesDaCategoria('Comedy');

DROP PROCEDURE ExibeOsFilmesDaCategoria;

-- 3. Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.