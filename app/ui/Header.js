import React from "react";

const Header = ({ children }) => {
  return (
    <h3 className="text-purple-400 text-xs font-medium my-1 mt-4 mb-2">
      {children}
    </h3>
  );
};

export default Header;
