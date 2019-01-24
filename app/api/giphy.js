const axios = require("axios");

module.exports.getGif = async function (tag) {
  const gifData = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${tag}&api_key=${
    process.env.API_KEY
    }&limit=1`
  );

  const gifArray = gifData.data.data;

  return gifArray.length > 0 ? gifArray[0] : "";
}