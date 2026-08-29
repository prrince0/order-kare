require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const passport = require("./config/passport");

const authRoutes = require("./routers/authRoutes");

const app = express();

app.use(express.json());
app.use(cookieParser());

// Initialize Passport
app.use(passport.initialize());


app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.json({
    message: "Order Kare backend is running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});