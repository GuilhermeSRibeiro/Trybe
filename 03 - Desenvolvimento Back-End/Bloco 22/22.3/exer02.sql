USE sakila;

CREATE VIEW top_10_customers AS
SELECT c.customer_id,
c.first_name,
SUM(p.amount) AS `Total amount`
FROM customer AS c
INNER JOIN
payment AS p
ON
c.customer_id = p.customer_id
GROUP BY
customer_id
ORDER BY
`Total amount` DESC
LIMIT 10;

SELECT * FROM top_10_customers;

DROP VIEW top_10_customers;
