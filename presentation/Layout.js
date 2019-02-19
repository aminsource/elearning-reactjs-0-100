// example Layout.js
import React from "react";

export default ({ children }) => (
  <div
    style={{
      width: "100vw",
      height: "100vw",
      backgroundColor: "#E91E63"
    }}
  >
    {children}
    <a href="http://www.ractor.ir">Home</a>
  </div>
);
