// Se definen las opciones de ROLES mediante 'enum'
export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

// Se define el usuario, que campos debe tener
export type User = {
  username: string;
  role: ROLES;
};

// A la hora de crear el usuario TS ya sabe como debe ser el usuario, y que opciones hay dentro de ROLES
const nicoUser: User = {
  username: 'nicobytes',
  role: ROLES.ADMIN,
};
