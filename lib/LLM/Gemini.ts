import { GoogleGenAI } from "@google/genai";
import { LLMClient } from "./LLM";
import zodToJsonSchema from "zod-to-json-schema";
import * as zod from 'zod'

export class GeminiClient implements LLMClient {
    ai: GoogleGenAI

    constructor(apiKey: string) {
        this.ai = new GoogleGenAI({
            apiKey: apiKey
        });
    }

    async generateJSON<T>( prompt: string, schema: zod.ZodSchema<T>, model = "gemini-2.5-flash") {
        const contents = [
            {
                role: 'user',
                parts: [
                    {
                        text: prompt,
                    },
                ],
            },
        ];
        return (await this.ai.models.generateContent({
            model,
            config: {
                responseMimeType: "application/json",
                responseJsonSchema: zodToJsonSchema(schema),
            },
            contents,
        }))?.candidates?.[0]?.content?.parts?.[0]?.text ?? ""
    }

}