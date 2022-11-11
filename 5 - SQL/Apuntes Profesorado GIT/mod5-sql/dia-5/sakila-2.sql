USE sakila;

-- 1. Títulos de las películas que pertenecen a la categoría "documentary".
SELECT F.title 
FROM film F
INNER JOIN film_category FC ON F.film_id = FC.film_id
INNER JOIN category C ON FC.category_id = C.category_id
WHERE C.name = 'documentary';

-- 2. Lista por orden cronológico de las películas en inglés que muestre el año de la película. Si hay varias 
--    del mismo año que organice por orden alfabético ascendente.
SELECT F.title, F.release_year
FROM film F
INNER JOIN language L ON F.language_id = L.language_id
WHERE L.name = 'english'
ORDER BY F.title ASC;

-- 3. Nombre y apellidos de los actores que participan en la película "October Submarine" por orden alfabético del apellido ascendente.
SELECT A.first_name, A.last_name, F.title
FROM actor A
INNER JOIN film_actor FA ON A.actor_id = FA.actor_id
INNER JOIN film F ON FA.film_id = F.film_id
WHERE F.title = 'October Submarine'
ORDER BY A.last_name ASC;

-- 4. Ciudades de España que aparece en esta base de datos.
SELECT CT.city 
FROM city CT
INNER JOIN country CR ON CT.country_id = CR.country_id
WHERE CR.country = 'Spain';

-- 5. Nombres de los idiomas de los que existe alguna película sin mostrar repetidos y en orden alfabético ascendente.
SELECT DISTINCT L.name 
FROM language L
INNER JOIN film F ON L.language_id = F.language_id;

-- 7. Nombre y dirección de los clientes que pertenecen al distrito de California.
SELECT C.first_name, A.address
FROM customer C 
INNER JOIN address A ON A.address_id = C.address_id
WHERE A.district = 'California';

-- 8. Listado de los títulos de las películas de las que no existe inventario.
SELECT F.title
FROM film F
WHERE F.film_id NOT IN (SELECT I.film_id FROM inventory I);

-- 9. Mostrar en qué ciudad vive el cliente que se llama "Sandra Martin".
SELECT CT.city, C.first_name, C.last_name
FROM customer C 
INNER JOIN address A ON C.address_id = A.address_id
INNER JOIN city CT ON CT.city_id = A.city_id
WHERE C.first_name = 'Sandra' AND C.last_name = 'Martin';

-- 10. Listado de los clientes que tienen un código postal en su dirección entre "11000" y "12000"

-- 11. Listado de películas de terror que tenga el campo de descripción vacio ( nulo ).

-- 12. Para la tienda 1 mostrar el listado de clientes que tienen un préstamo que todavía no hayan
--     devuelto. El campo de devolución sea nulo.

-- 13. Nombre y apellidos de los clientes que alquilaron la película 'ALADDIN CALENDAR'. Mostrar fecha del préstamo y devolución.
SELECT F.title, C.first_name, C.last_name, R.rental_date, R.return_date
FROM customer C
INNER JOIN rental R ON C.customer_id = R.customer_id
INNER JOIN inventory I ON R.inventory_id = I.inventory_id
INNER JOIN film F ON I.film_id = F.film_id
WHERE F.title = 'Aladdin Calendar';














