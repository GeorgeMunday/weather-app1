import React from "react";
import AboutText from "../text/AboutText";

const AboutBox = () => {
  return (
    <div className=" mx-4 md:mx-10 lg:mx-50 h-auto min-h-[80vh] border-l-1 border-r-1 border-gray-400 flex flex-col items-center ">
      <AboutText />
    </div>
  );
};

export default AboutBox;
