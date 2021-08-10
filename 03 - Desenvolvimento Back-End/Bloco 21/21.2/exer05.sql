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
-- Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
-- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN, que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN, que retornem as avaliações dos filmes lançados depois de 2009.
-- Exercício 8: Utilizando o EXISTS, selecione o nome e localização dos cinemas que possuem filmes em cartaz.
-- Exercício 9: Utilizando o EXISTS, selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
-- Exercício 10: Utilizando o INNER JOIN, selecione todas as informações dos filmes com avaliação maior que 8 e que estejam em cartaz.
-- Exercício 11: Utilizando o SELF JOIN, selecione os títulos e duração dos filmes que possuem o mesmo diretor.
-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN, que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.
