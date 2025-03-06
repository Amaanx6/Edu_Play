const express = require("express")
const router = express.Router()
const { check } = require("express-validator")
const authController = require("../controllers/auth.controller")
const { authMiddleware } = require("../middleware/auth.middleware")

// Register new user
// POST /api/auth/register
router.post(
  "/register",
  [
    check("username", "Username is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password must be at least 8 characters").isLength({ min: 8 }),
  ],
  authController.register,
)

// Login user
// POST /api/auth/login
router.post(
  "/login",
  [check("email", "Please include a valid email").isEmail(), check("password", "Password is required").exists()],
  authController.login,
)

// Get current user profile
// GET /api/auth/me
router.get("/me", authMiddleware, authController.getMe)

// Change password
// PUT /api/auth/password
router.put(
  "/password",
  authMiddleware,
  [
    check("currentPassword", "Current password is required").exists(),
    check("newPassword", "New password must be at least 8 characters").isLength({ min: 8 }),
  ],
  authController.changePassword,
)

// Forgot password
// POST /api/auth/forgot-password
router.post(
  "/forgot-password",
  [check("email", "Please include a valid email").isEmail()],
  authController.forgotPassword,
)

// Refresh token
// POST /api/auth/refresh-token
router.post("/refresh-token", authController.refreshToken)

module.exports = router

