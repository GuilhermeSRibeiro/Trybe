USE hotel;
-- 1. Usando o EXISTS na tabela books_lent e books, exiba o id e título dos livros que ainda não foram emprestados.
SELECT
	Id,
    Title AS 'Título'
FROM
	Books
WHERE NOT EXISTS (
SELECT
	*
FROM
	Books_Lent
WHERE
	Books.Id = Books_Lent.book_id
);

-- 2. Usando o EXISTS na tabela books_lent e books, exiba o id e título dos livros que estão atualmente emprestados e que contêm a palavra "lost" no título.
SELECT
	Id,
	Title AS 'Título'
FROM
	Books
WHERE EXISTS (
SELECT
	*
FROM
	Books_Lent
WHERE
	Books.Id = Books_Lent.book_id
AND Books_Lent.returned = 0
AND Books.Title LIKE '%lost%'
);

-- 3. Usando a tabela carsales e customers, exiba apenas o nome dos clientes que ainda não compraram um carro.
-- 4. Usando o comando EXISTS em conjunto com JOIN e as tabelas cars, customers e carsales, exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.