import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Gift, Coins, Crown, Unlock } from "lucide-react"

export default function RewardsPage() {
  return (
    <div className="container py-12">
      {/* Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
        <Badge className="mb-4 px-3 py-1 bg-primary/20 text-primary">Feature</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Rewards</h1>
        <p className="text-xl text-muted-foreground">
          Earn virtual currency and unlock exclusive content as you progress through your learning journey
        </p>
      </div>

      {/* Main Feature */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="order-2 lg:order-1 relative">
          <div className="glass-card rounded-xl p-6">
            <div className="aspect-video rounded-lg bg-background overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Rewards System"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6 space-y-4">
              <div className="neumorphic p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Coins className="h-5 w-5 text-accent" />
                  <h4 className="font-medium">Available Rewards</h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-secondary/50 p-3 rounded-md">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm font-medium">Premium Avatar</p>
                      <div className="flex items-center">
                        <Coins className="h-3 w-3 text-yellow-500 mr-1" />
                        <span className="text-xs">500</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">Unlock exclusive profile pictures</p>
                    <Button size="sm" variant="outline" className="w-full mt-2 h-7 text-xs">
                      Redeem
                    </Button>
                  </div>
                  <div className="bg-secondary/50 p-3 rounded-md">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm font-medium">Advanced Quiz</p>
                      <div className="flex items-center">
                        <Coins className="h-3 w-3 text-yellow-500 mr-1" />
                        <span className="text-xs">750</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">Access expert-level content</p>
                    <Button size="sm" variant="outline" className="w-full mt-2 h-7 text-xs">
                      Redeem
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-6">
          <h2 className="text-3xl font-bold">Achievement-Based Rewards</h2>
          <p className="text-lg text-muted-foreground">
            Stay motivated and engaged with our comprehensive rewards system. Complete learning activities, achieve
            milestones, and earn tokens that can be redeemed for exclusive content and features.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary/20 shrink-0 mt-1">
                <Coins className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Virtual Currency</h3>
                <p className="text-muted-foreground">
                  Earn coins for completing quizzes, maintaining streaks, and hitting learning goals.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-accent/20 shrink-0 mt-1">
                <Unlock className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Unlockable Content</h3>
                <p className="text-muted-foreground">
                  Gain access to premium quizzes, advanced tutorials, and exclusive learning resources.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-success/20 shrink-0 mt-1">
                <Trophy className="h-5 w-5 text-success" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Special Challenges</h3>
                <p className="text-muted-foreground">
                  Tackle unique, time-limited challenges for special rewards and badges.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/rewards">
              <Button size="lg" className="w-full sm:w-auto">
                <Gift className="h-4 w-4 mr-2" />
                View Reward Shop
              </Button>
            </Link>
            <Link href="/achievements">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Trophy className="h-4 w-4 mr-2" />
                See Achievements
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Reward System Features</h2>
          <p className="text-lg text-muted-foreground">
            Discover the various ways you can earn rewards and enhance your learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="neumorphic border-0">
            <CardHeader>
              <Coins className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Virtual Currency</CardTitle>
              <CardDescription>Earn coins through various learning activities</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Complete quizzes, maintain daily streaks, participate in discussions, and achieve milestones to earn
                coins that can be redeemed for valuable rewards.
              </p>
            </CardContent>
          </Card>

          <Card className="neumorphic border-0">
            <CardHeader>
              <Unlock className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Premium Content</CardTitle>
              <CardDescription>Access exclusive learning materials</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Unlock advanced quizzes, specialized tutorials, and expert-crafted learning resources that are only
                available through our rewards system.
              </p>
            </CardContent>
          </Card>

          <Card className="neumorphic border-0">
            <CardHeader>
              <Crown className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Customization Options</CardTitle>
              <CardDescription>Personalize your learning experience</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Redeem rewards for custom avatars, profile themes, and special badges that showcase your achievements
                and make your profile stand out.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="glass-card rounded-xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 z-0" />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Earning Rewards?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join EduPlay today and transform your learning journey with our engaging rewards system
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Start Earning Now
              </Button>
            </Link>
            <Link href="/rewards">
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

