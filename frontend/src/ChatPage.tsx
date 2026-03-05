import { useState } from "react";
import ChatbotMessage from "./components/ChatbotMessage";
import ChatInput from "./components/ChatInput";
import UserMessage from "./components/UserMessage";
import type Message from "./types/Message";

const s = [
  {
    role: "assistant",
    content: "Hello! How can I help you today?",
    aiModel: "gpt",
  },
  {
    role: "user",
    content: "Explain React state simply.",
    aiModel: "gpt",
  },
  {
    role: "assistant",
    content: "State is data that can change and cause a re-render.",
    aiModel: "gemini",
  },
];

export default function ChatPage() {
  const [prompt, setPrompt] = useState("");
  const [chatbotMessage, setChatbotMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  return (
    <main className="flex-1 h-screen flex flex-col bg-white">
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((message, index) => {
          if (message.role === "assistant") {
            return <ChatbotMessage key={index} content={message.content} />;
          }
          return <UserMessage key={index} prompt={message.content} />;
        })}

        {loading &&  "..." }
      </div>
      <ChatInput setMessages={setMessages} loading={loading} />
    </main>
  );
}
