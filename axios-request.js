const axios = require("axios");

const url = "https://www.dictionary.com/browse/profile";

axios
  .get(url)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(`Error: ${error.message}`);
  });
