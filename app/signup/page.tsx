import SignUpForm from "@/components/sign-up-form"

export default function SignUpPage() {
  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-8rem)] py-12">
      <div className="grid gap-8 w-full max-w-md">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create an Account</h1>
          <p className="text-muted-foreground">Enter your information to create an account and start learning</p>
        </div>
        <SignUpForm />
      </div>
    </div>
  )
}

