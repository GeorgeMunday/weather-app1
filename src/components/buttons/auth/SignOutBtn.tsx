"use client";

import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";

const SignOutBtn = () => {
  const router = useRouter();

  const handleClick = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <span
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick();
      }}
      className="cursor-pointer text-red-500 hover:underline select-none"
    >
      Sign Out
    </span>
  );
};

export default SignOutBtn;
