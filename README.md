# InvestEdge

InvestEdge is a full-stack stock trading platform inspired by Zerodha, built to simulate a modern investment ecosystem. The project provides users with a responsive trading dashboard, market insights, portfolio management, and a clean brokerage landing page experience.

## Features

### Frontend (Landing Website)
- Responsive landing page inspired by Zerodha
- Modern navigation bar with routing
- Signup page for user onboarding
- About page introducing platform services
- Pricing page for brokerage plans
- Support page with ticket creation interface
- Product showcase section for investment products
- Custom branding with InvestEdge logo and favicon

### Dashboard
- Portfolio holdings overview
- Orders management
- Positions tracking
- Watchlist for stocks
- Interactive charts using Chart.js
- Buy action window for stock purchase simulation
- Funds management section
- Trading summary dashboard

### Backend
- REST API built with Express.js
- MongoDB database integration
- Mongoose schemas and models
- Holdings, Orders, and Positions data storage
- Environment variable support using dotenv

---

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Bootstrap
- Font Awesome
- Chart.js
- React ChartJS 2
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Dotenv

### Development Tools
- Git & GitHub
- VS Code
- Postman

---

## Project Structure

```bash
InvestEdge/
│
├── backend/
│   ├── model/
│   ├── schemas/
│   ├── index.js
│   └── package.json
│
├── dashboard/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
└── .gitignore
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/InvestEdge.git
cd InvestEdge
```

### Install backend dependencies

```bash
cd backend
npm install
```

### Install dashboard dependencies

```bash
cd ../dashboard
npm install
```

### Install frontend dependencies

```bash
cd ../frontend
npm install
```

---

## Running the Project

### Start Backend Server

```bash
cd backend
npm run start
```

or

```bash
npm run dev
```

### Start Dashboard

```bash
cd dashboard
npm start
```

### Start Frontend

```bash
cd frontend
npm start
```

---

## Environment Variables

Create `.env` file inside backend folder

```env
MONGO_URL=your_mongodb_connection_string
PORT=5000
```

---

## Screens Included

- Landing Page
- Trading Dashboard
- Portfolio Management
- Stock Watchlist
- Support Ticket System
- Pricing & Product Pages

---

## Future Improvements

- User Authentication
- Real-time stock market API integration
- Payment gateway for account opening
- Live portfolio analytics
- Trading order execution simulation
- Deployment on cloud platform

---

## Author

**Prabhakar Jha**

GitHub: https://github.com/P-JHA

---

## License

This project is developed for learning purposes and portfolio demonstration.
