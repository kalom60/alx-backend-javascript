const fs = require('fs');

const readDatabase = async (path) => {
  try {
    const data = await fs.promises.readFile(path, 'utf8');
    const lines = data.toString().split('\n');
    let res = lines.filter((item) => item);
    res = res.map((item) => item.split(','));

    const cs = [];
    const swe = [];
    for (const i of res) {
      for (let j = 0; j < i.length; j += 1) {
        if (i[j] === 'CS') {
          cs.push(i[0]);
        }
        if (i[j] === 'SWE') {
          swe.push(i[0]);
        }
      }
    }
    return { cs, swe };
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = readDatabase;
