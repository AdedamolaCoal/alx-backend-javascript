const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length < 2) {
      throw new Error('Cannot load the database'); // No valid data rows
    }

    const headers = lines[0].split(','); // Assume the first row is headers
    const students = lines.slice(1).map((line) => line.split(','));

    console.log(`Number of students: ${students.length}`);

    const fields = {};
    students.forEach((student) => {
      const field = student[headers.indexOf('field')];
      const firstName = student[headers.indexOf('firstname')];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
