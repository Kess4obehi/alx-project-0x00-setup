import React from "react";
import { ButtonProps  } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-7 py-3 text-lg",
  }

  return (
    <button 
      className={`bg-blue-500 text-white ${sizeClasses[size]} ${shape}`}
      >
      {title}
    </button>
  )
}

export default Button;