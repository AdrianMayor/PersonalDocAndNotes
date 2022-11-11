# Diario de viajes

-   Se trata de una web donde los usuarios publican entradas sobre viajes.

-   Cada entrada tiene título, descripción, lugar y hasta 3 fotos asignadas.

-   Cada entrada puede ser votada con una puntuación entre 1 y 5.

## Base de datos

- Users: id, email*, password*, username*, avatar, role ("admin", "normal"), createdAt.

- Entries: id, title*, place*, description*, idUser, createdAt. 

- Entry_photos: id, name, idEntry, createdAt.

- Entry_votes: id, value*, idEntry, idUser, createdAt.

## Endpoints del usuario 

-   POST - [/users] - Crea un usuario. ✅
-   POST - [/users/login] - Logea a un usuario retornando un token. ✅
-   GET - [/users] - Retorna información del usuario del token. **Con token** ✅
-   PUT - [/users] - Permite actualizar el avatar del usuario. **Con token** ✅
  
## Endpoints del diario ✅

-   POST - [/entries] - Crea una entrada. **Con token** ✅
-   GET - [/entries] - Retorna el listado de entradas. Bonus: retornar media de votos. ✅
-   GET - [/entries/:idEntry] - Retorna una entrada en concreto. Bonus: retornar media de votos. ✅
-   POST - [/entries/:idEntry/votes] - Vota una entrada. Se votará con un valor entero entre 1 y 5. No se puede
                                       votar una entrada propia y no se puede votar dos veces. **Con token** ✅
-   POST - [/entries/:idEntry/photos] - Agregar una foto a una entrada. Recuerda que una entrada no puede tener más de 3 fotos. **Con token** 
-   DELETE - [/entries/:idEntry/photos/:idPhoto] - Eliminar una foto de una entrada. **Con token** 
-   DELETE - [/entries/:idEntry] - Borra una entrada. Solo la persona que la creó o un admin. **Con token** ✅


