USE sakila;
-- 1. Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.
SELECT t1.film_id, t1.replacement_cost, t2.film_id, t2.replacement_cost
FROM film AS t1,
film AS t2
WHERE t1.replacement_cost = t2.replacement_cost
AND t1.film_id <> t2.film_id;

-- 2. Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.
