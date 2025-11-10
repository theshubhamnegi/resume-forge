"use client"
import ResumeComponent from "@/components/Resume";
import { SampleResumeData } from "@/sampleResumeData";
import { FileText, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [resumeJson, setResumeJson] = useState<string>(JSON.stringify(SampleResumeData, null, 2));
  const [error, setError] = useState<string | null>(null);
  const parseAndValidateResumeJson = (resume: string) => {
    try {
      setResumeJson(resume)
      JSON.parse(resume)
      setError(null);
    } catch (error) {
      console.error(error)
      setError(`${error}`)
    }
  }
  return (
    <div className="relative">
      <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between no-print">
        <div className="flex items-center gap-3">
          <FileText className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-semibold text-foreground">Resume Forge</h1>
        </div>
        <button className="gap-2">
          <Sparkles className="h-4 w-4" />
          Optimize with AI
        </button>
      </header>

      <div className="flex-1 flex overflow-hidden no-print h-screen">
        <div className="w-1/2 border-r border-border flex flex-col  ">

          <textarea
            placeholder="Paste the job description here..."
            className="h-full resize-none font-mono text-sm border border-white"
          />

          <textarea
            value={resumeJson}
            onChange={(e) => parseAndValidateResumeJson(e.target.value)}
            placeholder="Your resume JSON..."
            className="h-full resize-none font-mono text-sm bg-[hsl(var(--editor-bg))] text-[hsl(var(--editor-text))] border border-white"
          />
        </div>

        <div className="w-1/2 flex flex-col bg-muted/30 no-print">
          <div className="px-6 py-4 border-b border-border  ">
            <h2 className="text-lg font-semibold text-foreground ">Live Preview</h2>
          </div>

        </div>
      </div>
      <div className="absolute right-10 top-44 resume-print" style={{ width: "210mm" }}>
        {error ||
          <ResumeComponent resumeJson={JSON.parse(resumeJson)} />
        }
      </div>
    </div>
  );
}
