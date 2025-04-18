# 🏍️ Bike Servicing Management System API

A backend API built with **Node.js**, **Express.js**, and **TypeScript** to manage a bike servicing center's **customers**, **bikes**, and **service records**.  
This system allows staff to perform **CRUD operations** and manage service jobs efficiently.

---

## 🌐 Live Backend

🔗 [https://bike-service-api-six.vercel.app/](https://bike-service-api-six.vercel.app/)  
 
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

## ✨ Key Features

### 📁 Customer Management

- Create, retrieve, update, and delete customers
- Enforces unique **email** and **phone number** for each customer
- Easily associate customers with their bikes

---

### 🛵 Bike Management

- Add new bikes and link them to existing customers
- Retrieve all bikes or individual bike details
- Keep track of **bike models**, **brands**, and **registration numbers**

---

### 🔧 Service Management

- Create a **new service job** for any registered bike
- List all service records with filtering options
- Mark services as **completed**
- View specific service details by ID

---

### ⏳ Business Logic

- Automatically **flag services** older than 7 days for review or follow-up
- Useful for improving customer retention and after-sales service

---

### 🧾 Organized & Scalable

- Built with **TypeScript** for safer, scalable development
- Uses **Prisma ORM** for clean and robust database handling
- UUIDs as primary keys ensure **unique and secure data management**

