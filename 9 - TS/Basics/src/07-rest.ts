import { ROLES, User } from './01-enum';

const currentUser: User = {
  username: 'pepito',
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
};

const rta = checkAdminRole();
console.log(rta); // imprime: false

// ------------------------------------------------------

export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

const rta2 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log(rta2);

// -------------------------------------------------------

export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

const rta3 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER);
console.log(rta3);
