import * as zod from "zod";

export interface LLMClient {
  generateJSON<T>(prompt: string, schema: zod.ZodSchema<T>, model?: string): Promise<string>;
}

export class LLM {
    llm: LLMClient

    constructor(llmClient: LLMClient) {
        this.llm = llmClient
    }

    async generateJSON<T>(prompt: string, schema: zod.ZodSchema<T>, model?: string){
        return this.llm.generateJSON<T>(prompt, schema, model)
    }

}