🏍️ Bike Servicing Management System API
A backend API built with Node.js, Express.js, and TypeScript to manage a bike servicing center's customers, bikes, and service records. This system allows staff to perform CRUD operations and manage service jobs efficiently.

🌐 Live Backend
https://bike-servicing-api-production.up.railway.app
(Replace with your actual live Railway/Render link)

⚙️ Tech Stack
Node.js

Express.js

TypeScript

Prisma ORM

PostgreSQL

🧱 Database Schema
UUID used as the primary key for all tables.

Tables:

Customer: Stores customer information

Bike: Stores bike details linked to a customer

ServiceRecord: Tracks bike servicing jobs with timestamps and status

🛠 Setup Guide
Clone the repository

Install dependencies using npm install

Configure environment variables in a .env file (e.g., DATABASE_URL)

Run Prisma migrations using npx prisma migrate dev

Start the server using npm run dev

✨ Key Features
📁 Customer Management
Create, retrieve, update, and delete customers

Each customer has a unique email and phone number

🛵 Bike Management
Add and view bikes associated with a customer

Retrieve individual bike details

🔧 Service Management
Create a service job for a bike

List all service records

Mark a service as completed

View services by ID

⏳ Business Logic
Services older than 7 days can be flagged for review or follow-up
