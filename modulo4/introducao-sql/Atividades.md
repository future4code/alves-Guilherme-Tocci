Exercicio 1
a)
Primary key = Define o identificador através de uma palavra chave
Unique = Define que a tabela não aceita 2 valores iguais na mesma coluna
Not Null Unique = Define que o campo não pode ficar vazio e é único
Not null = Define que o campo não pode ficar vazio

b) Show tables = mostra nossas tabelas
   Show Databases = Faz a visualização mais rápida de diferentes bases de dados.

c) Ele mostrou todas as informações do ator.

Exercicio 2

1-b) Aconteceu por que não podem ter o mesmo ID

Exercicio 3
a)SELECT id, name,salary, birth_date, gender from Actor WHERE gender = "female";
b)SELECT salary from Actor WHERE name = "Tony Ramos"
c)SELECT id, name,salary, birth_date, gender from Actor WHERE gender = "invalid" (não apareceu nenhum pois todos possuem genero, sendo esse um dado obrigatorio)
d)SELECT id,name,salary FROM Actor WHERE salary <=500000
e)SELECT id, name from Actor WHERE id = "002"

Exercicio 4
a)Ela seleciona todas as strings que começam com A ou J , utilizando a sintaxe "%" para buscar certa caracteristica da string e OR para indicar outra.
O operador lógico AND é literalmente a tradução de "e" ( exemplo : E isso ), e ele verifica um terceiro dado que no caso
é se a propriedade salário está acima de 300 mil reais com o >.
b)SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
c)SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
d)SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;

Exercicio 5

a)CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL UNIQUE,
    sinopse TEXT NOT NULL,
    Data_lançamento DATE NOT NULL,
    avaliação INT NOT NULL
); 
Isso ocorre porque o mecanismo de armazenamento de memória do MySQL não suporta tipos de dados TEXT .
Há uma penalidade de desempenho significativa ao usar tabelas baseadas em disco, o que significa que 
as consultas usando TEXT podem ser muito mais lentas. Os dados TEXT podem ser armazenados fora da 
tabela, com um ponteiro para a string armazenada na tabela.
b) Deu erro 
c)Deu erro
d)Deu erro

Exercicio 6
a)SELECT id, title, rating FROM Movie WHERE id = "002";
b)SELECT * FROM Movie WHERE name = "Dona Flor e Seus Dois Maridos";
c)SELECT id, title, synopsis FROM Movie WHERE rating >= 7;

Exercicio 7
a)SELECT * FROM Movie
WHERE title LIKE "%vida%";
b)
c)SELECT * FROM MOVIE
WHERE release_date < "2022-08-22";
d)


