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

    Promise.all(
      response.data.results.map(async recipe => {
        return await axios.get(
          `http://api.giphy.com/v1/gifs/feqkVgjJpYtjy?api_key=${
            process.env.API_KEY
          }`
        );
      })
    ).then(gifs => {
      gifs.map(gif => {
        console.log(gif.data.data.url);
      });
    });

    // const recipes = () => {
    //   return {
    //     title: recipe.title,
    //     ingredients: recipe.ingredients,
    //     link: recipe.href,
    //     gif: gif
    //   };
    // };

    // console.log(gifs);
  } catch (err) {
    console.log(err);
  }
});

const getRequestIngredients = () => {
  return "onions";
};

app.listen(3000);
