const { verifyToken } = require("../utils/jwt");

const IsLoggedIN = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Please Sign In first"
        });
    }

    try {
        const decoded = verifyToken(token);

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid Token"
        });
    }
};

module.exports = IsLoggedIN;