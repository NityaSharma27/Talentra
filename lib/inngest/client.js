import { Inngest } from "inngest";

export const inngest = new Inngest({ 
    id: "talentra",
    name: "Talentra",
    credentials: {
        gemini: {
            apiKey: process.env.GEMINI_API_KEY,
        },
    },
 }); 