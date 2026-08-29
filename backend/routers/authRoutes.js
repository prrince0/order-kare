const express = require("express");
const passport = require("../config/passport");

const {
    login,
    logout,
    getMe
} = require("../controlllers/authController");

const IsLoggedIN = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/login", login);

router.post("/logout", logout);

router.get("/me", IsLoggedIN, getMe);

// Google login
router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"]
    })
);

// Google callback
router.get(
    "/google/callback",
    passport.authenticate("google", {
        session: false,
        failureRedirect: "http://localhost:5173/login"
    }),
    (req, res) => {
        console.log("Google user:", req.user);

        res.json({
            message: "Google login successful",
            user: req.user
        });
    }
);

module.exports = router;