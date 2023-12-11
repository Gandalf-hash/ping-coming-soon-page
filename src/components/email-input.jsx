import React from "react";

export const AppEmailInput = () => {
  return (
    <div className="input-container">
      <input type="email" name="email" value={null} />
      <button>Notify me</button>
    </div>
  );
};
