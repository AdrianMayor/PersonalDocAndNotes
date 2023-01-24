(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createdAt: Date, // único tipo en el que se puede usar el objeto. Date
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }

  const producto1 = createProductToJson('P1', new Date(), 12, 'XL');
  console.log(producto1);
  console.log(producto1.title);

  // Arrow Function
  const createProductToJsonV2 = (
    title: string,
    createdAt: Date, // único tipo en el que se puede usar el objeto. Date
    stock: number,
    size?: Sizes // --> si queremos hacer un argumento opcional colocamos '?' ya que si especificamos null o undefined, pide que se envie explicitamente null o undefined
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };

  const producto2 = createProductToJsonV2('P2', new Date(), 19);
  console.log(producto2);
  console.log(producto2.title);
})();
