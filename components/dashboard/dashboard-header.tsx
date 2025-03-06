"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Bell, BookOpen, Settings } from "lucide-react"

export default function DashboardHeader() {
  // Mock user data
  const user = {
    name: "John Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    level: 5,
    xp: 1250,
    nextLevel: 1500,
  }

  return (
    <Card className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-primary">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Level {user.level}</Badge>
            </div>
            <div className="mt-2">
              <div className="flex justify-between text-sm mb-1">
                <span>
                  XP: {user.xp}/{user.nextLevel}
                </span>
                <span>{Math.round((user.xp / user.nextLevel) * 100)}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary progress-animation"
                  style={{ width: `${(user.xp / user.nextLevel) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Button variant="outline" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Button>
          <Button className="w-full md:w-auto">
            <BookOpen className="mr-2 h-5 w-5" />
            Start Learning
          </Button>
        </div>
      </div>
    </Card>
  )
}

