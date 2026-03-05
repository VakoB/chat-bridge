export default function UserMessage({prompt}: {prompt: string}) {
  return (
    <div className="flex items-center justify-end gap-2">
      <div className="max-w-[70%] bg-gray-100 text-gray-800 px-4 py-2 rounded-lg mt-1">
        {prompt}
      </div>
    </div>
  );
}
