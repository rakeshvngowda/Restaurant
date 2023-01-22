//  main express file
require("dotenv").config();
const cors = require('cors')

// creating app express
const express = require("express");
const app = express();
app.use(express.json());
app.use(cors())

// mongoose
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once("open", () => {
  console.log(`Connected to mongoose`);
});

// Routes
const userRoutes = require("./routes/users");
const dishRoutes = require('./routes/dishes')
app.use("/users", userRoutes);
app.use("/dishes", dishRoutes);

// listing port block
app.listen(process.env.PORT, () => {
  console.log(`listening to port ${process.env.PORT}`);
});
