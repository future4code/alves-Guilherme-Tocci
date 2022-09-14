Exercicio 1
a) Exclui a coluna salary
b) Muda o valor da coluna gender ou seja o sexo
c) Redeclara a coluna gender por completo, por exemplo mudando todas as opções de genero para masculino, feminino ou não-binário ao invés de somente masculino ou feminino.
d)ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

Exercicio 2
a)UPDATE Actor
SET
name = "Moacyr Franco",
birth_date = "2020-02-10"
WHERE id = "003";
b)UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
c)UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

Exercicio 3
a)DELETE FROM ACTOR WHERE NAME = "Fernanda Montenegro"; (Obs : Deu erro pq essa atriz não existe na tabela mais, devido as atividades anteriores mas a função está correta aparentemente)
b)DELETE FROM Actor WHERE gender = "male" AND salary > 100000000;

Exercicio 4
a)SELECT MAX(salary) FROM Actor;
b)SELECT MIN(salary) FROM Actor;
c)SELECT COUNT(*) FROM Actor WHERE gender = "female";
d)SELECT SUM(salary) FROM Actor;

Exercicio 5
a)Essa query conta a quantidade de atores e atrizes na tabela em relação ao genero.
b)SELECT id, name FROM Actor
ORDER BY name DESC; 
c)SELECT * FROM Actor 
ORDER BY salary;
d)SELECT * FROM Actor
ORDER BY salary DESC LIMIT 3;
e)SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

Exercicio 6

a)ALTER TABLE Movie ADD playing_limit_date DATE;
b)ALTER TABLE Movie CHANGE rating rating FLOAT;
