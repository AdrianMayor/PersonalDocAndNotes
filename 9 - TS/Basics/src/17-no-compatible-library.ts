import _ from 'lodash'; // Error: Could not find a declaration file for module

// Se pueden instalar los tipos de las librerias que no lo tienen nativamente, en este caso con el comando 'npm i --save-dev @types/lodash'

const data = [
  {
    username: 'nico',
    role: 'admin',
  },
  {
    username: 'Valentina',
    role: 'seller',
  },
  {
    username: 'Zulema',
    role: 'seler',
  },
  {
    username: 'santiago',
    role: 'customer',
  },
];

const rta = _.groupBy(data, (item) => item.role); // Después de instalar los tipos ya reconoce los tipos de la librería
