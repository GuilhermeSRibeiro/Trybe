-- Para os exercícios a seguir, vamos usar a tabela sakila.film
USE sakila;
-- 1. Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
SELECT * FROM film;

-- 2. Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação.
SELECT title, release_year, rating FROM film;

-- 3. Quantos filmes temos cadastrados?
SELECT COUNT(*) FROM film;
