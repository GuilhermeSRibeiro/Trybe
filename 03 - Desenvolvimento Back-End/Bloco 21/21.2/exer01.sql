USE sakila;
-- 1. Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor.
SELECT actor.actor_id AS 'ID ator',
CONCAT(actor.first_name,' ',actor.last_name) AS 'Noma completo',
fa.film_id AS 'ID filme'
FROM actor
INNER JOIN film_actor fa
ON actor.actor_id = fa.actor_id;

-- 2. Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT staff.first_name AS 'Nome',
staff.last_name AS 'Sobrenome',
address.address AS 'Endereço'
FROM staff
INNER JOIN address
ON staff.address_id = address.address_id;

-- 3. Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
SELECT customer.customer_id AS 'ID do cliente',
CONCAT(customer.first_name,' ',customer.last_name) AS `Nome completo`,
customer.email AS 'e-mail',
address.address_id AS 'ID do endereço',
address.address AS 'Rua'
FROM address
INNER JOIN customer
ON address.address_id = customer.address_id
ORDER BY `Nome completo` DESC
LIMIT 100;

-- 4. Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer.
SELECT CONCAT(customer.first_name,' ',customer.last_name) AS 'Nome completo',
customer.email AS 'E-mail',
address.address_id AS 'ID do endereço',
address.address AS 'Endereço',
address.district AS 'Distrito'
FROM address
INNER JOIN customer
ON address.address_id = customer.address_id
WHERE address.district = 'California'
AND customer.first_name LIKE '%rene%';

-- 5. Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.
SELECT CONCAT(customer.first_name,' ',last_name) AS `Nome completo`,
COUNT(address.address) AS 'Quantidade de endereços'
FROM customer
INNER JOIN address
ON address.address_id = customer.address_id
WHERE customer.active = 1
GROUP BY `Nome completo`
ORDER BY `Nome completo` DESC;

-- 6. Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT staff.first_name AS `Nome`,
staff.last_name AS `Sobrenome`,
AVG(payment.amount) AS 'Média de pagamento'
FROM payment
INNER JOIN staff
ON payment.staff_id = staff.staff_id
WHERE YEAR(payment.payment_date) = 2006
GROUP BY `Nome`, `Sobrenome`;

-- 7. Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.

