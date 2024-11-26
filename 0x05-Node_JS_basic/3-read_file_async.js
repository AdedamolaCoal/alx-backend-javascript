const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines

        if (lines.length < 2) {
          reject(new Error('Cannot load the database'));
          return;
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

        resolve();
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
