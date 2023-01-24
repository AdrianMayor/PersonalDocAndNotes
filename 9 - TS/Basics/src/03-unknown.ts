// Con any nos permite usar diferentes tipos de datos pero no previene errores, basicamente volvemos a JS vanilla

let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;

anyVar.doSomething();
anyVar.toUpperCase();

// Con el unknown mientras que nos 'permite' usar diferentes valores en este caso si es esceptico y advierte de errores. Fuerza a hacer una verificacion de tipos

let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = 1;
unknownVar = [];
unknownVar = {};

// unknownVar.doSomething(); // Da error porque doSomething() no existe.

if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
};
