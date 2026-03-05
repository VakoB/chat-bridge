import cpuImage from "../assets/ic_cpu.png";
import useTypingEffect from "../customHooks/useTypingEffect";

export default function ChatbotMessage({ content }: { content: string }) {
  const { text, isAnimating } = useTypingEffect(content, 10);
  return (
    <div className="flex items-center justify-start gap-2">
      <img className="w-6 rounded-full" src={cpuImage} alt="profile picture" />
      <div className="max-w-[70%] bg-gray-100 text-gray-800 px-4 py-2 rounded-lg mt-1">
        <p>
          {text}
          {isAnimating && (
            <span className="text-gray-400 ml-1 animate-pulse">▍</span>
          )}
        </p>
      </div>
    </div>
  );
}
