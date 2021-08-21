USE sakila;
CREATE VIEW film_info AS
SELECT
a.actor_id,
CONCAT(a.first_name,' ',a.last_name) AS 'actor',
f.title
FROM
actor AS a
INNER JOIN
film_actor AS fa
ON
a.actor_id = fa.actor_id
INNER JOIN
film AS f
ON
f.film_id = fa.film_id
ORDER BY
actor;
