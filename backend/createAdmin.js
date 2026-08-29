require("dotenv").config();



const argon2 = require("argon2");

const prisma = require("./config/prisma");

async function createAdmin() {
    try {
        const hashedPassword = await argon2.hash("admin123");

        const admin = await prisma.user.create({
            data: {
                name: "Admin",
                email: "admin@example.com",
                password: hashedPassword,
                role: "ADMIN"
            }
        });

        console.log("Admin created successfully!");
        console.log("Email:", admin.email);

    } catch (error) {
        console.error("Failed to create admin:", error);
    } finally {
        await prisma.$disconnect();
    }
}

createAdmin();