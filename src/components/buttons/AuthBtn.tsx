import React from "react";
import Link from "next/link";

const AuthBtn = () => {
  return (
    <>
      <div className="flex h-9 w-16 p-1 justify-center border-gray-400 border-1 rounded">
        <Link href="/auth/signin">Sign in</Link>
      </div>
    </>
  );
};

export default AuthBtn;
