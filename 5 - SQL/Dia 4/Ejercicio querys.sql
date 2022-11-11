USE sakila;

-- 1. Actores que tienen de primer nombre ‘Scarlett’.
SELECT first_name, last_name FROM actor WHERE first_name = 'Scarlett';

-- 2. Actores que tienen de apellido ‘Johansson’.
SELECT first_name, last_name FROM actor WHERE last_name = 'Johansson';

-- 3. Actores que contengan una ‘O’ en su nombre.
SELECT first_name, last_name FROM actor WHERE first_name LIKE '%o%';

-- 4. Actores que contengan una ‘O’ en su nombre y una ‘A’ en su apellido.
SELECT first_name, last_name FROM actor WHERE last_name LIKE '%a%' AND first_name LIKE '%o%';

-- 5. Actores que contengan dos ‘O’ en su nombre y en una ‘A’ en su apellido.
SELECT first_name, last_name FROM actor WHERE first_name LIKE '%o%o%' AND last_name LIKE '%a%';

-- 6. Actores donde su tercera letra sea ‘B’.
SELECT first_name, last_name FROM actor WHERE first_name LIKE '__b%';

-- 7. Ciudades que empiezan por ‘a’.
SELECT city FROM city WHERE city LIKE 'a%';

-- 8. Ciudades que acaban por ‘s’.
SELECT city FROM city WHERE city LIKE '%s';

-- 9. Ciudades del country 61.
SELECT city FROM city WHERE country_id = '61';

-- 10. Ciudades del country ‘Spain’. Utilizaremos una subconsulta.
SELECT city FROM city WHERE country_id = (SELECT country_id FROM country WHERE country = 'Spain');

-- 11. Ciudades con nombres compuestos.
SELECT city FROM city WHERE city LIKE '% %';

-- 12. Peliculas con una duracion entre 80 y 100.
SELECT title, length FROM film WHERE length BETWEEN 80 AND 100;
SELECT * FROM film WHERE length  >=80 AND length <= 100;

-- 13. Peliculas con un rental_rate entre 1 y 3.
SELECT title, rental_rate FROM film WHERE rental_rate BETWEEN 1 AND 3;

-- 14. Peliculas con un titulo de más de 12 letras. Utilizaremos la función de SQL "LENGTH(nombreColumna)".   
SELECT title, length(title) AS tittleLength FROM film WHERE length(title) > 12;

-- 15. Peliculas con un rating de PG o G.
SELECT title, rating FROM film WHERE rating = 'PG' OR rating = 'G';
SELECT title, rating FROM film WHERE rating IN ('PG','G');


-- 16. Peliculas que no tengan un rating de NC-17.
SELECT title, rating FROM film WHERE rating != 'NC-17';
SELECT title, rating FROM film WHERE rating NOT LIKE 'NC-17';
SELECT title, rating FROM film WHERE rating <> 'NC-17';

-- 17. Peliculas con un rating PG y duracion de más de 120.
SELECT title, length, rating FROM film WHERE rating = 'PG' AND length > 120;

-- 18. ¿Cuantos actores hay?
SELECT MAX(actor_id) AS numOfActors  FROM actor;
SELECT COUNT(actor_id) FROM actor;

-- 19. ¿Cuantas ciudades tiene el country ‘Spain’? Utilizaremos una subconsulta.
SELECT COUNT(city_id) AS spanishCities FROM city WHERE country_id=(SELECT country_id FROM country WHERE country = 'Spain');

-- 20. Cuantos countries hay que empiezan por 'a'?
SELECT COUNT(*) FROM country WHERE country LIKE     'a%';