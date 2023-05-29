import React, { useState } from "react";

const FocusableDiv = ({ children }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const focusClass = isFocused ? " border-slate-400" : " border";

  return (
    <div
      tabIndex="0"
      className={
        "border rounded w-full py-3 px-3 text-gray-700 bg-slate-50 leading-tight" +
        focusClass
      }
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {children}
    </div>
  );
};

export default FocusableDiv;
