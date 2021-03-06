-- Para os exercícios a seguir, vamos usar a tabela sakila.actor
USE sakila;
-- 1. Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.
SELECT DISTINCT(last_name) FROM actor;

-- 2. Quantos sobrenomes únicos temos na tabela?
SELECT COUNT(DISTINCT(last_name)) FROM actor;

-- 3. Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.
SELECT * FROM actor
ORDER BY first_name DESC, last_name;

-- 4. Vá até a tabela language do sakila e crie uma pesquisa que mostre os 5 primeiros idiomas cadastrados, mas não mostre o idioma english.
SELECT * FROM language
LIMIT 5 OFFSET 1;

-- 5. Vá até a tabela film e selecione todos os dados da tabela. Pronto, fez isso?
SELECT * FROM film;

-- 6. Agora vamos tentar fazer o seguinte: Crie uma query para encontrar os 20 primeiros filmes, incluindo o título, o ano de lançamento, a duração, a classificação indicativa e o custo de substituição. Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.
SELECT title, release_year, length, rating, replacement_cost FROM film
ORDER BY length DESC, replacement_cost
LIMIT 20;
