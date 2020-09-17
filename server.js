const express = require("express");
const app = express();
const connectDB = require("./config/db");

//Connect to DB
connectDB();

//middleware
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("API Running..."));

//Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/input", require("./routes/api/input"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
