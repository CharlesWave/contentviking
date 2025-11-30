import { GoogleGenAI, Type } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export interface GeneratedPost {
  angle: string;
  stance: string;
  content: string;
}

export const generateContentStrategy = async (topic: string): Promise<GeneratedPost[]> => {
  if (!apiKey) {
    console.warn("API Key is missing. Returning mock data.");
    return [
      {
        angle: "Revenue Operations vs. Sales",
        stance: "RevOps should own the quota model, not the VP of Sales.",
        content: "Stop letting your VP of Sales set the quota. It’s a conflict of interest.\n\nRevenue Operations isn't just a support function; it's the impartial judge of your revenue engine. When Sales sets the target, they optimize for attainability. When RevOps sets it, they optimize for predictability.\n\nI've seen SaaS companies stall because..."
      },
      {
        angle: "The 'Growth at All Costs' Fallacy",
        stance: "Profitability is the new growth metric for Series B.",
        content: "Unpopular opinion: If you're a Series B SaaS burning 2x ARR, you aren't growing. You're dying slowly.\n\nThe era of 'growth at all costs' ended in 2022. The market now rewards efficiency metrics like Rule of 40 and Burn Multiple over top-line explosion.\n\nFounders need to pivot from..."
      },
      {
        angle: "Founder-Led Sales",
        stance: "Founders should stay in sales until $10M ARR, not $1M.",
        content: "Most founders hire a VP of Sales too early. You think you need 'scale', but you actually need 'product-market fit validation' that only a founder can do.\n\nHiring a VP of Sales at $1M ARR usually leads to a generic playbook that fails because the playbook hasn't been written yet.\n\nHere is why you need to stay in the trenches..."
      }
    ];
  }

  try {
    const prompt = `
      You are a world-class B2B content strategist. 
      For the topic "${topic}", identify 3 distinct, controversial, or counter-intuitive angles relevant to B2B founders.
      
      For each angle:
      1. Define a clear "Stance" (a strong opinion).
      2. Write the opening of a viral LinkedIn post (Headline + First 2 paragraphs). The tone should be authoritative and direct.
      
      Return exactly 3 items.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              angle: { type: Type.STRING, description: "The general angle or sub-topic" },
              stance: { type: Type.STRING, description: "The specific opinion taken" },
              content: { type: Type.STRING, description: "The draft post text" }
            },
            required: ["angle", "stance", "content"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];
    
    // Parse the JSON array
    const parsed = JSON.parse(text);
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return [];

  } catch (error) {
    console.error("Gemini API Error:", error);
    return [];
  }
};