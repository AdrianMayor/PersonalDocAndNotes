(() => {
  // para especificar que tipos puede soportar una variable
  let userId: string | number;
  userId = 1212;
  userId = 'asa';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLocaleLowerCase()}`);
    } else {
      console.log(`string ${myText.toFixed()}`);
    }
  }
  greeting('ASA');
  greeting(1212);
})();
