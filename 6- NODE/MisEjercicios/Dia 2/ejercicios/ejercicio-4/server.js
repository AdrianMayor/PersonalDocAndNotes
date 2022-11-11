/**
 * #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Servidor web que escucha cualquier request.
 *
 * - Cuando la request es un `POST` a `/data`, se devuelve el *JSON* recibido.
 *
 * - Cuando se llama a cualquier otra ruta con cualquier método, devuelve status
 *   `404 NOT FOUND` con el body.
 *
 *      {
 *          message: 'No lo encuentro'
 *      }
 *
 */
