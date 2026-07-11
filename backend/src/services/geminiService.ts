import { GoogleGenAI } from "@google/genai";
import { CRM_PROMPT } from "../prompts/crmPrompts.js";

function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is missing in .env");
  }

  return new GoogleGenAI({
    apiKey,
  });
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function mapCRMFields(
  records: Record<string, string>[]
): Promise<any[]> {

  const ai = getGeminiClient();

  const prompt = `
${CRM_PROMPT}

CSV Records:

${JSON.stringify(records, null, 2)}
`;

  let retries = 3;

  while (retries > 0) {

    try {

      const response = await ai.models.generateContent({
        model: "gemini-flash-latest",
        contents: prompt,
      });

      const text = response.text ?? "";

      const cleaned = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      return JSON.parse(cleaned);

    } catch (error: any) {

      console.log("Gemini Error:", error.message);

      if (error.status === 503 && retries > 1) {

        console.log("Retrying in 2 seconds...");

        retries--;

        await sleep(2000);

        continue;

      }

      throw error;

    }

  }

  return [];

}