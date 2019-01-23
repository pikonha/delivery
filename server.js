const express = require("express");
const app = express();
const axios = require("axios");
require("dotenv").load();

app.get("/recipes", async (req, res) => {
  const url = `http://www.recipepuppy.com/api/?i=${req.query.i}`;
  const response = await axios.get(url);

  if (response.status !== 200) {
    console.log(`Error: ${data.status} `);
    return;
  }

  const recipes = response.data.results;

  const recipesResult = await Promise.all(
    recipes.map(async recipe => {
      const gif = await getGif(recipe.title);
      return {
        title: recipe.title,
        ingredients: sortIngredients(recipe.ingredients),
        link: recipe.href,
        gif: gif.url
      };
    })
  );

  res.send(recipesResult);
});

const getGif = async title => {
  const gifData = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${title}&api_key=${
    process.env.API_KEY
    }&limit=1`
  );

  const gifArray = gifData.data.data;

  return gifArray.length > 0 ? gifArray[0] : "";
};

const sortIngredients = ingredients => {
  return ingredients.split(',').sort((a, b) => a.trim().localeCompare(b.trim()));
};

app.listen(3000);
