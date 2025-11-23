import z from "zod";

// NOTE: gemini api sdk does not supports max character limit for strings, so added hard constrains for overview and achievements in the prompt itself
// and make sure the validation schema character limit is higher then the character limit for same in the prompt,
// for example: overview in prompt has 250 characters but in the schema it is 300, since gemini will produce some words over the limit
const experienceSchema = z.object({
    company: z.string().describe(
        "The name of the company where the user worked."
    ),
    projectName: z.string().describe("The name of the project."),
    achievements: z.array(z.string().max(150, "Achievement cannot be more than 150 characters.")).describe(
        "A comma-separated list of 3–6 short achievement bullet points. Each bullet point should begin with a strong action verb and describe measurable impact where possible."
    )
});

export const resumeSchema = z.object({
    overview: z.string().max(350, "Overview cannot be more than 300 characters.").describe(
        "A concise 3 to 5 sentence professional summary describing the user's core skills, experience level, and strengths. Should be written in first-person or third-person neutral tone suitable for a modern resume. Avoid bullet points, avoid exaggerations, and focus on factual, high-impact statements."
    ),
    experiences: z.array(experienceSchema).describe(
        "A chronological list of professional experiences, starting with the most recent. Each experience entry must strictly follow the structure defined in the experienceSchema. Include only relevant roles, avoiding unrelated jobs or filler entries."
    ),
});

export type ExperienceSchemaType = z.infer<typeof experienceSchema>