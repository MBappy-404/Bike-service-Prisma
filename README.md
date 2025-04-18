# 🏍️ Bike Servicing Management System API

A backend API built with **Node.js**, **Express.js**, and **TypeScript** to manage a bike servicing center's **customers**, **bikes**, and **service records**.  
This system allows staff to perform **CRUD operations** and manage service jobs efficiently.

---

## 🌐 Live Backend

🔗 [https://bike-servicing-api-production.up.railway.app](https://bike-servicing-api-production.up.railway.app)  
_(Replace this with your actual Railway/Render link if different)_

---

## ⚙️ Tech Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**

---

## 🧱 Database Schema

UUID is used as the **primary key** for all tables.

### Tables:

- **Customer**: Stores customer information
- **Bike**: Stores bike details linked to a customer
- **ServiceRecord**: Tracks bike servicing jobs with timestamps and status

---

## 🛠 Setup Guide

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/bike-servicing-api.git
   cd bike-servicing-api
