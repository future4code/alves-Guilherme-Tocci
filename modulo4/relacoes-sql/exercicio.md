Ex 1
a) é a chave que permite a referência a registros oriundos de outras tabelas.
b)CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "História e dramatização incríveis!",
    10,
		"002"
);

c)Cannot add or update a child row: a foreign key constraint fails (`alves-guilherme-tocci`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`)). Isso aconteceu pois o id que coloquei era inválido do tipo string e ids válidos tem de ser únicos e numéricos.
d)ALTER TABLE Movie DROP COLUMN rating;

Ex 2
a)Vários itens se relacionam com vários itens.
b)