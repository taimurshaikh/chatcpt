import { WebBrowser } from "langchain/tools/webbrowser";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import dotenv from "dotenv";
dotenv.config();

async function run(query: string) {

  console.log("creating model");
  const model = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY || "",
    temperature: 0.9,
    modelName: "gpt-3.5-turbo",
  });
  console.log("creating embeddings");
  const embeddings = new OpenAIEmbeddings({
    openAIApiKey: process.env.OPENAI_API_KEY || "",
  });

  console.log("creating browser");
  const browser = new WebBrowser({ model, embeddings });

  console.log("calling browser");
  const result = await browser.call(`"https://isso.columbia.edu/content/f-1-cpt-curricular-practical-training",${query}`);

  console.log(result);
  return result;
}

export default run;