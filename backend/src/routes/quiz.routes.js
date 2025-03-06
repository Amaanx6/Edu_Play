const express = require("express")
const router = express.Router()
const { check } = require("express-validator")
const quizController = require("../controllers/quiz.controller")
const { authMiddleware } = require("../middleware/auth.middleware")

// Get all public quizzes with pagination
// GET /api/quiz
router.get("/", quizController.getQuizzes)

// Get quiz by ID
// GET /api/quiz/:id
router.get("/:id", quizController.getQuizById)

// Create new quiz
// POST /api/quiz
router.post(
  "/",
  authMiddleware,
  [
    check("title", "Title is required").not().isEmpty(),
    check("category", "Category is required").not().isEmpty(),
    check("questions", "Questions are required").isArray({ min: 1 }),
  ],
  quizController.createQuiz,
)

// Generate quiz from text
// POST /api/quiz/generate
router.post(
  "/generate",
  authMiddleware,
  [
    check("text", "Source text is required").not().isEmpty(),
    check("numQuestions", "Number of questions is required").isInt({ min: 1, max: 20 }),
    check("category", "Category is required").not().isEmpty(),
  ],
  quizController.generateQuiz,
)

// Update quiz
// PUT /api/quiz/:id
router.put("/:id", authMiddleware, quizController.updateQuiz)

// Delete quiz
// DELETE /api/quiz/:id
router.delete("/:id", authMiddleware, quizController.deleteQuiz)

// Rate quiz
// POST /api/quiz/:id/rate
router.post(
  "/:id/rate",
  authMiddleware,
  [check("rating", "Rating must be between 1 and 5").isInt({ min: 1, max: 5 })],
  quizController.rateQuiz,
)

// Submit quiz attempt
// POST /api/quiz/:id/attempt
router.post("/:id/attempt", authMiddleware, quizController.submitQuizAttempt)

// Get popular quizzes
// GET /api/quiz/popular
router.get("/popular", quizController.getPopularQuizzes)

// Get quizzes by category
// GET /api/quiz/category/:category
router.get("/category/:category", quizController.getQuizzesByCategory)

module.exports = router

