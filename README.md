# AI Chatbot using Groq API and Node.js

This project is a simple AI chatbot built using the Groq API and Node.js. It allows users to interact with the chatbot directly from the terminal and receive AI-generated answers to their queries. The project uses Node.js version 20 due to compatibility issues with version 22.

## Prerequisites

Before you begin, ensure you have the following:

- [Node.js](https://nodejs.org/) (version 20)
- npm (Node Package Manager)
- A Groq API account and API key (Register and create your API key at [Groq Console](https://console.groq.com/docs/overview))

## Installation

Follow these steps to set up the project:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ai-chatbot-groq.git
   cd ai-chatbot-groq
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   The following dependencies are required:

   - `node-fetch`: For making API calls.
   - `dotenv`: For managing environment variables.
   - `readline-sync`: For synchronous user input in the terminal.
   - `colors`: For adding color to the terminal output.

   These are automatically installed via `npm install` based on the `package.json` file.

3. Create a `.env` file in the project root directory and add your Groq API key:

   ```env
   GROQ_API_KEY=your-api-key-here
   ```

## Usage

1. Start the chatbot:

   ```bash
   node chatbot.js
   ```

2. Enter your queries directly in the terminal, and the chatbot will respond.

## Project Structure

```plaintext
.
├── chatbot.js          # Main chatbot logic
├── package.json        # Project metadata and dependencies
├── .env                # Environment variables
└── README.md           # Project documentation
```

## Troubleshooting

If you encounter any issues, ensure the following:

- Node.js version is 20.
- Your `.env` file contains the correct API key.
- Dependencies are installed (`npm install`).
- The Groq API key is active and valid.

## Resources

- [Groq API Documentation](https://console.groq.com/docs/overview)
- [Node.js Documentation](https://nodejs.org/en/docs/)

## License

This project is licensed under the MIT License. See the LICENSE file for details.
