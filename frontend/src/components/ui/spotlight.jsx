import React from "react";

export const Spotlight = ({ className, fill = "white" }) => {
  return (
    <div
      className={`absolute w-80 h-80 bg-gradient-to-br from-${fill}/20 to-transparent blur-3xl rounded-full ${className}`}
    />
  );
};

