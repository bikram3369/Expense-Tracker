// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// require("dotenv").config();
// const connectDB = require("./config/db");
// const authRoutes = require("./routes/authRoutes");
// const incomeRoutes = require("./routes/incomeRoutes");
// const expenseRoutes = require("./routes/expenseRoutes");
// const dashboardRoutes = require("./routes/dashboardRoutes");

// const app = express();

// // middleware to handle CORS
// app.use(
//   cors({
//     origin: process.env.CLIENT_URL || "*",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

// app.use(express.json());

// // console.log(process.env.MONGO_URI)
// // console.log("MONGO_URI:", process.env.MONGO_URI)
// connectDB();

// app.use("/api/v1/auth", authRoutes)
// app.use("/api/v1/income", incomeRoutes)
// app.use("/api/v1/expense", expenseRoutes)
// app.use("/api/v1/dashboard", dashboardRoutes)


// // serve static files from uploads directory
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

/* ======================
   Database Connection
====================== */
connectDB();

/* ======================
   Global Middlewares
====================== */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.CLIENT_URL || "https://expense-tracker-xtqv.vercel.app/login",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

/* ======================
   API Routes
====================== */
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/income", incomeRoutes);
app.use("/api/v1/expense", expenseRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);

/* ======================
   Static Files
====================== */
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* ======================
   Health Check
====================== */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Expense Tracker API is running",
  });
});

/* ======================
   Server
====================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
