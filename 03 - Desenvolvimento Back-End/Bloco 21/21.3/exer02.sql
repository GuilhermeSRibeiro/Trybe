USE sakila;

-- 1. Utilizando a tabela sakila.payment, monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id.
DELIMITER $$
CREATE FUNCTION RetornaTotalDePagamentoDeUmCliente(id INT)
RETURNS DECIMAL READS SQL DATA
BEGIN
	DECLARE total DECIMAL;
    SELECT COUNT(*)
    FROM payment
    WHERE customer_id = id
    INTO total;
    RETURN total;
END $$
DELIMITER ;
SELECT RetornaTotalDePagamentoDeUmCliente(1);

-- 2. Crie uma function que, dado o parâmetro de entrada inventory_id, retorna o nome do filme vinculado ao registro de inventário com esse id.
-- 3. Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action', 'Horror') e retorna a quantidade total de filmes registrados nessa categoria.