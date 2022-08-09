const fs = require('fs');

const fsPromise = fs.promises;
async function countStudents(dataPath) {
  if (fs.existsSync(dataPath)) {
    const data = await fsPromise.readFile(dataPath);
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

    console.log(`Number of students: ${res.length - 1}`);
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
    console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
    return { res, cs, swe };
  }
  throw new Error('Cannot load the database');
}

module.exports = countStudents;
