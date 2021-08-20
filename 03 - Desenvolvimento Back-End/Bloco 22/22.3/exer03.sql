USE sakila;
CREATE TABLE noticia(
    noticia_id INT PRIMARY KEY,
    titulo VARCHAR(100),
    historia VARCHAR(300)
) engine = InnoDB;

ALTER TABLE noticia ADD COLUMN data_postagem date NOT NULL;

ALTER TABLE noticia MODIFY noticia_id BIGINT;
