'use strict';

function multiplicaPor2(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 500);
  });
}

// console.log(multiplicaPor2(4));

multiplicaPor2(4).then((response) =>
  multiplicaPor2(response).then((response) =>
    multiplicaPor2(response).then((response) => console.log(response))
  )
);

// PARA EVITAR ESTO existen las funciones asíncronas (async... await)
