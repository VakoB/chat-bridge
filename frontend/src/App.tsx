import ChatPage from "./ChatPage";
import Sidebar from "./components/Sidebar";
// import Login from "./pages/Login";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <ChatPage />
    </div>
    // <>
    // <Login />
    // </>
  );
}

export default App;
