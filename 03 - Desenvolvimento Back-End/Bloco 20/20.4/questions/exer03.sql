USE sakila;
SET SQL_SAFE_UPDATES = 0;
-- 1. Exclua do banco de dados o ator com o nome de "KARL".
SELECT actor_id FROM actor
WHERE first_name = 'KARL';

DELETE FROM film_actor
WHERE actor_id = 12;

DELETE FROM actor
WHERE first_name = 'KARL';

-- 2. Exclua do banco de dados os atores com o nome de "MATTHEW".
SELECT actor_id FROM actor
WHERE first_name = 'MATTHEW';

DELETE FROM film_actor
WHERE actor_id IN (8,103,181);

DELETE FROM actor
WHERE first_name = 'MATTHEW';

-- 3. Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
DELETE FROM film_text
WHERE description LIKE '%saga%';

-- 4. Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category.
TRUNCATE film_actor;
TRUNCATE film_category;

-- 5. Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).
-- R: Botão direito, "Table Inspector", aba DDL.

-- 6. Exclua o banco de dados e o recrie (use as instruções no início desta aula).
-- R: Botão direito, "Drop Schema", "Drop now", depois basta recupera-lo.
