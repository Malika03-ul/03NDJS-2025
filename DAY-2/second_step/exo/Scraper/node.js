const cheerio = require('cheerio'); // importation du module cheerio
const url = 'https://fr.wikipedia.org/wiki/Liste_des_communes_de_Belgique_par_population'

// fonction générale qui cherche et recupère les données de mon tableau

const $ = await cheerio.fromURL('https://fr.wikipedia.org/wiki/Liste_des_communes_de_Belgique_par_population'); // tant que les élements de mon url ne sont pas tous parcouru il n'opère aucun choix

// importe les modules nécessaires

const fs = require('fs'); // pour lire le fichier local

// crée un tableau vide pour stocker les communes extraites
const communes = [];

// sélectionne le 1er tableau ayant la classe "wikitable sortable": C’est élement du tableau qui contient le classement des communes
const table = $('.wikitable.sortable').first();

// Pour chaque ligne du tableau :
table.find('tbody tr').each((i, row) => {
  // récupère toutes les cellules <td> de cette ligne
  const cells = $(row).find('td');

  //  la ligne n’a pas au moins 3 cellules, on l’ignore (souvent l’entête ou ligne vide)
  if (cells.length < 3) return;

  // construit un objet représentant une commune
  const commune = {
    rank: $(cells[0]).text().trim(),        // Colonne 1 : Rang
    name: $(cells[1]).text().trim(),        // Colonne 2 : Nom de la commune
    population: $(cells[2]).text().trim()   // Colonne 3 : Population
  };

  // ajoute l’objet au tableau final
  communes.push(commune);
});

// affiche les 10 premières communes dans un tableau dans le terminal
console.table(communes.slice(0, 100));

// Optionnel : afficher combien de communes ont été extraites
console.log(`\n ${communes.length} communes extraites avec succès.`);





