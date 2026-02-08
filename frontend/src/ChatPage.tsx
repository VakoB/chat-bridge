import { useState } from "react";
import ChatbotMessage from "./components/ChatbotMessage"
import ChatInput from "./components/ChatInput";
import UserMessage from "./components/UserMessage";

export default function ChatPage() {
  const [userMessage, setUserMessage] = useState("");
  return (
    <main className="flex-1 h-screen flex flex-col bg-white">
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        <ChatbotMessage />
        <UserMessage />
      </div>
      <ChatInput />
    </main>
  );
}
