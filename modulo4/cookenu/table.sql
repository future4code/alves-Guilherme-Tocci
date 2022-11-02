-- Active: 1661191810678@@35.226.146.116@3306@alves-guilherme-tocci
CREATE TABLE usuario_cookenu(
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    nome VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
);
CREATE Table receita_cookenu(
    id VARCHAR(255) PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    data_criacao DATE NOT NULL,
    usuario_id VARCHAR(255),
    Foreign Key (usuario_id) REFERENCES usuario_cookenu(id)
);

SELECT from usuario_cookenu;