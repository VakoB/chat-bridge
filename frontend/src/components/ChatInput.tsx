import { useState } from "react";
import sendIcon from "../assets/ic_send.svg";
import type Message from "../types/Message";
import stopIcon from "../assets/ic_stop.svg";

export default function ChatInput({
  setMessages,
  loading,
}: {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  loading: boolean;
}) {
  const [chatInputText, setChatInputText] = useState("");

  const handleSubmit = () => {
    if (!chatInputText) return;
    setMessages((prev) => [
      ...prev,
      { aiModel: "Gemini", role: "user", content: chatInputText },
    ]);
    setChatInputText("");
  };

  return (
    <div className="border-t border-gray-200 px-4 py-3">
      <div className="flex items-center gap-2">
        <input
          value={chatInputText}
          onChange={(e) => setChatInputText(e.target.value)}
          type="text"
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSubmit}
          className="bg-[#4F46E5] text-white p-3 rounded-full cursor-pointer hover:bg-[#3e37bd] ease-in duration-150"
        >
          <img src={loading ? stopIcon : sendIcon} alt="send icon" />
        </button>
        <button
          onClick={() => {
            setMessages((prev) => [
              ...prev,
              { aiModel: "Gemini", role: "assistant", content: " Hello! How can I help you today?" },
            ]);
          }}
        >
          response
        </button>
      </div>
    </div>
  );
}
