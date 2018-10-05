const path = require("path");
const express = require("express");

// configure Express
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, "public")));

// link routing data
require("./routes/api-routes");
require("./routes/html-routes");

// start server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});