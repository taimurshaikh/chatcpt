import { OpenAI } from "langchain/llms/openai";
import dotenv from 'dotenv';

dotenv.config()

const llm = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY || "",
  temperature: 0.9,
  modelName: "gpt-3.5-turbo",
});

async function generateChat(prompt: string) {
    const response = await llm.predict(prompt);
    return response;

};

export default generateChat;
