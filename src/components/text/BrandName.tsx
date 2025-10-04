import React from "react";
import { useAuth } from "@/context/AuthContext";

const BrandName = () => {
  const { user, userData, loading } = useAuth();

  if (user) {
    return <div>hello {userData?.username}</div>;
  }
  return <div>Weather Today!</div>;
};

export default BrandName;
