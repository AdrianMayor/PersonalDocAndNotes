(() => {
  let isEnable = true;
  //isEnable = 'as'; --> da error ya que TS no permite el cambio de tipado
  //isEnable = 1212;
  isEnable = false;

  let isNew: boolean = false;
  console.log('isNew', isNew);
  isNew = true;
  console.log('isNew', isNew);

  const random = Math.random();
  console.log('random', random);
  //isNew = random >= 0.5 ? 'true' : 'false';
  isNew = random >= 0.5 ? true : false;
  console.log('isNew', isNew);
})();
