"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, Sparkles, FileText, Upload } from "lucide-react"

export default function QuizGenerator() {
  const [text, setText] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async () => {
    if (!text.trim()) return

    setIsGenerating(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsGenerating(false)
  }

  return (
    <Card className="glass-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              InstantQuiz Generator
            </CardTitle>
            <CardDescription>Paste text or upload a document to generate custom quizzes</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="text">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="text">Paste Text</TabsTrigger>
            <TabsTrigger value="upload">Upload Document</TabsTrigger>
          </TabsList>
          <TabsContent value="text">
            <Textarea
              placeholder="Paste text from articles, books, or notes here..."
              className="min-h-[150px] mb-4"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </TabsContent>
          <TabsContent value="upload">
            <div className="border border-dashed border-border rounded-lg p-8 text-center space-y-4">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Drag and drop your file here, or click to browse</p>
                <p className="text-xs text-muted-foreground mt-1">Supports PDF, DOCX, TXT (max 10MB)</p>
              </div>
              <Button variant="outline" size="sm">
                <FileText className="mr-2 h-4 w-4" />
                Select File
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Clear</Button>
        <Button onClick={handleGenerate} disabled={isGenerating || !text.trim()}>
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Quiz
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

