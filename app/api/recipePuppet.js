const axios = require("axios");

module.exports.getRecipe = function (ingredients) {
  return axios.get(`http://www.recipepuppy.com/api/?i=${ingredients}`);
}