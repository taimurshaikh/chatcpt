import React from "react";

interface ChatOutputProps {
  chatHistory: { text: string; isBot: boolean }[];
}

const ChatOutput: React.FC<ChatOutputProps> = ({ chatHistory }) => {
  return (
    <div className="border p-4 mb-4 max-h-64 overflow-y-auto rounded-lg bg-gray-900">
      {chatHistory.map((chat, index) => (
        <div
          key={index}
          className={`mb-2 p-2 ${
            chat.isBot
              ? "bg-gray-800 text-gray-100"
              : "bg-gray-100 text-gray-800"
          } rounded-md`}
        >
          {chat.text}
        </div>
      ))}
    </div>
  );
};

export default ChatOutput;
