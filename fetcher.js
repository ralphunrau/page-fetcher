const args = process.argv.slice(2);
const request = require('request');
const fs = require('fs')

const fileContent = request(args[0], (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(args[1], body, err => {
    if (err) {
      console.error(err);
      return;
    }
  })
  setTimeout(() => {
    console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`)
  }, 250)
  
});