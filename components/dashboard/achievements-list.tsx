import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Zap, Target, Trophy } from "lucide-react"

export default function AchievementsList() {
  // Mock achievements data
  const achievements = [
    {
      id: 1,
      title: "First Quiz",
      description: "Complete your first quiz",
      icon: BookOpen,
      color: "text-primary",
      earned: true,
      date: "2 weeks ago",
    },
    {
      id: 2,
      title: "Perfect Score",
      description: "Get 100% on any quiz",
      icon: Trophy,
      color: "text-accent",
      earned: true,
      date: "1 week ago",
    },
    {
      id: 3,
      title: "Quick Learner",
      description: "Complete 5 quizzes in a day",
      icon: Zap,
      color: "text-success",
      earned: true,
      date: "3 days ago",
    },
    {
      id: 4,
      title: "Streak Master",
      description: "Maintain a 7-day learning streak",
      icon: Target,
      color: "text-blue-500",
      earned: false,
    },
    {
      id: 5,
      title: "Knowledge Explorer",
      description: "Complete quizzes in 5 different categories",
      icon: Award,
      color: "text-purple-500",
      earned: false,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary" />
          Achievements
        </CardTitle>
        <CardDescription>Badges and milestones you've unlocked</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`flex items-center gap-3 p-3 rounded-lg ${
                achievement.earned ? "neumorphic" : "bg-secondary/20"
              }`}
            >
              <div className={`p-2 rounded-full ${achievement.earned ? "bg-primary/20" : "bg-muted"}`}>
                <achievement.icon
                  className={`h-5 w-5 ${achievement.earned ? achievement.color : "text-muted-foreground"}`}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className={`font-medium ${!achievement.earned && "text-muted-foreground"}`}>
                    {achievement.title}
                  </h3>
                  {achievement.earned ? (
                    <Badge variant="outline" className="bg-success/20 text-success border-success/20">
                      Earned
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-secondary/20 text-muted-foreground border-secondary/20">
                      Locked
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {achievement.description}
                  {achievement.earned && ` • ${achievement.date}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

