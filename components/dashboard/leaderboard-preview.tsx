import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users } from "lucide-react"

export default function LeaderboardPreview() {
  // Mock leaderboard data
  const leaderboard = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 1250,
      level: 8,
      position: 1,
    },
    {
      id: 2,
      name: "Sarah Williams",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 1120,
      level: 7,
      position: 2,
    },
    {
      id: 3,
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 980,
      level: 5,
      position: 3,
      isCurrentUser: true,
    },
    {
      id: 4,
      name: "Emily Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 870,
      level: 6,
      position: 4,
    },
    {
      id: 5,
      name: "Michael Brown",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 750,
      level: 4,
      position: 5,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              Leaderboard
            </CardTitle>
            <CardDescription>Top performers this week</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-primary/20 text-primary border-primary/20">
              Weekly
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {leaderboard.map((user) => (
            <div
              key={user.id}
              className={`flex items-center gap-3 p-3 rounded-lg ${
                user.isCurrentUser ? "bg-primary/10 border border-primary/20" : "neumorphic"
              }`}
            >
              <div className="w-6 text-center font-bold">
                {user.position === 1 && "🥇"}
                {user.position === 2 && "🥈"}
                {user.position === 3 && "🥉"}
                {user.position > 3 && user.position}
              </div>
              <Avatar className="h-8 w-8 border border-border">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-sm">
                    {user.name} {user.isCurrentUser && "(You)"}
                  </h3>
                  <Badge variant="outline" className="text-xs">
                    Lvl {user.level}
                  </Badge>
                </div>
                <div className="text-xs text-muted-foreground mt-1">{user.points} points</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <Users className="mr-2 h-4 w-4" />
          View Full Leaderboard
        </Button>
      </CardFooter>
    </Card>
  )
}

