const mongoose = require("mongoose")

const QuizAttemptSchema = new mongoose.Schema({
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz",
    required: true,
  },
  startTime: {
    type: Date,
    default: Date.now,
  },
  endTime: {
    type: Date,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  score: {
    type: Number,
    min: 0,
    max: 100,
  },
  answers: [
    {
      question: {
        type: mongoose.Schema.Types.ObjectId,
      },
      userAnswer: mongoose.Schema.Types.Mixed,
      isCorrect: Boolean,
      timeSpent: Number, // Time spent on this question in seconds
    },
  ],
  xpEarned: {
    type: Number,
    default: 0,
  },
  coinsEarned: {
    type: Number,
    default: 0,
  },
})

const ProgressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    totalQuizzesTaken: {
      type: Number,
      default: 0,
    },
    totalQuizzesCompleted: {
      type: Number,
      default: 0,
    },
    totalCorrectAnswers: {
      type: Number,
      default: 0,
    },
    totalQuestions: {
      type: Number,
      default: 0,
    },
    averageScore: {
      type: Number,
      default: 0,
    },
    totalXpEarned: {
      type: Number,
      default: 0,
    },
    totalCoinsEarned: {
      type: Number,
      default: 0,
    },
    totalStudyTime: {
      type: Number, // Total study time in minutes
      default: 0,
    },
    streakHistory: [
      {
        date: Date,
        streakCount: Number,
      },
    ],
    categoryProgress: [
      {
        category: String,
        quizzesTaken: Number,
        averageScore: Number,
      },
    ],
    recentAttempts: [QuizAttemptSchema],
    skillGaps: [
      {
        category: String,
        topic: String,
        proficiency: {
          type: Number,
          min: 0,
          max: 100,
        },
        lastAssessed: Date,
      },
    ],
  },
  { timestamps: true },
)

// Method to add a new quiz attempt
ProgressSchema.methods.addQuizAttempt = function (quizAttempt) {
  // Add to recent attempts, keeping only the most recent 20
  this.recentAttempts.push(quizAttempt)
  if (this.recentAttempts.length > 20) {
    this.recentAttempts.shift() // Remove oldest attempt
  }

  // Update overall statistics
  this.totalQuizzesTaken += 1

  if (quizAttempt.completed) {
    this.totalQuizzesCompleted += 1

    // Update correct answers and total questions
    const correctAnswers = quizAttempt.answers.filter((a) => a.isCorrect).length
    const totalQuestions = quizAttempt.answers.length

    this.totalCorrectAnswers += correctAnswers
    this.totalQuestions += totalQuestions

    // Update average score
    this.averageScore =
      (this.averageScore * (this.totalQuizzesCompleted - 1) + quizAttempt.score) / this.totalQuizzesCompleted

    // Update XP and coins
    this.totalXpEarned += quizAttempt.xpEarned
    this.totalCoinsEarned += quizAttempt.coinsEarned

    // Update study time
    if (quizAttempt.endTime && quizAttempt.startTime) {
      const timeSpentMinutes = (quizAttempt.endTime - quizAttempt.startTime) / (1000 * 60)
      this.totalStudyTime += timeSpentMinutes
    }

    // Update category progress
    this.updateCategoryProgress(quizAttempt)
  }
}

// Helper method to update category progress
ProgressSchema.methods.updateCategoryProgress = function (quizAttempt) {
  const quiz = quizAttempt.quiz

  // Find or create category progress
  let categoryProgress = this.categoryProgress.find((cp) => cp.category === quiz.category)

  if (!categoryProgress) {
    categoryProgress = {
      category: quiz.category,
      quizzesTaken: 0,
      averageScore: 0,
    }
    this.categoryProgress.push(categoryProgress)
  }

  // Update category progress
  categoryProgress.quizzesTaken += 1
  categoryProgress.averageScore =
    (categoryProgress.averageScore * (categoryProgress.quizzesTaken - 1) + quizAttempt.score) /
    categoryProgress.quizzesTaken
}

// Method to update skill gaps
ProgressSchema.methods.updateSkillGap = function (category, topic, proficiency) {
  // Find or create skill gap
  let skillGap = this.skillGaps.find((sg) => sg.category === category && sg.topic === topic)

  if (!skillGap) {
    skillGap = {
      category,
      topic,
      proficiency: 0,
      lastAssessed: new Date(),
    }
    this.skillGaps.push(skillGap)
  }

  // Update proficiency and last assessed date
  skillGap.proficiency = proficiency
  skillGap.lastAssessed = new Date()
}

const Progress = mongoose.model("Progress", ProgressSchema)

module.exports = Progress

