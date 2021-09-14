const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());

const connectDB = require("./config/db");
connectDB();

// get request
app.get("/", (req, res) => {
  res.send("api is running...");
});

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
