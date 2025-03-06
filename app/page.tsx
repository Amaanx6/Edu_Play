import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Brain, Trophy, Users, Zap, BookOpen, BarChart, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20 z-0" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="px-3 py-1 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                Learning Reimagined
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Learning Made <span className="text-primary">Playful</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Transform traditional learning into an engaging, interactive, and fun experience through gamification.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started
                  </Button>
                </Link>
                <Link href="/#features">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="glass-card rounded-xl p-6 animate-float">
                <div className="aspect-video rounded-lg bg-secondary/50 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="EduPlay Dashboard Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Your Progress</h3>
                    <Badge variant="outline" className="bg-accent/20 text-accent">
                      Level 5
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Machine Learning Basics</span>
                      <span>75%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-3/4 progress-animation" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 badge-glow">
                <div className="neumorphic p-4 rounded-full">
                  <Trophy className="h-8 w-8 text-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-secondary/20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 px-3 py-1 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
              Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Make Learning Fun</h2>
            <p className="text-muted-foreground">
              EduPlay combines powerful learning tools with engaging gamification elements to create an immersive
              educational experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <Brain className="h-10 w-10 text-primary mb-2" />
                <CardTitle>InstantQuiz</CardTitle>
                <CardDescription>
                  Highlight any digital text and generate custom quizzes instantly with AI.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Highlight text from PDFs or articles",
                    "AI-powered quiz generation",
                    "Track progress with spaced repetition",
                    "Share quizzes with study groups",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/features/instant-quiz">
                  <Button variant="ghost" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <Trophy className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Gamification</CardTitle>
                <CardDescription>Earn points, unlock badges, and compete on leaderboards as you learn.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Points system for completed tasks",
                    "Badges and achievements",
                    "Global and group leaderboards",
                    "Levels and progression system",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/features/gamification">
                  <Button variant="ghost" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Social Learning</CardTitle>
                <CardDescription>Collaborate with peers, join team challenges, and discuss topics.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Team challenges and group tasks",
                    "Discussion forums",
                    "Peer recognition system",
                    "Share insights and resources",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/features/social-learning">
                  <Button variant="ghost" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Interactive Content</CardTitle>
                <CardDescription>Engage with multimedia content, simulations, and interactive quizzes.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Interactive quizzes with feedback",
                    "Simulations and role-playing",
                    "Multimedia content",
                    "Real-world scenarios",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/features/interactive-content">
                  <Button variant="ghost" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <BarChart className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Analytics</CardTitle>
                <CardDescription>Track your progress and identify areas for improvement.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Detailed progress reports",
                    "Skill gap analysis",
                    "Performance insights",
                    "Learning recommendations",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/features/analytics">
                  <Button variant="ghost" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <Sparkles className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Rewards</CardTitle>
                <CardDescription>Earn virtual currency and unlock exclusive content as you progress.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Virtual currency for tasks", "Redeemable rewards", "Unlockable content", "Special challenges"].map(
                    (item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/features/rewards">
                  <Button variant="ghost" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="glass-card rounded-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 z-0" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Learning Experience?</h2>
                <p className="text-xl text-muted-foreground">
                  Join thousands of students and professionals who are making learning fun and effective with EduPlay.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/signup">
                    <Button size="lg" className="w-full sm:w-auto">
                      Get Started for Free
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Request a Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="neumorphic p-6 rounded-xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Quick Setup</h3>
                      <p className="text-sm text-muted-foreground">Get started in minutes, no complex setup required</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/20 p-3 rounded-full">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Team Collaboration</h3>
                      <p className="text-sm text-muted-foreground">
                        Invite your friends or colleagues to learn together
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-success/20 p-3 rounded-full">
                      <Trophy className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Track Progress</h3>
                      <p className="text-sm text-muted-foreground">
                        Monitor your learning journey with detailed analytics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

