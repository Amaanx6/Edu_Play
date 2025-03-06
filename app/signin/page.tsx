import SignInForm from "@/components/sign-in-form"

export default function SignInPage() {
  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-8rem)] py-12">
      <div className="grid gap-8 w-full max-w-md">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your account to continue learning</p>
        </div>
        <SignInForm />
      </div>
    </div>
  )
}

