(() => {
  // esto no se puede hacer porque 'undefined' y null se consideran tipos
  let myNumber: number = undefined;
  let myString: string = null;

  // pero sin embargo al declararlo como tal, no lo infiere, lo deja como tipo 'any'
  let myNull = null;
  let myUndefined = undefined;

  // habria que declararlo explicitamente
  let myNull2: null = null;
  let myUndefined2: undefined = undefined;

  let myNumber2: number | null = null;
  myNumber = 12;

  let myString2: string | undefined = undefined;
  myString = 'ass';

  function hi(name: string | null) {
    let hello = 'Hola';

    if (name) {
      hello += name;
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  hi('Nicolas');
  hi(null);

  function hiV2(name: string | null) {
    let hello = 'Hola';
    hello += name?.toLocaleLowerCase || 'nobody';
    console.log(hello);
  }

  hiV2('Nicolas');
  hiV2(null);
})();
