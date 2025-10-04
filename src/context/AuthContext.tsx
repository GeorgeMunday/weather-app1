"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/firebase/firebase";

// Define the user data type
interface UserData {
  uid: string;
  email: string;
  username?: string;
  // You can add more fields here in the future:
  // photoURL?: string;
  // country?: string;
  // role?: "user" | "admin";
  // themePreference?: "light" | "dark";
}

interface AuthContextProps {
  user: User | null;
  userData: UserData | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  userData: null,
  loading: true,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        try {
          const userDocRef = doc(db, "users", currentUser.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const data = userDocSnap.data() as Omit<UserData, "uid" | "email">; // omit uid & email to prevent overwrite
            setUserData({
              ...data, // other Firestore fields
              uid: currentUser.uid, // explicitly set uid
              email: currentUser.email || "",
              username: data.username || "",
            });
          } else {
            // Fallback: use data from Firebase Auth itself
            setUserData({
              uid: currentUser.uid,
              email: currentUser.email || "",
              username: currentUser.displayName || "",
            });
          }
        } catch (error) {
          console.error("Error loading user data:", error);
        }
      } else {
        setUserData(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, userData, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
