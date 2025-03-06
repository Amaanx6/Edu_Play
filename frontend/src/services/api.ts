import axios from "axios"

// API base URL from environment variable
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers["x-auth-token"] = token
    }
    return config
  },
  (error) => Promise.reject(error),
)

// Quiz API
export const quizAPI = {
  // Get all quizzes
  getQuizzes: (page = 1, limit = 10) => api.get(`/quiz?page=${page}&limit=${limit}`),

  // Get quiz by ID
  getQuizById: (id: string) => api.get(`/quiz/${id}`),

  // Create quiz
  createQuiz: (quizData: any) => api.post("/quiz", quizData),

  // Generate quiz from text
  generateQuiz: (data: { text: string; numQuestions: number; category: string }) => api.post("/quiz/generate", data),

  // Update quiz
  updateQuiz: (id: string, quizData: any) => api.put(`/quiz/${id}`, quizData),

  // Delete quiz
  deleteQuiz: (id: string) => api.delete(`/quiz/${id}`),

  // Rate quiz
  rateQuiz: (id: string, rating: number) => api.post(`/quiz/${id}/rate`, { rating }),

  // Submit quiz attempt
  submitQuizAttempt: (id: string, attemptData: any) => api.post(`/quiz/${id}/attempt`, attemptData),
}

// User API
export const userAPI = {
  // Get user profile
  getProfile: () => api.get("/users/profile"),

  // Update user profile
  updateProfile: (profileData: any) => api.put("/users/profile", profileData),

  // Get user achievements
  getAchievements: () => api.get("/users/achievements"),

  // Get user stats
  getStats: () => api.get("/users/stats"),

  // Get user progress
  getProgress: () => api.get("/users/progress"),
}

// Social API
export const socialAPI = {
  // Get discussions
  getDiscussions: (page = 1, limit = 10) => api.get(`/social/discussions?page=${page}&limit=${limit}`),

  // Get discussion by ID
  getDiscussionById: (id: string) => api.get(`/social/discussions/${id}`),

  // Create discussion
  createDiscussion: (discussionData: any) => api.post("/social/discussions", discussionData),

  // Add comment to discussion
  addComment: (discussionId: string, commentData: any) =>
    api.post(`/social/discussions/${discussionId}/comments`, commentData),

  // Get groups
  getGroups: (page = 1, limit = 10) => api.get(`/social/groups?page=${page}&limit=${limit}`),

  // Get group by ID
  getGroupById: (id: string) => api.get(`/social/groups/${id}`),

  // Create group
  createGroup: (groupData: any) => api.post("/social/groups", groupData),

  // Join group
  joinGroup: (groupId: string) => api.post(`/social/groups/${groupId}/join`),

  // Leave group
  leaveGroup: (groupId: string) => api.post(`/social/groups/${groupId}/leave`),
}

// Analytics API
export const analyticsAPI = {
  // Get user analytics
  getUserAnalytics: () => api.get("/analytics/user"),

  // Get learning progress
  getLearningProgress: () => api.get("/analytics/learning-progress"),

  // Get skill gaps
  getSkillGaps: () => api.get("/analytics/skill-gaps"),

  // Get recommendations
  getRecommendations: () => api.get("/analytics/recommendations"),
}

// Rewards API
export const rewardsAPI = {
  // Get available rewards
  getRewards: () => api.get("/rewards"),

  // Redeem reward
  redeemReward: (rewardId: string) => api.post(`/rewards/${rewardId}/redeem`),

  // Get user badges
  getBadges: () => api.get("/rewards/badges"),

  // Get user coins
  getCoins: () => api.get("/rewards/coins"),
}

export default api

