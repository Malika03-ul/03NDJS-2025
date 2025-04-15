const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://fr.wikipedia.org/wiki/Liste_des_communes_de_Belgique_par_population'

async function scrapeWikipedia() {

	const $ = await cheerio.fromURL('https://fr.wikipedia.org/wiki/Liste_des_communes_de_Belgique_par_population');

	const communes = [];

	const table = $('.wikitable.sortable').first();

	table.find('tbody tr').each((i, row) => {

		const cells = $(row).find('td');

  		if (cell.length) return;

		const commune = {

    			 $(cell).text().trim(),
  		};

  		communes.push(commune);
	});

	console.table(communes.slice(0, 100));

	console.log(`\n ${communes.length} communes extraites avec succès.`);
}
scrapeWikipedia();




