USE Albuns;

CREATE TABLE Estilo_Musical(
	Estilo_id INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE Album(
	Album_id INT PRIMARY KEY AUTO_INCREMENT,
    Artista_id INT NOT NULL,
    Titulo VARCHAR(100) NOT NULL,
    Preco DECIMAL(5,2) NOT NULL,
    Estilo_id INT NOT NULL,
    FOREIGN KEY (Artista_id) REFERENCES Artista(Artista_id),
    FOREIGN KEY (Estilo_id) REFERENCES Estilo_Musical(Estilo_id)
) ENGINE=InnoDB;
