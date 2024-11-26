import fs from 'fs';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = {};
        const lines = data.trim().split('\n');
        const headers = lines.shift().split(',');

        for (const line of lines) {
          const [firstName, , , field] = line.split(',');
          if (firstName && field) {
            if (!students[field]) {
              students[field] = [];
            }
            students[field].push(firstName);
          }
        }
        resolve(students);
      }
    });
  });
};

export default readDatabase;
