import React, { useState } from "react";

interface ChatInputProps {
  onUserQuery: (query: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onUserQuery }) => {
  const [userInput, setUserInput] = useState("");

  // Function to handle user input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  // Function to handle user query submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userInput.trim() !== "") {
      // Send user query to the parent component (MainPage) for processing
      onUserQuery(userInput.trim());
      setUserInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-4 w-full max-w-lg">
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        className="flex-1 py-2 px-4 rounded-l-lg focus:outline-none focus:ring focus:border-blue-300 bg-gray-100 text-gray-800"
        placeholder="Type your question..."
      />
      <button
        type="submit"
        className="bg-gray-800 text-white px-4 rounded-r-lg hover:bg-green-900 focus:ring focus:border-blue-300"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
