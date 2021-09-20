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

// export routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const interviewRoute = require("./routes/interviewRoutes");
app.use("/api/interviewapi", interviewRoute);

const adminRoutes = require('./routes/adminRoutes')
app.use("/api/admin", adminRoutes);

// export ErrorHandlers
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
