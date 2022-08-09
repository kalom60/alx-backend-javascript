const fs = require('fs/promises');

const countStudents = async (dataPath) => {
  try {
    let data = await fs.readFile(dataPath);
    data = data.toString();
    const lines = data.split('\n').slice(1);
    const cs = [];
    const swe = [];
    for (const student of lines) {
      if (student.includes('CS')) {
        let name = student.split(',').slice(0, 1);
        name = String(name);
        cs.push(name);
      } else {
        let name = student.split(',').slice(0, 1);
        name = String(name);
        swe.push(name);
      }
    }
    console.log(`Number of students: ${lines.length}`);
    const csNames = cs.join(', ');
    const sweNames = swe.join(', ');
    console.log(`Number of students in CS: ${cs.length}. List: ${csNames}`);
    console.log(`Number of students in SWE: ${swe.length}. List: ${sweNames}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
