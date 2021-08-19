CREATE DATABASE IF NOT EXISTS Zoologico;

USE Zoologico;
CREATE TABLE Animal(
	Animal_id INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL,
    Especie VARCHAR(50) NOT NULL,
    Sexo VARCHAR(5) NOT NULL,
    Idade INT NOT NULL,
    Localizacao VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE Gerente(
	Gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE Cuidador(
	Cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL,
    Gerente_id INT NOT NULL,
    FOREIGN KEY (Gerente_id) REFERENCES Gerente(Gerente_id)
) ENGINE=InnoDB;

CREATE TABLE Animal_Cuidador(
	Animal_id INT NOT NULL,
    Cuidador_id INT NOT NULL,
    FOREIGN KEY (Animal_id) REFERENCES Animal(Animal_id),
    FOREIGN KEY (Cuidador_id) REFERENCES Cuidador(Cuidador_id)
) ENGINE=InnoDB;
