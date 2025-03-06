const express = require("express")
const router = express.Router()

// Import route modules
const authRoutes = require("./auth.routes")
const quizRoutes = require("./quiz.routes")
const socialRoutes = require("./social.routes")
const userRoutes = require("./user.routes")
const analyticsRoutes = require("./analytics.routes")
const rewardsRoutes = require("./rewards.routes")

// Mount routes
router.use("/auth", authRoutes)
router.use("/quiz", quizRoutes)
router.use("/social", socialRoutes)
router.use("/users", userRoutes)
router.use("/analytics", analyticsRoutes)
router.use("/rewards", rewardsRoutes)

module.exports = router

