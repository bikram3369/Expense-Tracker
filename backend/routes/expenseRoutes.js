const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const {
  addExpense,
  getAllExpenses,
  deleteExpense,
  downloadExpenseExcel,
} = require("../controllers/expenseController");

const router = express.Router();

router.post("/add", protect, addExpense);
router.get("/all", protect, getAllExpenses);
router.delete("/delete/:id", protect, deleteExpense);
router.get("/download-excel", protect, downloadExpenseExcel);

module.exports = router;
