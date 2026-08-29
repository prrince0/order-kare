require("dotenv").config();

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// Prisma 7
const prisma = require("../config/prisma");


passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },

    async (accessToken, refreshToken, profile, done) => {
      try {
        const googleId = profile.id;
        const email = profile.emails?.[0]?.value;
        const name = profile.displayName;

        if (!email) {
          return done(
            new Error("Google account does not have an email"),
            null
          );
        }

        let user = await prisma.user.findUnique({
          where: {
            googleId: googleId,
          },
        });

        if (!user) {
          user = await prisma.user.findUnique({
            where: {
              email: email,
            },
          });
        }

        if (!user) {
          user = await prisma.user.create({
            data: {
              name: name,
              email: email,
              googleId: googleId,
              password: null,
              role: "CUSTOMER",
            },
          });
        } else if (!user.googleId) {
          user = await prisma.user.update({
            where: {
              id: user.id,
            },
            data: {
              googleId: googleId,
            },
          });
        }

        return done(null, user);
      } catch (error) {
        console.error("Google authentication error:", error);
        return done(error, null);
      }
    }
  )
);

module.exports = passport;

