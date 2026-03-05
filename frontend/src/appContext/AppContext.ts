import { createContext } from "react";
import type AppContextType from "../types/AppContextType";

export const AppContext = createContext<AppContextType | null>(null);