const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// const fetchSource = async (url) => {
//   const source = await fetch('https://async.scraperapi.com/jobs', {
//     method: 'POST',
//     body: JSON.stringify({
//       apiKey: 'ef64ae333f01615cc6525831a824f635',
//       url: url,
//     }),
//     headers: { 'content-type': 'application/json' },
//   });
//   const json = await source.json();

//   const resultsR = await fetch(json.statusUrl);
//   const data = await resultsR.json();

//   console.log(data);
// };

// (async () => await fetchSource('https://www.jumia.ci/telephone-tablette/'))();

const datas = [
  'https://async.scraperapi.com/jobs/221d39e2-4168-45a2-a150-1a9d01ad3a6d',
  'https://async.scraperapi.com/jobs/a70e731b-2630-4d7a-8d88-2476dd659327',
  'https://async.scraperapi.com/jobs/6de9caa6-54c6-4564-be5c-59db55afa5d7',
  'https://async.scraperapi.com/jobs/071ce002-79e3-4c60-967d-cb87156df5b3',
  'https://async.scraperapi.com/jobs/8392c1b3-7f9a-4e7e-a7f7-5f9a3cec805b',
];

const manipuleDatas = async () => {
  const array = [];
  for (const url of datas) {
    const res = await (await fetch(url)).json();
    const $ = cheerio.load(res.response.body);
    $('.prd._fb.col.c-prd').each((i, el) => {
      const $el = $(el);
      array.push({
        title: $el.find('h3.name').text(),
        price: parseInt(
          $el
            .find('div.prc')
            .text()
            .replace(/[,\s|fcfa|\s]/gi, '')
        ),
        image: $el.find('img').attr('data-src'),
        category: $('.-fs20.-m.-elli.-phs').text(),
      });
    });
  }
  fs.writeFile(
    path.join(__dirname, 'data.json'),
    JSON.stringify(array, null, 2),
    (err) => {
      if (err) console.log(err);
    }
  );
  console.log(array);
};

(async () => manipuleDatas())();
