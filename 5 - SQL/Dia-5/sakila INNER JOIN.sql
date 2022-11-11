USE sakila;

-- 1. Titulos de las peliculas que pertenecen a la categoria "documentary".
SELECT F.title
FROM film F
INNER JOIN film_category FC ON F.film_id = FC.film.id
INNER JOIN category C ON FC.category_id = C.category_id
WHERE C.name = 'documentary';

-- 2. Lista por orden cronologico de las peliculas en ingles que muestre el año de la pelicula. Si hay varias del mismo año que organice por orden alfabetico ascendente
SELECT F.title, release_year
FROM film F
INNER JOIN language L ON F.language_id = L.language_id
WHERE L.name = 'english'
ORDER BY F.title ASC;

-- 3. Nombre y apellidos de los actores que participan en la película "October Submarine" por orden alfabético del apellido ascendente.
SELECT A.*
FROM actor A
INNER JOIN film_actor FA ON A.actor_id = FA.actor_id
INNER JOIN film F ON FA.film_id = F.film_id
WHERE F.title = 'October Submarine'
ORDER BY A.last_name ASC;

-- 4. Ciudades de España que aparece en esta base de datos.
SELECT C.city
FROM city C
INNER JOIN country CO ON C.country_id = CO.country_id
WHERE CO.country = 'Spain';

-- 5. Nombres de los idiomas de los que existe alguna película sin mostrar repetidos y en orden alfabético ascendente.
SELECT DISTINCT L.name
FROM language L
INNER JOIN film F ON L.language_id = F.language_id;

-- 7. Nombre y dirección de los clientes que pertenecen al distrito de california.
SELECT C.first_name, A.address
FROM customer C
INNER JOIN address A ON A.address_id = C.address_id
WHERE A.district = 'California';

-- 8. Listado de los títulos de las películas de las que no existe inventario.
SELECT F.*
FROM film F
WHERE F.film_id NOT IN (SELECT I.film_id FROM inventory I);

/*SELECT F.*
FROM film F
WHERE NOT EXISTS (SELECT 1 FROM inventory I WHERE I.film_id = F.film_id);*/

-- 9. Mostrar en qué ciudad vive el cliente que se llama "Sandra Martin".
SELECT C.first_name, C.last_name, CI.city
FROM customer C
INNER JOIN address A ON C.address_id = A.address_id
INNER JOIN city CI ON A.city_id = CI.city_id
WHERE C.first_name = 'Sandra' AND C.last_name = 'Martin';

-- 10. Listado de los clientes que tienen un código postal en su dirección entre "11000" y "12000"
SELECT C.*
FROM customer C
INNER JOIN address A ON C.address_id = A.address_id
WHERE A.postal_code BETWEEN 11000 AND 12000;


-- 11. Listado de películas de terror que tenga el campo de descripción vacio ( nulo ).
SELECT F.title
FROM film F
INNER JOIN film_category FC ON F.film_id = FC.film_id
INNER JOIN category C ON FC.category_id = C.category_id
WHERE C.name = 'horror' AND F.description IS NULL;


-- 12. Para la tienda 1 mostrar el listado de clientes que tienen un préstamo que todavía no hayan
--     devuelto. El campo de devolución sea nulo.
SELECT DISTINCT C.customer_id, C.first_name, C.last_name, R.return_date
FROM customer C
INNER JOIN store S ON S.store_id = C.store_id
INNER JOIN rental R ON C.customer_id = R.customer_id
WHERE R.return_date IS NULL AND S.store_id = 1;


-- 13. Nombre y apellidos de los clientes que alquilaron la película 'ALADDIN CALENDAR'. 
-- Mostrar fecha del préstamo y devolución.
SELECT C.first_name, C.last_name, R.rental_date, R.return_date
FROM customer C
INNER JOIN rental R ON C.customer_id = R.customer_id
INNER JOIN inventory I ON I.inventory_id = R.inventory_id
INNER JOIN film F ON I.film_id = F.film_id
WHERE F.title = 'ALADDIN CALENDAR';

