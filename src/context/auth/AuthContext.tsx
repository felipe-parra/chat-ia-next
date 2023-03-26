import { createContext, useState, useEffect } from "react";
import { User as UserType } from "firebase/auth";
import { firebaseAuth } from "@/utils/firebase";

type AuthContextType = {
  currentUser: UserType | null;
};

const AuthContext = createContext<AuthContextType>({ currentUser: null });

export const AuthProvider: React.FC<any> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
