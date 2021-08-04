USE Scientists;

-- 1. Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".
SELECT 'This is SQL Exercise, Practice and Solution' AS 'Answer';

-- 2. Escreva uma query para exibir três números em três colunas.
SELECT 1 AS 'Primeiro número', 2 AS 'Segundo número', 3 AS 'Terceiro número';

-- 3. Escreva uma query para exibir a soma dos números 10 e 15.
SELECT 10 + 15 AS 'Soma';

-- 4. Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
SELECT 5 + (10 / 5) AS 'Resultado';

-- 5. Escreva uma query para exibir todas as informações de todos os cientistas.
SELECT * FROM Scientists;

-- 6. Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;

-- 7. Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
SELECT Name FROM Scientists
ORDER BY Name;

-- 8. Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.
SELECT Name FROM Projects
ORDER BY Name DESC;

-- 9. Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.


-- 10. Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.


-- 11. Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.


-- 12. Escreva uma query para exibir o nome do projeto com maior quantidade de horas.


-- 13. Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.


-- 14. Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.


-- 15. Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.

