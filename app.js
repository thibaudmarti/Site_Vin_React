const express = require("express");
const wineRoutes = require("./routes/wine.routes");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const app = express();
app.use(express.json());

// Routes
app.use("/api/wine", wineRoutes);

module.exports = app;
