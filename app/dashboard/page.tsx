import type { Metadata } from "next"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import DashboardStats from "@/components/dashboard/dashboard-stats"
import RecentQuizzes from "@/components/dashboard/recent-quizzes"
import AchievementsList from "@/components/dashboard/achievements-list"
import LeaderboardPreview from "@/components/dashboard/leaderboard-preview"
import QuizGenerator from "@/components/dashboard/quiz-generator"

export const metadata: Metadata = {
  title: "Dashboard | EduPlay",
  description: "Your learning dashboard",
}

export default function DashboardPage() {
  return (
    <div className="container py-6">
      <DashboardHeader />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="md:col-span-2 space-y-6">
          <DashboardStats />
          <QuizGenerator />
          <RecentQuizzes />
        </div>
        <div className="space-y-6">
          <AchievementsList />
          <LeaderboardPreview />
        </div>
      </div>
    </div>
  )
}

