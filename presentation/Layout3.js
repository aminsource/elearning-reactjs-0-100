// example Layout.js
import React from "react";

export default ({ children }) => (
  <div
    style={{
      width: "100vw",
      height: "100vw",
      backgroundColor: "#1976D2"
    }}
  >
    {children}
    <a href="http://www.ractor.ir">Home</a>
  </div>
);
