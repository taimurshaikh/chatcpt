/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class-based activation
  theme: {
    extend: {
      colors: {
        primary: '#1a202c', // Dark blue-gray background color
        secondary: '#4a5568', // Gray for buttons
        text: '#e2e8f0', // Light gray text color
        bot: '#38a169', // Green color for chatbot responses
        user: '#3182ce', // Blue color for user messages
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'], // Add dark mode variant for background color
      textColor: ['dark'], // Add dark mode variant for text color
    },
  },
  plugins: [],
}