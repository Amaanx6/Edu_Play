const mongoose = require("mongoose")

const BadgeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
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
    rarity: {
      type: String,
      enum: ["common", "uncommon", "rare", "epic", "legendary"],
      default: "common",
    },
    category: {
      type: String,
      enum: ["quiz", "streak", "social", "milestone", "special"],
      required: true,
    },
    linkedAchievement: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Achievement",
    },
    isDisplayable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
)

const Badge = mongoose.model("Badge", BadgeSchema)

module.exports = Badge

