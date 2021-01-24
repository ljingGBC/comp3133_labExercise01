const csv = require('csv-parser');
const fs = require('fs');

// Read csv file
/*
fs.createReadStream('input_countries.csv')//create a readStream using the fs module
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);// display each row in csv file
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });
*/
async function readCSV(filePath){
    fs.createReadStream(filePath)//create a readStream using the fs module
    .pipe(csv())
    .on('data', (row) => {
    //console.log(row);// display each row in csv file
    })
    .on('end', () => {
    console.log('CSV file successfully processed');
    });
}

readCSV('input_countries.csv')

