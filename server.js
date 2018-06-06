"use strict";

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cartItems = require("./routes/cart-routes");
app.use(bodyParser.json());
app.use("/portal", cartItems);
app.use(express.static(__dirname + "/public"));

let port = 3000;
app.listen(port, () => console.log(`App is listening on port ${port}`));