import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, LineChart, TrendingUp, Lightbulb, Target } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="container py-12">
      {/* Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
        <Badge className="mb-4 px-3 py-1 bg-primary/20 text-primary">Feature</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Analytics</h1>
        <p className="text-xl text-muted-foreground">
          Track your progress, identify areas for improvement, and get personalized learning recommendations
        </p>
      </div>

      {/* Main Feature */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Data-Driven Learning</h2>
          <p className="text-lg text-muted-foreground">
            Our powerful analytics tools track your performance across all learning activities, providing valuable
            insights to help you focus your efforts where they'll have the biggest impact.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary/20 shrink-0 mt-1">
                <BarChart className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Detailed Progress Reports</h3>
                <p className="text-muted-foreground">
                  Track your performance over time with comprehensive dashboards and visualizations.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-accent/20 shrink-0 mt-1">
                <Target className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Skill Gap Analysis</h3>
                <p className="text-muted-foreground">
                  Identify your knowledge gaps and receive targeted recommendations to improve.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-success/20 shrink-0 mt-1">
                <Lightbulb className="h-5 w-5 text-success" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Smart Recommendations</h3>
                <p className="text-muted-foreground">
                  Get AI-powered suggestions for quizzes, resources, and learning paths.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/dashboard/analytics">
              <Button size="lg" className="w-full sm:w-auto">
                <BarChart className="h-4 w-4 mr-2" />
                View Your Analytics
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="glass-card rounded-xl p-6">
            <div className="aspect-video rounded-lg bg-background overflow-hidden p-4">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Analytics Dashboard"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="mt-6 space-y-4">
              <div className="neumorphic p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <h4 className="font-medium">Learning Insights</h4>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-secondary/50 p-3 rounded-md">
                    <p className="text-xs text-muted-foreground">Quiz Accuracy</p>
                    <p className="text-xl font-bold">87%</p>
                    <p className="text-xs text-success">↑ 4%</p>
                  </div>
                  <div className="bg-secondary/50 p-3 rounded-md">
                    <p className="text-xs text-muted-foreground">Study Time</p>
                    <p className="text-xl font-bold">24h</p>
                    <p className="text-xs text-success">↑ 2h</p>
                  </div>
                  <div className="bg-secondary/50 p-3 rounded-md">
                    <p className="text-xs text-muted-foreground">Weak Areas</p>
                    <p className="text-xl font-bold">3</p>
                    <p className="text-xs text-destructive">↓ 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Powerful Analytics Tools</h2>
          <p className="text-lg text-muted-foreground">Make data-driven decisions to optimize your learning journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="neumorphic border-0">
            <CardHeader>
              <LineChart className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Progress Tracking</CardTitle>
              <CardDescription>Monitor your learning journey over time</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Track your quiz scores, study time, and skill mastery over days, weeks, and months with intuitive
                visualizations that help you see your growth.
              </p>
            </CardContent>
          </Card>

          <Card className="neumorphic border-0">
            <CardHeader>
              <Target className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Skill Gap Analysis</CardTitle>
              <CardDescription>Identify areas that need improvement</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our AI analyzes your quiz performance to pinpoint specific topics or concepts where you're struggling,
                helping you focus your study time effectively.
              </p>
            </CardContent>
          </Card>

          <Card className="neumorphic border-0">
            <CardHeader>
              <Lightbulb className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Smart Recommendations</CardTitle>
              <CardDescription>Get personalized learning suggestions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Receive custom-tailored quiz recommendations, study materials, and learning paths based on your
                performance data and learning goals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="glass-card rounded-xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 z-0" />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Learning?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Unlock the power of analytics to study smarter, not harder
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Link href="/dashboard/analytics">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

