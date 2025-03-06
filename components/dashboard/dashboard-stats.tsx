import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, BookOpen, Clock, Target } from "lucide-react"

export default function DashboardStats() {
  // Mock stats data
  const stats = [
    {
      title: "Quizzes Completed",
      value: 24,
      icon: BookOpen,
      change: "+3 this week",
      color: "text-primary",
    },
    {
      title: "Study Streak",
      value: "7 days",
      icon: Target,
      change: "Personal best!",
      color: "text-accent",
    },
    {
      title: "Badges Earned",
      value: 12,
      icon: Award,
      change: "+2 this month",
      color: "text-success",
    },
    {
      title: "Study Time",
      value: "32h",
      icon: Clock,
      change: "5h this week",
      color: "text-blue-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="neumorphic">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

