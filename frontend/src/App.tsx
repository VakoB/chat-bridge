import ChatPage from "./ChatPage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <ChatPage />
    </div>
  );
}

export default App;
