const request = require('request');

const argv = process.argv;
const breedToFind = argv.slice(2);
//console.log(breedToFind);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedToFind}`, (error, response, body) => {
  const data = JSON.parse(body)
  
  //console.log(data)
  if (data.length === 0){
    return console.log("Couldn't find the breed!")
  }

  if (error) {
    return console.log(`Error is: ${error}`);
  } 
  
  console.log(data[0].description);

});




