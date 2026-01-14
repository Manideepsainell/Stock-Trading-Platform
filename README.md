# Stock Trading Platform (Full Stack)

A full-stack stock trading platform built using the MERN stack. The application supports secure authentication, portfolio tracking, holdings/positions management, and real-time stock data integration.

## 🔥 Features
- JWT-based authentication (Login/Signup)
- Role-based access control & protected routes
- Portfolio tracking with holdings and positions
- Order/transaction management (basic trading flow)
- Real-time stock data integration (Yahoo Finance API)
- Backend validation + centralized error handling middleware
- CORS + deployment-ready configs

## 🧱 Tech Stack
**Frontend:** React.js, HTML5, CSS3  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**Auth:** JWT  
**API Integration:** Yahoo Finance API (yahoo-finance npm / related API source)

## 📂 Project Structure (High Level)
Stock-Trading-Platform/
├── client/ # React frontend
├── server/ # Express backend
└── README.md


## ⚙️ Environment Variables
Create a `.env` file inside the backend folder (example: `server/.env`):

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
YAHOO_API_KEY=your_key_if_required

```
🚀 Run Locally
1) Clone the repo
git clone https://github.com/Manideepsainell/Stock-Trading-Platform.git
cd Stock-Trading-Platform

2) Install dependencies
Backend
cd server
npm install

Frontend
cd ../client
npm install

3) Start the app
Start Backend
cd server
npm start

Start Frontend
cd ../client
npm start

Frontend runs on: http://localhost:3000
Backend runs on: http://localhost:5000

🔗 API Endpoints (Sample)

Adjust based on your actual routes

POST /api/auth/register → Register user

POST /api/auth/login → Login user

GET /api/portfolio → Portfolio summary

GET /api/holdings → Holdings list

GET /api/positions → Positions list

POST /api/orders → Place order


🛠️ Future Enhancements

Paper trading execution engine (buy/sell simulation)

Watchlist and alerts

Redis caching for stock API data

Unit tests (Jest/Supertest)

)

👨‍💻 Author

Manideep Sai Nellutla
LinkedIn: https://www.linkedin.com/in/manideep-sai-97681a330/

GitHub: https://github.com/Manideepsainell
