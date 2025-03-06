const mongoose = require("mongoose")

const AchievementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["quiz", "streak", "social", "milestone", "special"],
      required: true,
    },
    icon: {
      type: String, // Path or name of the icon
      required: true,
    },
    color: {
      type: String, // CSS color value
      default: "#8A2BE2", // Default purple color
    },
    criteria: {
      type: {
        type: String,
        required: true,
        enum: [
          "quiz_completion",
          "perfect_score",
          "streak_days",
          "total_xp",
          "quiz_creation",
          "category_mastery",
          "social_interaction",
          "custom",
        ],
      },
      threshold: {
        type: Number,
        required: true,
      },
      additionalParams: {
        type: mongoose.Schema.Types.Mixed,
      },
    },
    reward: {
      xp: {
        type: Number,
        default: 0,
      },
      coins: {
        type: Number,
        default: 0,
      },
      special: {
        type: mongoose.Schema.Types.Mixed, // For special rewards like badges, avatar items, etc.
      },
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard", "legendary"],
      default: "medium",
    },
    isSecret: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
)

// Static method to check if a user meets criteria for an achievement
AchievementSchema.statics.checkCriteria = async function (user, action, value, additionalData = {}) {
  try {
    // Find all achievements matching the action type that user doesn't already have
    const userAchievementIds = user.achievements.map((a) => a.toString())
    const potentialAchievements = await this.find({
      "criteria.type": action,
      _id: { $nin: userAchievementIds },
    })

    const unlockedAchievements = []

    for (const achievement of potentialAchievements) {
      let meetsThreshold = false

      switch (action) {
        case "quiz_completion":
          meetsThreshold = value >= achievement.criteria.threshold
          break
        case "perfect_score":
          meetsThreshold = value >= achievement.criteria.threshold
          break
        case "streak_days":
          meetsThreshold = value >= achievement.criteria.threshold
          break
        case "total_xp":
          meetsThreshold = value >= achievement.criteria.threshold
          break
        case "quiz_creation":
          meetsThreshold = value >= achievement.criteria.threshold
          break
        case "category_mastery":
          // Check if category matches and threshold is met
          if (additionalData.category === achievement.criteria.additionalParams?.category) {
            meetsThreshold = value >= achievement.criteria.threshold
          }
          break
        case "social_interaction":
          meetsThreshold = value >= achievement.criteria.threshold
          break
        case "custom":
          // Custom logic for special achievements
          // Would need specific implementation for each custom achievement
          break
      }

      if (meetsThreshold) {
        unlockedAchievements.push(achievement)
      }
    }

    return unlockedAchievements
  } catch (error) {
    console.error("Error checking achievement criteria:", error)
    return []
  }
}

const Achievement = mongoose.model("Achievement", AchievementSchema)

module.exports = Achievement

