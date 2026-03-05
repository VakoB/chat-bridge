export default interface AppContextType {
  user: null | { id: string; name: string };
  setUser: React.Dispatch<
    React.SetStateAction<{ id: string; name: string } | null>
  >;
  chats: null;
  theme: string;
}
