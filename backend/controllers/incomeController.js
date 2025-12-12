const xlsx = require("xlsx");
const Income = require("../models/Income");


// Add Income Source
exports.addIncome = async (req, res) => {
    const userId = req.user.id;

    try {
        const { icon, source, amount, date } = req.body;

        // Validation: all fields are required
        if (!source || !amount || !date) {
            return res.status(400).json({ message: "All fields are required" });
        } 

        const newIncome = new Income({
            userId,
            icon,
            source,
            amount,
            date: new Date(date),
        })

        await newIncome.save();

        res.status(201).json({ message: "Income added successfully", data: newIncome });
    } catch (error) {
        console.error("Error adding income:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Get All Income Source
exports.getAllIncomes = async (req, res) => {
    const userId = req.user.id;

    try {
        const incomes = await Income.find({ userId }).sort({ date: -1 });
        res.status(200).json({ data: incomes });
    } catch (error) {
        console.error("Error fetching incomes:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Delete Income Source
exports.deleteIncome = async (req, res) => {
    try {
        await Income.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Income deleted successfully" });
    } catch (error) {
        console.error("Error deleting income:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Download Excel
exports.downloadIncomeExcel = async (req, res) => {
    const userId = req.user.id;

    try {
        const incomes = await Income.find({ userId }).sort({ date: -1 });

        // Prepare Excel file
        const data = incomes.map((item) => ({
            Source: item.source,
            Amount: item.amount,
            Date: item.date,
        }))

        const wb = xlsx.utils.book_new()
        const ws = xlsx.utils.json_to_sheet(data)
        xlsx.utils.book_append_sheet(wb, ws, "Income")
        xlsx.writeFile(wb, "income_details.xlsx")
        res.download("income_details.xlsx")
    } catch (error) {
        console.error("Error downloading income Excel:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}