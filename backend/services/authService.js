const { comparePassword } = require("../utils/password");
const { generateToken } = require("../utils/jwt");
require("dotenv").config();

const prisma = require("../config/prisma");
const loginAdmin = async (email, password) => {
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if (!user) {
        throw new Error("Invalid email or password");
    }

    if (user.role !== "ADMIN") {
        throw new Error("Access denied");
    }

    if (!user.password) {
        throw new Error("Please use Google login");
    }

    const isPasswordValid = await comparePassword(
        password,
        user.password
    );

    if (!isPasswordValid) {
        throw new Error("Invalid email or password");
    }

    const token = generateToken({
        userId: user.id,
        role: user.role
    });

    return {
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    };
};


const getAdminById = async (userId) => {

    const user = await prisma.user.findUnique({
        where: {
            id: userId
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true
        }
    });

    if (!user) {
        throw new Error("User not found");
    }

    if (user.role !== "ADMIN") {
        throw new Error("Access denied");
    }

    return user;
};


module.exports = {
    loginAdmin,
    getAdminById
};