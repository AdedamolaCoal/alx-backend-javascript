const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = process.argv[2];
  res.write('This is the list of our students\n');

  if (!databasePath) {
    res.end('Error: Database path is missing\n');
    return;
  }

  countStudents(databasePath)
    .then(() => {
      res.end();
    })
    .catch((err) => {
      res.end(`${err.message}\n`);
    });
});

app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

module.exports = app;
