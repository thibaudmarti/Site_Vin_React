const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER_PW}@cluster0.4geca.mongodb.net/cave_vin`
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Not connected to MongoDB", err));
