const mongoose = require("mongoose")

const QuestionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  questionType: {
    type: String,
    enum: ["multiple-choice", "true-false", "fill-in-blank", "matching", "short-answer"],
    default: "multiple-choice",
  },
  options: [String], // For multiple choice, matching, etc.
  correctAnswer: {
    type: mongoose.Schema.Types.Mixed, // Can be String, Number, Array for different question types
    required: true,
  },
  explanation: {
    type: String,
    default: "",
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    default: "medium",
  },
  points: {
    type: Number,
    default: 10,
  },
})

const QuizSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    questions: [QuestionSchema],
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isPublic: {
      type: Boolean,
      default: true,
    },
    tags: [String],
    sourceText: {
      type: String, // Original text used to generate the quiz
      default: "",
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "medium",
    },
    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    ratings: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        rating: {
          type: Number,
          min: 1,
          max: 5,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    timesPlayed: {
      type: Number,
      default: 0,
    },
    completionRate: {
      type: Number, // Percentage of users who complete the quiz
      default: 0,
    },
    averageScore: {
      type: Number, // Average score of users who completed the quiz
      default: 0,
    },
    timeEstimate: {
      type: Number, // Estimated time to complete in minutes
      default: 10,
    },
  },
  { timestamps: true },
)

// Method to add a rating to the quiz
QuizSchema.methods.addRating = function (userId, ratingValue) {
  // Check if user has already rated
  const existingRatingIndex = this.ratings.findIndex((rating) => rating.user.toString() === userId.toString())

  if (existingRatingIndex >= 0) {
    // Update existing rating
    this.ratings[existingRatingIndex].rating = ratingValue
    this.ratings[existingRatingIndex].date = Date.now()
  } else {
    // Add new rating
    this.ratings.push({
      user: userId,
      rating: ratingValue,
      date: Date.now(),
    })
  }

  // Recalculate average rating
  if (this.ratings.length > 0) {
    const sum = this.ratings.reduce((total, rating) => total + rating.rating, 0)
    this.averageRating = sum / this.ratings.length
  }

  return this.averageRating
}

const Quiz = mongoose.model("Quiz", QuizSchema)

module.exports = Quiz

