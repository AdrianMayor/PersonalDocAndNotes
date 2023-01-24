(() => {
  type UserID = string | number;
  let userId: UserID;

  function greeting(userId: UserID) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLocaleLowerCase()}`);
    }
  }

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL'; // especificamos cuales son los valores explicitos y literales que puede tomar esta variable
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'sdaf'; // Por lo que da error al otorgar un valor distinto

  function greeting2(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLocaleLowerCase()}`);
    }
  }
  greeting2(111, 'S');
  greeting2(111, 'XL');
  greeting2('1111', 'SL');
})();
