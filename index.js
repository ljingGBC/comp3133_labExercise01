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
    console.log(row);// display each row in csv file
    })
    .on('end', () => {
    console.log('CSV file successfully processed');
    });
}

readCSV('input_countries.csv')


//Delete File if file exit
async function deleteFile(filePath) {
    try {
      await fs.unlink(filePath);//delete file use unlink function
      console.log(`Deleted ${filePath}`);
    } catch (error) {
      console.error(`Got an error trying to delete the file: ${error.message}`);
    }
  }
  
  deleteFile('canada.txt');
  deleteFile('usa.txt');

