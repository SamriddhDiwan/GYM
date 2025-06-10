import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
      {...props}
    />
  );
}
