USE sakila;
-- 1. Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.
SELECT rating, AVG(length) AS `Média de duração`
FROM film
GROUP BY rating
HAVING `Média de duração` BETWEEN (115) AND (121.5)
ORDER BY `Média de duração` DESC;

-- 2. Usando a query a seguir, exiba apenas os valores de custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.
SELECT rating, SUM(replacement_cost) AS `Custo de substituição`
FROM film
GROUP by rating
HAVING `Custo de substituição` > 3950.50
ORDER BY `Custo de substituição`;
