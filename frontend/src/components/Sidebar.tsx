
export default function Sidebar() {
  return (
    <aside className="w-64 h-screen border-r border-gray-200 bg-white flex flex-col">
      <div className="px-4 py-4 border-b border-gray-200">
        <h1 className="text-lg font-semibold">ChatBridge</h1>
      </div>

      <div className="px-4 py-4">
        <label className="block text-sm text-gray-500 mb-2">AI Model</label>

        <select
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm cursor-pointer"
          title="Chatbot"
        >
          <option defaultChecked value="ChatGPT">
            ChatGPT
          </option>
          <option value="Gemini">Gemini</option>
        </select>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-2 border-b-gray-600 cursor-pointer hover:bg-gray-100">Chat</div>
      </div>
      <div className="">account</div>
    </aside>
  );
}
