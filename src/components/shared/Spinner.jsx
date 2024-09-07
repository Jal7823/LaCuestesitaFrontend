import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="w-16 h-16 border-8 border-purple-300 border-t-[#BD85FC] border-solid rounded-full animate-spin"
        style={{
          boxShadow: '0 0 20px #BD85FC, 0 0 50px #BD85FC', 
        }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
