import { GoogleGenAI, Type } from "@google/genai";

// Vite exposes env vars via import.meta.env with VITE_ prefix
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.GEMINI_API_KEY || '';
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
        content: "Stop letting your VP of Sales set the quota. It's a conflict of interest.\n\nRevenue Operations isn't just a support function; it's the impartial judge of your revenue engine. When Sales sets the target, they optimize for attainability. When RevOps sets it, they optimize for predictability.\n\nI've seen SaaS companies stall because..."
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
    // Stage 1: Generate 3 controversial topics with 2 stances each
    const stage1Prompt = `
      You are a world-class B2B content strategist.
      For the topic "${topic}", generate exactly 3 controversial, counter-intuitive, or contrarian angles that would be relevant to B2B founders and executives.
      
      For each of the 3 angles, provide exactly 2 distinct stances (strong opinions) that could be taken.
      
      Return a JSON array with this structure:
      [
        {
          "topic": "Topic name",
          "stances": ["Stance 1", "Stance 2"]
        },
        ...
      ]
    `;

    const stage1Response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: stage1Prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              topic: { type: Type.STRING, description: "A controversial angle or sub-topic" },
              stances: { 
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "Exactly 2 distinct stances/opinions for this topic"
              }
            },
            required: ["topic", "stances"]
          }
        }
      }
    });

    const stage1Text = stage1Response.text;
    if (!stage1Text) {
      console.error("Stage 1: No response from API");
      return [];
    }

    const topics = JSON.parse(stage1Text);
    if (!Array.isArray(topics) || topics.length === 0) {
      console.error("Stage 1: Invalid response format");
      return [];
    }

    // Stage 2: Write LinkedIn posts for all 3 topics
    interface TopicWithStances {
      topic: string;
      stances: string[];
    }

    const stage2Prompt = `
      You are a world-class B2B content strategist writing viral LinkedIn thought leadership posts.
      
      For each of the following 3 topics, write a compelling LinkedIn post using the specified stance.
      The posts should be authoritative, direct, and thought-provoking. Each post should be 3-4 paragraphs.
      
      Topics and stances:
      ${topics.map((t: TopicWithStances, idx: number) => 
        `${idx + 1}. Topic: "${t.topic}"\n   Stance: "${t.stances[0]}"`
      ).join('\n\n')}
      
      ## Style Requirements
      
      **NEVER use m dash**
      
      **Avoid bulky paragraph with more than 3 sentences**
      
      **Never use dramatic expressions like "My stomach dropped."** Use calm, plain and neutral expression.
      
      **ALWAYS use strong hook**
      
      **Always have a strong PoV**
      
      **NEVER use expression pattern like it's not X, it's Y**
      
      Return a JSON array with this structure:
      [
        {
          "angle": "Topic name",
          "stance": "The stance used",
          "content": "Full LinkedIn post content (3-4 paragraphs)"
        },
        ...
      ]
    `;

    const stage2Response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: stage2Prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              angle: { type: Type.STRING, description: "The topic/angle name" },
              stance: { type: Type.STRING, description: "The stance/opinion taken" },
              content: { type: Type.STRING, description: "The full LinkedIn post content (3-4 paragraphs)" }
            },
            required: ["angle", "stance", "content"]
          }
        }
      }
    });

    const stage2Text = stage2Response.text;
    if (!stage2Text) {
      console.error("Stage 2: No response from API");
      return [];
    }
    
    const parsed = JSON.parse(stage2Text);
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return [];

  } catch (error) {
    console.error("Gemini API Error:", error);
    return [];
  }
};