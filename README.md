# 💰 Expense Tracker

A full-stack expense tracking application that helps users manage their income and expenses with insightful visualizations and data export capabilities.

## ✨ Features

- **User Authentication**
  - Secure signup and login with JWT authentication
  - Profile picture upload support
  - Protected routes and user sessions

- **Income Management**
  - Add, view, and delete income entries
  - Categorize income sources with custom icons
  - Visual bar charts for income analysis
  - Export income data to Excel

- **Expense Management**
  - Track expenses with categories and dates
  - Visual representation with interactive charts
  - Last 30 days expense overview
  - Export expense data to Excel

- **Dashboard**
  - Real-time overview of financial data
  - Interactive charts and visualizations
  - Recent transactions display
  - Responsive design for all devices

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **Axios** - HTTP client
- **React Hot Toast** - Notifications
- **Moment.js** - Date formatting
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Multer** - File upload handling
- **XLSX** - Excel file generation

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas account)
- npm or yarn package manager

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/expense-tracker-MERN.git
cd expense-tracker-MERN
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file
touch .env
```

Add the following to your `.env` file:

```env
PORT=8000
MONGODB_URI=mongodb://localhost:27017/expense-tracker
JWT_SECRET=your_secret_key_here
```

```bash
# Start the backend server
npm start
```

The backend will run on `http://localhost:8000`

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend will run on `http://localhost:3000`

## 📁 Project Structure

```
expense-tracker/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── dashboardController.js
│   │   ├── expenseController.js
│   │   └── incomeController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── uploadMiddleware.js
│   ├── models/
│   │   ├── Expense.js
│   │   ├── Income.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── dashboardRoutes.js
│   │   ├── expenseRoutes.js
│   │   └── incomeRoutes.js
│   ├── uploads/
│   │   └── .gitkeep
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── public/
    │   ├── index.html
    │   └── favicon.ico
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── Cards/
    │   │   │   ├── InfoCard.jsx
    │   │   │   └── TransactionInfoCard.jsx
    │   │   ├── Charts/
    │   │   │   ├── CustomBarChart.jsx
    │   │   │   └── CustomLineChart.jsx
    │   │   ├── Dashboard/
    │   │   │   ├── ExpenseTransactions.jsx
    │   │   │   ├── FinanceOverview.jsx
    │   │   │   ├── Last30daysExpenses.jsx
    │   │   │   └── RecentTransactions.jsx
    │   │   ├── Expense/
    │   │   │   ├── AddExpenseForm.jsx
    │   │   │   ├── ExpenseList.jsx
    │   │   │   └── ExpenseOverview.jsx
    │   │   ├── Income/
    │   │   │   ├── AddIncomeForm.jsx
    │   │   │   ├── IncomeList.jsx
    │   │   │   └── IncomeOverview.jsx
    │   │   ├── Inputs/
    │   │   │   ├── Input.jsx
    │   │   │   └── ProfilePhotoselector.jsx
    │   │   ├── layouts/
    │   │   │   ├── AuthLayout.jsx
    │   │   │   ├── DashboardLayout.jsx
    │   │   │   ├── Navbar.jsx
    │   │   │   └── SideMenu.jsx
    │   │   ├── DeleteAlert.jsx
    │   │   └── Modal.jsx
    │   ├── context/
    │   │   └── UserContext.js
    │   ├── hooks/
    │   │   └── useUserAuth.js
    │   ├── pages/
    │   │   ├── Auth/
    │   │   │   ├── Login.jsx
    │   │   │   └── Signup.jsx
    │   │   ├── Dashboard/
    │   │   │   └── Home.jsx
    │   │   ├── Expense/
    │   │   │   └── Expense.jsx
    │   │   └── Income/
    │   │       └── Income.jsx
    │   ├── utils/
    │   │   ├── apiPaths.js
    │   │   ├── axiosInstance.js
    │   │   ├── data.js
    │   │   ├── helper.js
    │   │   └── uploadImage.js
    │   ├── App.js
    │   ├── index.css
    │   └── index.js
    ├── .env
    ├── .gitignore
    ├── package.json
    ├── tailwind.config.js
    └── README.md
```

## 🔑 API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user
- `GET /api/v1/auth/getUser` - Get user info (protected)
- `POST /api/v1/auth/upload-image` - Upload profile picture

### Income
- `POST /api/v1/income/add` - Add income (protected)
- `GET /api/v1/income/all` - Get all income (protected)
- `DELETE /api/v1/income/delete/:id` - Delete income (protected)
- `GET /api/v1/income/download-excel` - Download Excel (protected)

### Expense
- `POST /api/v1/expense/add` - Add expense (protected)
- `GET /api/v1/expense/all` - Get all expenses (protected)
- `DELETE /api/v1/expense/delete/:id` - Delete expense (protected)
- `GET /api/v1/expense/download-excel` - Download Excel (protected)

## 💡 Usage

1. **Sign Up**: Create a new account with your name, email, password, and optional profile picture
2. **Login**: Access your dashboard with your credentials
3. **Add Income**: Track your income sources with amounts and dates
4. **Add Expenses**: Record your expenses with categories and dates
5. **View Analytics**: See visual representations of your financial data
6. **Export Data**: Download your income/expense data as Excel files

## 🎨 Features in Detail

### Dashboard
- Overview of total balance, income, and expenses
- Recent transactions list
- Last 30 days expense trends with bar charts

### Income Page
- Bar chart visualization of income over time
- Complete list of all income entries
- Quick add/delete functionality
- Excel export option

### Expense Page
- Interactive expense charts
- Categorized expense tracking
- Date-wise expense analysis
- Excel export capability

## 🔒 Security Features

- Passwords hashed with bcryptjs
- JWT-based authentication
- Protected API routes with middleware
- Secure file upload validation
- Input validation and sanitization

## 🐛 Known Issues & Fixes

- Ensure MongoDB is running before starting the backend
- Profile pictures are stored in `/uploads` directory
- Chart data requires at least one entry to display
- Excel downloads require proper blob response type

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [@bikram3369](https://github.com/bikram3369)

## 🙏 Acknowledgments

- React documentation
- Recharts for amazing charts
- Tailwind CSS for styling
- MongoDB for database

## 📧 Contact

For any queries or suggestions, feel free to reach out!

---

⭐ If you found this project helpful, please give it a star!
