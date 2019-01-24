const giphy = require("../api/giphy");
const puppet = require("../api/recipePuppet");

module.exports = function(app) {
  app.get("/recipes", async (req, res) => {
    const response = await puppet.getRecipe(req.query.i);

    if (response.status !== 200) {
      res.send(`Error: Recipe Puppy is down. Please try again later.`);
      return;
    }

    const recipes = response.data.results;

    const recipesResult = await Promise.all(
      recipes.map(async recipe => {
        const gif = await giphy.getGif(recipe.title);
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
};

const sortIngredients = ingredients => {
  return ingredients
    .split(",")
    .sort((a, b) => a.trim().localeCompare(b.trim()));
};
