"use client"
import ResumeComponent from "@/components/Resume";
import { GeminiClient } from "@/lib/LLM/Gemini";
import { LLM } from "@/lib/LLM/LLM";
import { GENERATE_JSON_PROMPT } from "@/lib/prompts/prompt";
import { SampleResumeData } from "@/lib/sampleResumeData";
import { ExperienceSchemaType, resumeSchema } from "@/lib/schema/resumeSchema";
import { ResumeJSON } from "@/types";
import { FileText, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [resumeJson, setResumeJson] = useState<string>(JSON.stringify(SampleResumeData, null, 2));
  const [error, setError] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState<string | null>("AIzaSyDzxePhVFn_UiTA7aYoDfGiQ-6HgBdcBlU")
  const [jobDescription, setJobDescription] = useState("")
  const [isOptimizingResume, setIsOptimizingResume] = useState(false)

  const convertResumeForSchema = (json: ResumeJSON) => {
    return {
      overview: json.overview,
      experiences: json.experiences?.flatMap(exp => {
        return exp?.projects?.map(project => ({
          company: exp?.company,
          projectName: project?.name,
          achievements: project?.achievements ?? []
        }))
      })
    }
  }

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

  const handleOptimizeResumeButtonClick = async () => {
    if (!apiKey) return setError("API key not set")
    setIsOptimizingResume(true)
    const geminiClient = new GeminiClient(apiKey)
    const llm = new LLM(geminiClient);
    const json = JSON.stringify(convertResumeForSchema(JSON.parse(resumeJson)))
    const prompt = GENERATE_JSON_PROMPT.replace("{{SOURCE_JSON}}", json).replace("{{JOB_DESCRIPTION}}", jobDescription)
    const updatedJson = await llm.generateJSON(prompt, resumeSchema)
    const validationResult = resumeSchema.safeParse(JSON.parse(updatedJson))
    if (validationResult.success) {
      const prevResume: ResumeJSON = JSON.parse(resumeJson)

      const experienceMapByCompany = new Map<string, ExperienceSchemaType>()
      const experienceMapByProjectName = new Map<string, ExperienceSchemaType>()

      validationResult.data.experiences.forEach(exp => {
        experienceMapByCompany.set(exp.company, exp)
        experienceMapByProjectName.set(exp.projectName, exp)
      })

      const updatedResumeJson: ResumeJSON = {
        ...prevResume,
        overview: validationResult.data.overview,
        experiences: prevResume.experiences.map(exp => {
          if (experienceMapByCompany.has(exp.company)) {
            return {
              ...exp,
              projects: exp.projects.map(project => {
                if (experienceMapByProjectName.has(project.name)) {
                  return {
                    ...project,
                    achievements: experienceMapByProjectName.get(project.name)?.achievements ?? []
                  }
                }
                return project
              })
            }
          }
          return exp
        })
      }
      setResumeJson(JSON.stringify(updatedResumeJson))
    }else{
      console.log(validationResult.error)
    }
    setIsOptimizingResume(false)
  }

  return (
    <div className="relative">
      <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between no-print">
        <div className="flex items-center gap-3">
          <FileText className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-semibold text-foreground">Resume Forge</h1>
          <input placeholder="Input Gemini API key" value={apiKey ?? ""} onChange={(e) => {
            setApiKey(e.target.value)
          }} className="border border-white p-2 rounded-lg" />
        </div>
        <button className={`gap-2 ${isOptimizingResume ? "pointer-events-none" : "pointer-events-auto"} cursor-pointer flex border border-white py-2 px-4 rounded-lg`} onClick={handleOptimizeResumeButtonClick}>
          <Sparkles className="h-4 w-4" />
          {!isOptimizingResume ? "Optimize with AI" : "Optimizing Resume..."}
        </button>
      </header>

      <div className="flex-1 flex overflow-hidden no-print h-screen">
        <div className="w-1/2 border-r border-border flex flex-col  ">

          <textarea
            placeholder="Paste the job description here..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value?.trim())}
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
