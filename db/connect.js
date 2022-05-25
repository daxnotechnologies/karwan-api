require("dotenv").config();
const mongoose = require("mongoose");

// const DB = process.env.MONGO_URI;
const DB =
  "mongodb+srv://naveed:naveedAHMED12234@cluster0.idy7f.mongodb.net/users?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection to MongoDB Successful"))
  .catch((err) => console.log(err));
