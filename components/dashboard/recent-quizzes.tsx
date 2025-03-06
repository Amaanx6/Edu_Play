import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, BarChart, ArrowRight } from "lucide-react"

export default function RecentQuizzes() {
  // Mock quiz data
  const quizzes = [
    {
      id: 1,
      title: "Machine Learning Fundamentals",
      description: "Basic concepts of machine learning algorithms",
      questions: 15,
      completedAt: "2 days ago",
      score: 85,
      category: "Computer Science",
    },
    {
      id: 2,
      title: "Introduction to Psychology",
      description: "Core principles of human behavior and mental processes",
      questions: 20,
      completedAt: "1 week ago",
      score: 92,
      category: "Psychology",
    },
    {
      id: 3,
      title: "World History: Ancient Civilizations",
      description: "Exploring the rise and fall of ancient empires",
      questions: 25,
      completedAt: "2 weeks ago",
      score: 78,
      category: "History",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Recent Quizzes
            </CardTitle>
            <CardDescription>Your recently completed and in-progress quizzes</CardDescription>
          </div>
          <Button variant="ghost" size="sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg neumorphic">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{quiz.title}</h3>
                  <Badge variant="outline" className="ml-auto sm:ml-2">
                    {quiz.category}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{quiz.description}</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <BookOpen className="h-3 w-3 mr-1" />
                    {quiz.questions} questions
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {quiz.completedAt}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold">{quiz.score}%</div>
                  <div className="text-xs text-muted-foreground">Score</div>
                </div>
                <Link href={`/quizzes/${quiz.id}`}>
                  <Button variant="ghost" size="icon">
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <BarChart className="mr-2 h-4 w-4" />
          View Detailed Analytics
        </Button>
      </CardFooter>
    </Card>
  )
}

