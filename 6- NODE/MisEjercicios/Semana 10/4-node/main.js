const prompt = require("prompt-sync")();
const parseArgs = require("minimist");

function main() {
  try {
    //let name = prompt("Como te llamas? (Pulsa ENTER para continuar) ");

    const [name] = process.argv.slice(2);

    //console.log(process.argv.slice(2));

    console.log("Hola", name ? name : "");

    /* 
  let name = process.argv.slice(2);
  
  if (name) {
    console.log(`Hola ${name}`);
  } else {
    console.log(`Hola`);
  } */

    question();
  } catch (err) {
    console.error(`Parece que ha habido un error`, err.message);
  }
}

function question() {
  switch (prompt(`Qué tal estás? `).toUpperCase()) {
    case "BIEN":
      console.log(`Me alegro muchísimo`);
      break;

    case "MAL":
      console.log(`Vaya...lo siento muchísimo`);
      break;

    case "NO LO SE":
      console.log(`Yo menos, así que intenta encontrarte...`);
      break;

    default:
      console.log(`Lo siento, no te he entendido`);
      question();
  }
}

main();
