const { loginAdmin, getAdminById } = require("../services/authService");


// LOGIN
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const { token, user } = await loginAdmin(email, password);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 1000
        });

        return res.status(200).json({
            message: "Login successful",
            user
        });

    } catch (error) {
        console.error("Login error:", error);

        return res.status(401).json({
            message: error.message
        });
    }
};


// LOGOUT
const logout = (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax"
    });

    return res.status(200).json({
        message: "Logout successful"
    });
};


// GET CURRENT USER
const getMe = async (req, res) => {
    try {
        const user = await getAdminById(req.user.userId);

        return res.status(200).json({
            user
        });

    } catch (error) {
        console.error("Get me error:", error);

        return res.status(401).json({
            message: error.message
        });
    }
};


module.exports = {
    login,
    logout,
    getMe
};

