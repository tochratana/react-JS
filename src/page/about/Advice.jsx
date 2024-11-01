import React, { useState, useEffect } from "react";

const Advice = () => {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  useEffect(() => {
    fetchAdvice(); // Fetch advice when the component mounts
  }, []);

  return (
    <div
      onClick={fetchAdvice}
      className="hover:cursor-pointer bg-black sm:px-0 py-[30px] dark:shadow-[0_4px_10px_rgba(22,163,74,0.8)] dark:hover:shadow-none xl:px-[100px] my-10 text-center m-auto rounded-2xl"
    >
      <p className="md:text-2xl text-white text-sm">
        " {advice ? advice : "Loading advice..."} "
      </p>
    </div>
  );
};

export default Advice;
