import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageSquare, Target, Award, UserPlus } from "lucide-react"

export default function SocialLearningPage() {
  return (
    <div className="container py-12">
      {/* Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
        <Badge className="mb-4 px-3 py-1 bg-primary/20 text-primary">Feature</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Social Learning</h1>
        <p className="text-xl text-muted-foreground">
          Collaborate with peers, join team challenges, and discuss topics to enhance your learning experience
        </p>
      </div>

      {/* Main Feature */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="order-2 lg:order-1 relative">
          <div className="glass-card rounded-xl p-6">
            <div className="aspect-video rounded-lg bg-background overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Social Learning Demo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6 space-y-4">
              <div className="neumorphic p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <h4 className="font-medium">Discussion Thread</h4>
                </div>
                <div className="p-3 rounded-md bg-secondary/50">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-medium">Alex Johnson</p>
                        <p className="text-sm text-muted-foreground">
                          Can anyone explain how neural networks process backpropagation?
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 pl-8">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-medium">Sarah Williams</p>
                        <p className="text-sm text-muted-foreground">
                          Backpropagation is how neural networks learn by adjusting weights based on error...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-6">
          <h2 className="text-3xl font-bold">Learn Better Together</h2>
          <p className="text-lg text-muted-foreground">
            Research shows that collaborative learning improves retention and understanding. Our social features let you
            connect with peers, join study groups, and tackle challenges as a team.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary/20 shrink-0 mt-1">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Team Challenges</h3>
                <p className="text-muted-foreground">
                  Work with friends to complete group tasks and earn bonus rewards.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-accent/20 shrink-0 mt-1">
                <MessageSquare className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Discussion Forums</h3>
                <p className="text-muted-foreground">Ask questions, share insights, and get help from the community.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-success/20 shrink-0 mt-1">
                <Award className="h-5 w-5 text-success" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Peer Recognition</h3>
                <p className="text-muted-foreground">Give kudos to helpful answers and earn reputation points.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/social">
              <Button size="lg" className="w-full sm:w-auto">
                <Users className="h-4 w-4 mr-2" />
                Explore Community
              </Button>
            </Link>
            <Link href="/social/groups">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <UserPlus className="h-4 w-4 mr-2" />
                Find Study Groups
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Social Learning Features</h2>
          <p className="text-lg text-muted-foreground">
            Connect, collaborate, and learn together with these powerful tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="neumorphic border-0">
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Study Groups</CardTitle>
              <CardDescription>Create or join groups based on subjects or interests</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Form study circles with classmates or connect with learners worldwide who share your interests. Share
                resources, schedule sessions, and learn together.
              </p>
            </CardContent>
          </Card>

          <Card className="neumorphic border-0">
            <CardHeader>
              <Target className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Group Challenges</CardTitle>
              <CardDescription>Compete together to achieve learning goals</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Take on timed challenges with your group, like completing a series of quizzes or mastering a difficult
                topic. Earn bonus rewards when everyone succeeds.
              </p>
            </CardContent>
          </Card>

          <Card className="neumorphic border-0">
            <CardHeader>
              <MessageSquare className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Discussion Forums</CardTitle>
              <CardDescription>Ask questions and share knowledge</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Participate in subject-specific forums where you can ask questions, provide answers, and engage in
                thoughtful discussions about various topics.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="glass-card rounded-xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 z-0" />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Learn Together?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our growing community of learners and experience the power of collaborative education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Join Now
              </Button>
            </Link>
            <Link href="/social">
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

