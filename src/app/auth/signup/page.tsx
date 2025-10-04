"use client";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";
import SubHeading from "@/components/banners/SubHeading";
import Footer from "@/components/banners/Footer";

const SignUp: React.FC = () => {
  const router = useRouter();

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
      <SubHeading />
      <hr className="border-gray-400 mb-0" />
      <div className="mx-4 md:mx-10 lg:mx-40 min-h-[90vh] border-t-0 border border-black flex justify-center items-center">
        <form
          onSubmit={handleSignUp}
          className="w-full max-w-sm flex flex-col gap-4"
        >
          <input
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full border border-black p-2"
          />
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-black p-2"
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-black p-2"
          />
          {error && <p className="text-black">{error}</p>}
          <button
            type="submit"
            className="border border-black px-4 py-2 hover:bg-black hover:text-white"
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
