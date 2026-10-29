# 🍽️ OrderKare - Restaurant QR Ordering & Management SaaS

OrderKare is a complete, multi-tenant SaaS platform that empowers restaurants to accept dine-in orders through table-specific QR codes. The platform includes a real-time Kitchen Display System (KDS), digital menu management, direct UPI payments, and a full-featured Superadmin control center for platform owners.

## 🔗 Live Demo
- **Landing Page:** [https://www.orderkare.co.in/](https://www.orderkare.co.in/)
- **Restaurant Dashboard:** [https://www.orderkare.co.in/login](https://www.orderkare.co.in/login)
- **Superadmin Panel:** [https://www.orderkare.co.in/admin](https://www.orderkare.co.in/admin) (Requires Superadmin Credentials)

## 🚀 Key Features

### 🏢 For Restaurant Owners (Admins)
- **Master QR Code Generation:** One permanent QR code for all tables. Customers select their table number after scanning.
- **Real-Time Kitchen Display System (KDS):** Orders appear instantly on kitchen screens with audio alerts and order timers.
- **Dynamic Menu Management:** Update prices, toggle item availability (sold out), and manage categories in real-time.
- **Table & Staff Management:** Create unlimited tables, manage staff roles, and track live table occupancy.
- **Analytics & Reports:** Track daily sales, average order value, top-selling dishes, and peak hours.
- **Subscription Management:** Integrated Razorpay payment gateway for renewals, with dynamic pricing plans set by the Superadmin.

### 👑 For Superadmin (Platform Owner)
- **Dynamic Subscription Plans:** Create, edit, and manage SaaS pricing tiers (e.g., Monthly, Yearly). Set custom prices, features, and visibility.
- **Global Notifications:** Receive instant alerts for new restaurant sign-ups, trial activations, and subscription purchases.
- **System Settings:** Manage global platform settings, support emails, and payment gateway configurations.
- **Audit & Analytics:** View detailed subscription logs, revenue analytics, and system health metrics.

### 📱 For Customers (Dine-In Guests)
- **Zero-App Ordering:** Scan QR, view the menu, and order directly from the browser. No app installation required.
- **Live Order Tracking:** Track order status (Pending → Cooking → Ready → Served) in real-time.
- **Self-Service Options:** Call a waiter or request the bill directly from the phone.
- **Feedback System:** Leave ratings and reviews after the meal.

---

## 🛠️ Tech Stack

### Backend
- **Runtime:** Node.js (Express)
- **Database:** PostgreSQL (Hosted on Neon)
- **ORM:** Prisma
- **Real-Time:** Socket.IO (WebSockets)
- **Authentication:** JWT (JSON Web Tokens) & Bcrypt
- **Payment Gateway:** Razorpay

### Frontend
- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Icons & Animations:** Lucide React & Framer Motion
- **Routing:** React Router DOM

---

## ⚙️ Local Setup & Installation

### Prerequisites
- Node.js (v18+)
- PostgreSQL database (or Neon account)
- Razorpay API Keys

### 1. Clone the Repository
```bash
git clone https://github.com/Pawan7562/Orderkare.git
cd Orderkare
