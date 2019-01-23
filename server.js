const express = require("express");
const app = express();
const axios = require("axios");
require("dotenv").load();

app.get("/recipes", async (req, res) => {
  try {
    const url = `http://www.recipepuppy.com/api/?i=${getRequestIngredients(
      req
    )}`;
    const response = await axios.get(url);

    if (response.status !== 200) {
      console.log(`Error: ${data.status} `);
      return;
    }

    const recipes = response.data.results.map(recipe => {
      return {
        title: recipe.title,
        ingredients: recipe.ingredients,
        link: recipe.href
      };
    });

    console.log(recipes);
  } catch (err) {
    console.log(err);
  }
});

function getRequestIngredients() {
  return "onions";
}

app.listen(3000);
