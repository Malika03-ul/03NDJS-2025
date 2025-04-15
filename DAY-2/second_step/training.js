const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function direBonjour() {
  readline.question('Quel est votre nom ? ', (nom) => {
    console.log(`Bonjour, ${nom} ! 😊`);
    readline.close(); // Ferme le flux
  });
}

// Appel de la fonction
direBonjour();
