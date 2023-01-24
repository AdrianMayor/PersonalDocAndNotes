// Librería con soporte TS
import { format, subDays } from 'date-fns'; // Si TS no da ninguna advertencia o problema es que la libreria es compatible

const date = new Date(1998, 1, 28); // 0 = enero, 1 = febrero
const rta = subDays(date, 30); // Gracias a la compatibilidad de la libreria con TS tenemos una informacion del tipado que espera la libreria
const str = format(rta, 'yyyy/MM/dd'); // Resultado 1998/01/29

console.log(str);
