import z from "zod";

const experienceSchema = z.object({
    company: z.string().describe(
        "The name of the company where the user worked."
    ),
    projectName: z.string().describe("The name of the project."),
    achievements: z.array(z.string()).describe(
        "A comma-separated list of 3–6 short achievement bullet points. Each bullet point should begin with a strong action verb and describe measurable impact where possible."
    )
});

export const resumeSchema = z.object({
    overview: z.string().describe(
        "A concise 3 to 5 sentence professional summary describing the user's core skills, experience level, and strengths. Should be written in first-person or third-person neutral tone suitable for a modern resume. Avoid bullet points, avoid exaggerations, and focus on factual, high-impact statements."
    ),
    experiences: z.array(experienceSchema).describe(
        "A chronological list of professional experiences, starting with the most recent. Each experience entry must strictly follow the structure defined in the experienceSchema. Include only relevant roles, avoiding unrelated jobs or filler entries."
    ),
});

export type ExperienceSchemaType = z.infer<typeof experienceSchema>