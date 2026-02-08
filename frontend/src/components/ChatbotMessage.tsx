import cpuImage from "../assets/ic_cpu.png"

export default function ChatbotMessage() {
  return (
    <div className="flex items-center justify-start gap-2">
      <img className="w-6 rounded-full" src={cpuImage} alt="profile picture" />
      <div className="max-w-[70%] bg-gray-100 text-gray-800 px-4 py-2 rounded-lg mt-1">
        Hello! How can I help you today?
      </div>
    </div>
  );
}
