import React, { useState } from "react";
import ChatInput from "./ChatInput";
import ChatOutput from "./ChatOutput";
import Dropdown from "./Dropdown";
import Footer from "./Footer";
import "axios";
import axios from "axios";

interface MainPageProps {
  trpc: any;
}

const MainPage: React.FC<MainPageProps> = () => {
  const [chatHistory, setChatHistory] = useState<
    { text: string; isBot: boolean }[]
  >([]);

  const [selectedUniversity, setSelectedUniversity] = useState<string | null>(
    null
  );

  const handleDropdownSelect = (selectedOption: string) => {
    setSelectedUniversity(selectedOption);
  };

  const universityOptions = [
    "Harvard University",
    "Yale University",
    "Princeton University",
    "Columbia University",
    "University of Pennsylvania",
    "Dartmouth College",
    "Brown University",
    "Cornell University",
    "Massachusetts Institute of Technology (MIT)",
    "Stanford University",
    "University of California, Berkeley",
    "Carnegie Mellon University",
  ];

  // Function to handle user queries and add them to chat history
  const handleUserQuery = async (query: string) => {
    const userQuery = { text: query, isBot: false };
    try {
      const response = await axios.post("/api/generate", {
        query,
        selectedUniversity,
      });
      const message = response.data.message;
      const botResponse = { text: message, isBot: true };
      setChatHistory([...chatHistory, userQuery, botResponse]);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="dark flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <main className="dark flex flex-col justify-center items-center flex-1 px-4 py-8 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
        <header className="px-4 py-6 text-center justify-normal text-2xl md:text-3xl lg:text-4xl font-semibold bg-gray-900">
          Chat
          <span className="font-bold px-1 ml-0.5 mr-1 bg-text text-primary rounded-lg">
            CPT
          </span>
        </header>
        <div className="px-4 py-6 text-justify text-sm md:text-base lg:text-md font-thin bg-gray-900">
          Hello! I'm ChatCPT, your assistant for work authorization questions in
          the US.
        </div>

        <div>
          {/* University Dropdown */}
          <div>
            <Dropdown
              label="Select Your University"
              options={universityOptions}
              onSelect={handleDropdownSelect}
            />
          </div>

          <div className="flex-auto">
            {/* Chat Input */}
            <ChatInput onUserQuery={handleUserQuery} />
          </div>
        </div>

        <div className="mb-4 bg-gray-900 p-4 m-4 rounded-lg w-full">
          <ChatOutput chatHistory={chatHistory} />
        </div>
      </main>

      <Footer
        technologies={[
          "Langchain with GPT",
          "React",
          "Node.js",
          "Express",
          "Tailwind CSS",
          "Typescript",
        ]}
      />
    </div>
  );
};

export default MainPage;
