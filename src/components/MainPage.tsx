import React, { useState } from "react";
import ChatInput from "./ChatInput";
import ChatOutput from "./ChatOutput";
import Footer from "./Footer";

const MainPage: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<
    { text: string; isBot: boolean }[]
  >([
    {
      text: "Hello! I'm ChatCPT, your assistant for work authorization questions in the US.",
      isBot: true,
    },
  ]);

  // Function to handle user queries and add them to chat history
  const handleUserQuery = (query: string) => {
    // You can implement logic here to interact with the OpenAI API and get the chatbot's response
    // For now, let's simply echo the user query as the chatbot's response
    const userQuery = { text: query, isBot: false };
    const botResponse = { text: query, isBot: true };
    setChatHistory([...chatHistory, userQuery, botResponse]);
    console.log(...chatHistory);
  };

  return (
    <div className="dark flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <main className="dark flex flex-col justify-center items-center flex-1 px-4 py-8 sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
        <header className="px-4 py-6 text-center text-xl md:text-2xl lg:text-3xl font-bold bg-gray-900">
          ChatCPT - Work Authorization Assistant
        </header>
        {/* Chat Input */}
        <ChatInput onUserQuery={handleUserQuery} />
        {/* Chat Output */}
        <div className="mb-4 bg-gray-900 p-4 rounded-lg w-full">
          <ChatOutput chatHistory={chatHistory} />
        </div>
      </main>

      <Footer
        technologies={[
          "Langchain",
          "React",
          "Tailwind CSS",
          "Typescript",
          "Puppeteer",
        ]}
      />
    </div>
  );
};

export default MainPage;
