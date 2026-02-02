
import { GoogleGenAI } from "@google/genai";
import { PROJECTS } from "../constants";

const SYSTEM_PROMPT = `You are the AI Assistant for Yusra Abdi, a professional Full-Stack Developer, Web Designer, and Digital Marketer. 
Your goal is to help visitors understand Yusra's skills and projects.
Here is the project data: ${JSON.stringify(PROJECTS)}
Focus on being helpful, professional, and highlight Yusra's expertise in WordPress, Webflow, Software Development, and Social Media Management (SMM).
Keep responses concise and engaging.`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting to my brain right now. Please try again or contact Yusra directly!";
  }
};
