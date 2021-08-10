USE Pixar;
-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT
	M.title AS 'Título',
    BO.domestic_sales AS 'Nacionais',
    BO.international_sales AS 'Internacionais'
FROM
	Movies AS M
INNER JOIN
	BoxOffice AS BO
ON
	M.id = BO.movie_id;

-- Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
SELECT
	M.title AS 'Título',
    BO.international_sales + BO.domestic_sales AS 'Total de vendas'
FROM
	Movies AS M
INNER JOIN
	BoxOffice AS BO
ON
	M.id = BO.movie_id
WHERE
	BO.international_sales > BO.domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT
	M.title AS 'Título',
    BO.rating AS 'Avaliação'
FROM
	Movies AS M
INNER JOIN
	BoxOffice AS BO
ON
	M.id = BO.movie_id
ORDER BY
	Avaliação
DESC;

-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
	*
FROM
	Theater AS T
LEFT JOIN
	Movies AS M
ON
	T.id = M.theater_id
ORDER BY
	T.name;

-- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
	*
FROM
	Theater AS T
RIGHT JOIN
	Movies AS M
ON
	T.id = M.theater_id
ORDER BY
	T.name;

-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN, que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
SELECT
	M.title AS 'Título'
FROM
	Movies AS M
INNER JOIN
	BoxOffice AS BO
ON
	M.id = BO.movie_id
WHERE
	BO.rating > 7.5;
    
SELECT
	title AS 'Título'
FROM
	Movies
WHERE
	id
IN
	(
		SELECT
			movie_id
		FROM
			BoxOffice
		WHERE
			rating > 7.5
    );

-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN, que retornem as avaliações dos filmes lançados depois de 2009.
SELECT
	BO.rating AS 'Avaliação'
FROM
	BoxOffice AS BO
INNER JOIN
	Movies AS M
ON
	M.id = BO.movie_id
WHERE
	M.year > 2009;

SELECT 
    rating AS 'Avaliação'
FROM
    BoxOffice
WHERE
    movie_id
IN
	(
		SELECT 
            id
        FROM
            Movies
        WHERE
            year > 2009
	);

-- Exercício 8: Utilizando o EXISTS, selecione o nome e localização dos cinemas que possuem filmes em cartaz.
SELECT
	name AS 'Nome',
    location AS 'Localização'
FROM
	Theater AS T
WHERE EXISTS (
	SELECT
		*
	FROM
		Movies AS M
	WHERE
		T.id = M.theater_id
);

-- Exercício 9: Utilizando o EXISTS, selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
-- Exercício 10: Utilizando o INNER JOIN, selecione todas as informações dos filmes com avaliação maior que 8 e que estejam em cartaz.
-- Exercício 11: Utilizando o SELF JOIN, selecione os títulos e duração dos filmes que possuem o mesmo diretor.
-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN, que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.
