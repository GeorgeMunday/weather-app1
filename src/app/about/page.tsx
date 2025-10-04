import AboutBox from "@/components/boxes/AboutBox";
import Footer from "@/components/banners/Footer";
import SubHeading from "@/components/banners/SubHeading";
import React from "react";

const page = () => {
  return (
    <>
      <SubHeading />
      <hr className="border-gray-400 mb-0" />
      <AboutBox />
      <Footer />
    </>
  );
};

export default page;
