import { useEffect, useState } from "react";

export default function useTypingEffect(textToType: string, speed = 30) {
  const [text, setText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!textToType) return;

    setText("");
    setIsAnimating(true);

    let index = 0;

    const interval = setInterval(() => {
      index++;

      setText(textToType.slice(0, index));

      if (index >= textToType.length) {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [textToType, speed]);

  return { text, isAnimating };
}
