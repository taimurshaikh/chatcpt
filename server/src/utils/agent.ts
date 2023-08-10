import { WebBrowser } from "langchain/tools/webbrowser";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";

import dotenv from "dotenv";
dotenv.config();

async function run(query: string) {
  process.env.LANGCHAIN_HANDLER = "langchain";
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

  console.log("creating tools");
  const tools = [
    new SerpAPI(process.env.SERPAPI_API_KEY, {
      location: "New York,New York,United States",
      hl: "en",
      gl: "us",
    }),
    new Calculator(),
    new WebBrowser({ model, embeddings }),
  ];

  console.log("creating executor");
  const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "zero-shot-react-description",
    verbose: true,
  });
  console.log(query);
  const response = await executor.call({input: query});
  console.log(response);
  return response;
}

export default run;