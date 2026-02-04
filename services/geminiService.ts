import { GoogleGenAI } from "@google/genai";

let genAI: GoogleGenAI | null = null;

const getGenAI = () => {
  if (!genAI) {
    const apiKey = process.env.API_KEY;
    if (apiKey) {
      genAI = new GoogleGenAI({ apiKey });
    }
  }
  return genAI;
};

export const generateHelpResponse = async (question: string): Promise<string> => {
  const ai = getGenAI();
  if (!ai) {
    return "I'm having trouble connecting to my brain. Please check the API key.";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-09-2025",
      contents: [
        {
          role: "user",
          parts: [{ text: question }]
        }
      ],
      config: {
        systemInstruction: "You are a friendly, patient IT support guide for non-technical users. You are helping them add an admin user to Google Analytics. Keep your answers extremely short (under 2 sentences), encouraging, and very simple. Do not use jargon.",
      }
    });

    return response.text || "I couldn't quite get that. Try asking simply.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I ran into a small hiccup. Please try asking again.";
  }
};
