USE sakila;
CREATE TABLE noticia(
    noticia_id INT PRIMARY KEY,
    titulo VARCHAR(100),
    historia VARCHAR(300)
) engine = InnoDB;

ALTER TABLE noticia ADD COLUMN data_postagem date NOT NULL;

ALTER TABLE noticia MODIFY noticia_id BIGINT;

ALTER TABLE noticia MODIFY noticia_id BIGINT AUTO_INCREMENT;

ALTER TABLE noticia CHANGE historia conteudo_postagem VARCHAR(1000) NOT NULL;

ALTER TABLE noticia DROP COLUMN data_postagem;

ALTER TABLE noticia ADD COLUMN data_postagem DATETIME NOT NULL AFTER titulo;
