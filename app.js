const app = require("./config/server");

require("./app/routes/recipes")(app);

app.listen(3000);
