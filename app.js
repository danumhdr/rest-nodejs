"use strict";

const express = require("express");
const app = new express();
const config = require("./config/config");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

// register JSON parser middleware
app.use(bodyParser.json());

require("./route/personRoute")(app);
require("./route/versionRoute")(app, config);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(7676, () => {
  /* eslint-disable */
  console.log("Server up!");
});
