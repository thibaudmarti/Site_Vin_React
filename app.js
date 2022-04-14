const express = require("express");
const wineRoutes = require("./routes/wine.routes");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.json());

// Routes
app.use("/api/wine", wineRoutes);

module.exports = app;
