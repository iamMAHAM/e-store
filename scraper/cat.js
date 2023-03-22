const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'data.json'), (err, data) => {
  const datas = JSON.parse(data);
  const groupedProducts = datas.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = [];
    }
    acc[curr.category].push(curr);
    return acc;
  }, {});
  for (const [k, v] of Object.entries(groupedProducts)) {
    console.log(`=========== [KEY ${k}]`);
    console.log(v.filter((v) => !v.image.startsWith('data:image')));
    fs.writeFile(
      path.join(__dirname, `${[k]}.json`),
      JSON.stringify(v, null, 2),
      (err) => console.log('error : ', err)
    );
    console.log('===========================');
  }
});
