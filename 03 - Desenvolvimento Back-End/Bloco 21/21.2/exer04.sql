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

-- 2. Usando o EXISTS na tabela books_lent e books, exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.
-- 3. Usando a tabela carsales e customers, exiba apenas o nome dos clientes que ainda não compraram um carro.
-- 4. Usando o comando EXISTS em conjunto com JOIN e as tabelas cars, customers e carsales, exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.