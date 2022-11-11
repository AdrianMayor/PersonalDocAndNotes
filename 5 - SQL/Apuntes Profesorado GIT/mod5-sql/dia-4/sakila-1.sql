USE sakila;

-- 1. Actores que tienen de primer nombre ‘Scarlett’.
SELECT * FROM actor WHERE first_name = 'Scarlett';

-- 2. Actores que tienen de apellido ‘Johansson’.
SELECT * FROM actor WHERE last_name = 'Johansson';

-- 3. Actores que contengan una ‘O’ en su nombre.
SELECT * FROM actor WHERE first_name LIKE '%o%';

-- 4. Actores que contengan una ‘O’ en su nombre y una ‘A’ en su apellido.
SELECT * FROM actor WHERE first_name LIKE '%o%' AND last_name LIKE '%a%';

-- 5. Actores que contengan dos ‘O’ en su nombre y en una ‘A’ en su apellido.
SELECT * FROM actor WHERE first_name LIKE '%o%o%' AND last_name LIKE '%a%';

-- 6. Actores donde su tercera letra sea ‘B’.
SELECT * FROM actor WHERE first_name LIKE '__b%';

-- 7. Ciudades que empiezan por ‘a’.
SELECT * FROM city WHERE city LIKE 'a%';

-- 8. Ciudades que acaban por ‘s’.
SELECT * FROM city WHERE city LIKE '%s';

-- 9. Ciudades del country 61.
SELECT * FROM city WHERE country_id = 61;

-- 10. Ciudades del country ‘Spain’. Utilizaremos una subconsulta.
SELECT * FROM city WHERE country_id = (SELECT country_id FROM country WHERE country = 'Spain');

-- 11. Ciudades con nombres compuestos.
SELECT * FROM city WHERE city LIKE '% %';

-- 12. Peliculas con una duracion entre 80 y 100.
SELECT * FROM film WHERE length >= 80 AND length <= 100;
SELECT * FROM film WHERE length BETWEEN 80 AND 100;

-- 13. Peliculas con un rental_rate entre 1 y 3.
SELECT * FROM film WHERE rental_rate >= 1 AND rental_rate <= 3;

-- 14. Peliculas con un titulo de más de 12 letras. 
SELECT title, LENGTH(title) AS titleLength FROM film WHERE LENGTH(title) >= 12;

-- 15. Peliculas con un rating de PG o G.
SELECT * FROM film WHERE rating = 'G' OR rating = 'PG';
SELECT * FROM film WHERE rating IN ('G', 'PG');

-- 16. Peliculas que no tengan un rating de NC-17.
SELECT * FROM film WHERE rating NOT LIKE 'NC-17';
SELECT * FROM film WHERE rating <> 'NC-17';
SELECT * FROM film WHERE rating != 'NC-17';

-- 17. Peliculas con un rating PG y duracion de más de 120.
SELECT * FROM film WHERE rating = 'PG' AND length > 120;

-- 18. ¿Cuantos actores hay?
SELECT COUNT(*) AS numOfActors FROM actor;

-- 19. ¿Cuantas ciudades tiene el country ‘Spain’? Utilizaremos una subconsulta.
SELECT COUNT(city_id) AS numOfCities FROM city WHERE country_id = (SELECT country_id FROM country WHERE country = 'Spain'); 

-- 20. ¿Cuantos countries hay que empiezan por ‘a’?
SELECT COUNT(*) AS numOfCountries FROM country WHERE country LIKE 'a%';