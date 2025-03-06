import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Sparkles, BookOpen, Share2, Clock } from "lucide-react"

export default function InstantQuizPage() {
  return (
    <div className="container py-12">
      {/* Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
        <Badge className="mb-4 px-3 py-1 bg-primary/20 text-primary">Feature</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">InstantQuiz</h1>
        <p className="text-xl text-muted-foreground">
          Transform any text into engaging quizzes with AI-powered learning tools
        </p>
      </div>

      {/* Main Feature */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Highlight Text, Generate Quizzes</h2>
          <p className="text-lg text-muted-foreground">
            InstantQuiz allows you to highlight any digital text from PDFs, articles, or textbooks and generate custom
            quizzes instantly using advanced AI technology.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary/20 shrink-0 mt-1">
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">AI-Powered Generation</h3>
                <p className="text-muted-foreground">
                  Our advanced AI creates relevant MCQs, flashcards, and fill-in-the-blanks from your selected text.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-accent/20 shrink-0 mt-1">
                <Clock className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Spaced Repetition</h3>
                <p className="text-muted-foreground">
                  Get smart reminders to review quizzes at optimal intervals to maximize retention and learning.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-success/20 shrink-0 mt-1">
                <Share2 className="h-5 w-5 text-success" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Shareable Content</h3>
                <p className="text-muted-foreground">
                  Create and share quiz packs with your study groups or classmates for collaborative learning.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/dashboard/quiz-generator">
              <Button size="lg" className="w-full sm:w-auto">
                <Sparkles className="h-4 w-4 mr-2" />
                Try InstantQuiz
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="glass-card rounded-xl p-6">
            <div className="aspect-video rounded-lg bg-background overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="InstantQuiz Demo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6 space-y-4">
              <div className="neumorphic p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <h4 className="font-medium">Sample Generated Question</h4>
                </div>
                <p className="text-muted-foreground mb-3">
                  Based on the highlighted text about machine learning algorithms...
                </p>
                <div className="p-3 rounded-md bg-secondary/50">
                  <p className="font-medium">
                    What is the primary difference between supervised and unsupervised learning?
                  </p>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border border-primary"></div>
                      <span>Supervised learning requires labeled data, while unsupervised does not</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border border-primary"></div>
                      <span>Supervised learning is faster than unsupervised learning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border border-primary"></div>
                      <span>Unsupervised learning always produces better results</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Generate engaging quizzes from any text in just three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="neumorphic border-0">
            <CardHeader>
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <CardTitle>Highlight Text</CardTitle>
              <CardDescription>Select any text from digital content that you want to learn</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Copy and paste text from PDFs, websites, textbooks, or your own notes into the InstantQuiz generator.
              </p>
            </CardContent>
          </Card>

          <Card className="neumorphic border-0">
            <CardHeader>
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <CardTitle>Generate Quiz</CardTitle>
              <CardDescription>Click to create custom questions with our AI</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our AI analyzes the content and generates various question types including multiple choice,
                fill-in-the-blanks, and more.
              </p>
            </CardContent>
          </Card>

          <Card className="neumorphic border-0">
            <CardHeader>
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <CardTitle>Learn & Review</CardTitle>
              <CardDescription>Take the quiz and track your progress over time</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Answer the generated questions, get instant feedback, and review your performance through spaced
                repetition for maximum retention.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="glass-card rounded-xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 z-0" />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Learning?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of students who are revolutionizing their study experience with InstantQuiz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started Free
              </Button>
            </Link>
            <Link href="/dashboard/quiz-generator">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Try a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

