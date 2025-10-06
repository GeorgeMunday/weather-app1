"use client";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";
import SubHeading from "@/components/banners/SubHeading";
import Footer from "@/components/banners/Footer";
import { tailwindColours } from "@/components/colours/ColorMode";
import { useTheme } from "@/context/ThemeContext";

const SignUp: React.FC = () => {
  const router = useRouter();
  const { isLight, toggleTheme } = useTheme();
  const colours = tailwindColours({ isLight, setIsLight: () => {} });
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        username: username,
        createdAt: new Date(),
      });

      console.log("User registered and stored in Firestore:", user.uid);
      setUsername("");
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  return (
    <>
      <SubHeading text="Sign Up" />
      <div
        className={`h-[80vh] flex justify-center items-center ${colours.background}`}
      >
        <form
          onSubmit={handleSignUp}
          className={`w-full max-w-sm flex flex-col gap-4 p-15 rounded-2xl ${colours.card} ${colours.text} ${colours.border}`}
        >
          <input
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className={`w-full border p-4 ${colours.border}`}
          />
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`w-full border p-4 ${colours.border}`}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={`w-full border p-4 ${colours.border}`}
          />
          {error && <p className="text-black">{error}</p>}
          <button
            type="submit"
            className={`w-full border p-4 ${colours.border}`}
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
