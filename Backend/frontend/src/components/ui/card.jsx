import React from "react";

export const Card = ({ children, className }) => {
  return (
    <div className={`rounded-lg shadow-md p-6 bg-white ${className}`}>
      {children}
    </div>
  );
};

