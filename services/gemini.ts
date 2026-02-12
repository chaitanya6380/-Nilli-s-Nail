
import { GoogleGenAI, Type } from "@google/genai";

export const getBeautyAdvice = async (concerns: string) => {
  const apiKey = (process.env.GEMINI_API_KEY || process.env.API_KEY || '').trim();
  if (!apiKey) {
    return null;
  }
  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Provide a luxurious, personalized beauty recommendation for a client with these concerns: "${concerns}". 
                 The tone should be elegant, professional, and sophisticated. 
                 Suggest 2 services from our list (Hair, Skin, Nails) and a home care tip.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            opening: { type: Type.STRING },
            recommendations: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  service: { type: Type.STRING },
                  benefit: { type: Type.STRING }
                }
              }
            },
            homeCareTip: { type: Type.STRING },
            closing: { type: Type.STRING }
          },
          required: ["opening", "recommendations", "homeCareTip", "closing"]
        }
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};
