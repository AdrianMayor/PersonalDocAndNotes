/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Servidor web que escucha en el puerto 4000.
 *
 * - Cuando se llama a `/curso` con método GET, devuelve status `200 OK` con el body:
 *
 *      {
 *          curso: 'backend'
 *      }
 *
 * - Cuando se llama al *endpoint* `/message` con método GET, devuelve status `200 OK`
 *   con el body:
 *
 *      {
 *          message: 'Hello world!'
 *      }
 *
 * - Cuando se llama a cualquier otra ruta con cualquier método, devuelve status
 *   `404 NOT FOUND` con el body.
 *
 *      {
 *          message: 'No lo encuentro'
 *      }
 *
 */
