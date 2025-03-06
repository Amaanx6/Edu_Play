const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    avatar: {
      type: String,
      default: "default-avatar.png",
    },
    level: {
      type: Number,
      default: 1,
    },
    xp: {
      type: Number,
      default: 0,
    },
    coins: {
      type: Number,
      default: 0,
    },
    nextLevelXp: {
      type: Number,
      default: 100,
    },
    streak: {
      count: { type: Number, default: 0 },
      lastActivity: { type: Date, default: Date.now },
    },
    achievements: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Achievement",
      },
    ],
    quizzesTaken: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
      },
    ],
    quizzesCreated: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
      },
    ],
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    studyTime: {
      type: Number, // Total study time in minutes
      default: 0,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    badges: [
      {
        badge: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Badge",
        },
        dateEarned: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    settings: {
      notifications: {
        email: { type: Boolean, default: true },
        app: { type: Boolean, default: true },
      },
      privacy: {
        showOnLeaderboard: { type: Boolean, default: true },
        shareActivity: { type: Boolean, default: true },
      },
    },
  },
  { timestamps: true },
)

// Pre-save hook to hash password
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next()

  try {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
  } catch (error) {
    next(error)
  }
})

// Method to compare password
UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password)
}

// Method to update XP and check for level up
UserSchema.methods.addXP = function (amount) {
  this.xp += amount

  // Check if user should level up
  if (this.xp >= this.nextLevelXp) {
    this.level += 1
    this.xp -= this.nextLevelXp
    this.nextLevelXp = Math.floor(this.nextLevelXp * 1.5) // Increase XP needed for next level
    return true // Return true if level up occurred
  }

  return false // Return false if no level up
}

// Method to add coins
UserSchema.methods.addCoins = function (amount) {
  this.coins += amount
  return this.coins
}

// Method to update streak
UserSchema.methods.updateStreak = function () {
  const now = new Date()
  const lastActivity = new Date(this.streak.lastActivity)

  // Check if last activity was yesterday (within 48 hours but not same day)
  const isYesterday = now.getDate() !== lastActivity.getDate() && now - lastActivity < 48 * 60 * 60 * 1000

  if (isYesterday) {
    // Continue streak
    this.streak.count += 1
  } else if (now - lastActivity >= 48 * 60 * 60 * 1000) {
    // Reset streak if more than 48 hours have passed
    this.streak.count = 1
  }

  // Update last activity
  this.streak.lastActivity = now
  return this.streak.count
}

const User = mongoose.model("User", UserSchema)

module.exports = User

