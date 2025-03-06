const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")

// Route imports
const routes = require("./routes")

// Load environment variables
dotenv.config()

// Initialize express app
const app = express()

// Set middleware
app.use(express.json({ limit: "30mb" }))
app.use(express.urlencoded({ extended: true, limit: "30mb" }))
app.use(cors())
app.use(helmet())
app.use(morgan("dev"))

// Mount all routes
app.use("/api", routes)

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "EduPlay API is running" })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    message: err.message || "Something went wrong on the server",
    error: process.env.NODE_ENV === "development" ? err : {},
  })
})

// Set port and connect to MongoDB
const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/eduplay"

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB")
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error)
  })

