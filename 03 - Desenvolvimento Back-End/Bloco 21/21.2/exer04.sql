USE hotel;
-- 1. Usando o EXISTS na tabela books_lent e books, exiba o id e título dos livros que ainda não foram emprestados.
SELECT
	Id,
    Title AS 'Título'
FROM
	Books AS B
WHERE NOT EXISTS (
SELECT
	*
FROM
	Books_Lent AS BL
WHERE
	B.Id = BL.book_id
);

-- 2. Usando o EXISTS na tabela books_lent e books, exiba o id e título dos livros que estão atualmente emprestados e que contêm a palavra "lost" no título.
SELECT
	Id,
	Title AS 'Título'
FROM
	Books AS B
WHERE EXISTS (
SELECT
	*
FROM
	Books_Lent AS BL
WHERE
	B.Id = BL.book_id
AND BL.returned = 0
AND B.Title LIKE '%lost%'
);

-- 3. Usando a tabela carsales e customers, exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT
	Name AS 'Nome'
FROM
	Customers AS C
WHERE NOT EXISTS (
SELECT
	*
FROM
	CarSales AS CS
WHERE
	C.CustomerId = CS.CustomerId
);

-- 4. Usando o comando EXISTS em conjunto com JOIN e as tabelas cars, customers e carsales, exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT
	C.Name AS 'Nome',
    Ca.Name AS 'Carro'
FROM
	Customers AS C
INNER JOIN
	Cars AS Ca
WHERE EXISTS (
SELECT
	*
FROM
	CarSales AS CS
WHERE
	C.CustomerId = CS.CustomerId
AND Ca.Id = CS.CarId
);
