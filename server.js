const express = require("express");

const connectDB = require("./config/db");

const app = express();

//connectDB
connectDB();

//init middleware
app.use(express.json({ extended: false }));
//get routes

app.use("/api/duelists", require("./routes/api/duelists"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is runnning at port ${PORT}`));
