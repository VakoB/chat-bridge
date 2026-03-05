import { useState } from "react";
import { AppContext } from "./AppContext";
import type AppContextType from "../types/AppContextType";

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AppContextType["user"]>(null);
  const [chats, setChats] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || "light");

  const value: AppContextType = {
    user,
    setUser,
    chats,
    theme
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};